const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json());
app.use(express.static(__dirname + '/views'));
app.set('views', __dirname + '/views');  
app.engine('html', ejs.renderFile);     
app.use(bodyParser.json());             
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use((req, res, next) => {
    console.log("::Calling Server....::")
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
    console.log("Req::", req.method, req.body, req.params, req.query);
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    } else {
        return next();
    }
});

app.get('/', (req, res) => res.render('index.html'));

app.post("/test", (req, res) => {
    res.status(200).send({
        data: req.body
    });
});

custom_router.routesConfig(app);

app.listen(config.port);