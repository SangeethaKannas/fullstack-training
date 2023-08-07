var express = require('express');
var config = require('dotenv').config();
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
const app = express();
app.use(morgan('tiny'));
app.use(cookieParser());
const PORT = process.env.PORT || 3000;
require('isomorphic-fetch');
var graph = require('@microsoft/microsoft-graph-client');

app.listen(PORT, () => console.log('Server listening at port :', PORT));

const credentials = {
  client: {
    id: process.env.APP_ID,
    secret: process.env.APP_PASSWORD
  },
  auth: {
    tokenHost: 'https://login.microsoftonline.com',
    authorizePath: 'common/oauth2/v2.0/authorize',
    tokenPath: 'common/oauth2/v2.0/token'
  }
};

const jwt = require('jsonwebtoken');
const oauth2 = require('simple-oauth2').create(credentials);
const authUri = oauth2.authorizationCode.authorizeURL({
  redirect_uri: process.env.REDIRECT_URI,
  scope: process.env.APP_SCOPES
});

app.get('/',(req,res) => {
  const accessToken = req.cookies.graph_access_token;
  const userName = req.cookies.graph_user_name;
  if(accessToken && userName){
      res.redirect('dashboard');
  } else {
      res.redirect(authUri);
  }
});

app.get('/dashboard', (req,res) => {
  const client = graph.Client.init({
    authProvider: (done) => {
      done(null, req.cookies.graph_access_token);
    }
  });
  const start = new Date(new Date().setHours(0,0,0));
  const end = new Date(new Date(start).setDate(start.getDate() + 7));
  client.api(`/me/calendarView?startDateTime=${start.toISOString()}&endDateTime=${end.toISOString()}`)
  .get().then((result) => {
    console.log(result.value.length);
    res.json(result.value);
  });
});

app.get('/logout', (req,res) => {
  clearCookies(res);
  res.redirect('/');
});

clearCookies = (res) => {
  res.clearCookie('graph_user_name', {maxAge: 3600000, httpOnly: true});
  res.clearCookie('graph_access_token', {maxAge: 3600000, httpOnly: true});
  res.clearCookie('graph_refresh_token', {maxAge: 3600000, httpOnly: true});
  res.clearCookie('graph_token_expires', {maxAge: 3600000, httpOnly: true});
}

saveToCookies = (token, res) => {
  const user = jwt.decode(token.token.id_token);
  res.cookie('graph_access_token', token.token.access_token, {maxAge: 3600000, httpOnly: true});
  res.cookie('graph_user_name', user.name, {maxAge: 3600000, httpOnly: true});
  res.cookie('graph_refresh_token', token.token.refresh_token, {maxAge: 7200000, httpOnly: true});
  res.cookie('graph_token_expires', token.token.expires_at.getTime(), {maxAge: 3600000, httpOnly: true});
}

app.get('/authorize', (req,res) => {
  const auth_code = req.query.code;
  if(auth_code){
    const tokenConfig = {
      code: auth_code,
      redirect_uri: 'http://localhost:3000/authorize',
      scope: process.env.APP_SCOPES
    };
    oauth2.authorizationCode.getToken(tokenConfig)
      .then((result) => {
        if(result){
          const token = oauth2.accessToken.create(result);
          saveToCookies(token, res);
          res.redirect("dashboard");
        }
      });
  } else {
      res.send('error');
  }
});
