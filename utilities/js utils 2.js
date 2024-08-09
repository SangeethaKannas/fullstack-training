import firebase from 'qs-config/FirebaseConfig';

const getIdToken = () => firebase.auth().currentUser.getIdToken();

const request = (...params) =>
  new Promise((resolve, reject) => {
    fetch(...params)
      .then(response => {
        if (!response) {
          resolve(response);
        }
        return response.json().then(result => {
          if (response.ok) {
            resolve(result);
          } else {
            reject(result);
          }
        });
      })
      .catch(err => {
        reject(err);
      });
  });

const postRequest = (url, body, headers = {}) =>
  request(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers
    },
    body: JSON.stringify(body)
  });

const postRequestFileUpload = (url, body, headers = {}) =>
  getIdToken().then(token =>
    request(url, {
      method: 'POST',
      headers: {
        Authorization: token
      },
      body: body
    })
  );

const authPost = (url, body = {}, headers = {}) =>
  getIdToken().then(token => postRequest(url, body, { Authorization: token, ...headers }));

const putRequest = (url, body, headers = {}) =>
  request(url, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers
    },
    body: JSON.stringify(body)
  });

const authPut = (url, body = {}, headers = {}) =>
  getIdToken().then(token => putRequest(url, body, { Authorization: token, ...headers }));

const getRequestNoDefaults = (url, headers = {}) =>
  request(url, {
    method: 'GET',
    headers
  });

const getRequest = (url, headers = {}) =>
  request(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers
    }
  });

const authGet = (url, headers = {}) =>
  getIdToken().then(token => getRequest(url, { Authorization: token, ...headers }));

const deleteRequest = (url, body, headers = {}) =>
  request(url, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers
    },
    body: JSON.stringify(body)
  });

const authDelete = (url, body = {}, headers = {}) =>
  getIdToken().then(token => deleteRequest(url, body, { Authorization: token, ...headers }));

const createQueryParams = queryParamsData => {
  if (!Array.isArray(queryParamsData)) {
    return '';
  }
  const queryParams = queryParamsData.reduce((cumulativeArray, { key, value }) => {
    if (value !== null && value !== undefined) {
      if (Array.isArray(value)) {
        value = JSON.stringify(value);
      }
      cumulativeArray.push(`${key}=${encodeURIComponent(value)}`);
    }
    return cumulativeArray;
  }, []);

  if (queryParams.length > 0) {
    return `?${queryParams.join('&')}`;
  }
  return '';
};

export default {
  post: postRequest,
  get: getRequest,
  getRequestNoDefaults,
  delete: deleteRequest,
  put: putRequest,
  postRequestFileUpload,
  authGet,
  authPost,
  authDelete,
  authPut,
  createQueryParams
};