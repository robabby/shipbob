const request = require('superagent');
const API_URL = "http://shipbobinterview.azurewebsites.net";

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.sendFile('./public/index.html'); // load our public/index.html file
  });

  // Get all users
  app.get('/api/users', function(req, res, next) {
    console.log('get:/api/users/', req.headers);
    console.log('get:/api/users/', req.body);
    request
      .get(`${API_URL}/api/users`)
      .set('Content-Type', 'application/json')
      .end(function(err, response){
        res.send(response.body);
      });
  });

  //Get one user
  app.get('/api/users/:userId', function(req, res, next) {
    request
      .get(`${API_URL}/api/users/${req.params.userId}`)
      .set('Content-Type', 'application/json')
      .end(function(err, response){
        console.log('get:/api/users/:userId', response.body);
        res.send(response.body);
      });
  });

  app.post('/api/users', function(req, res, next) {
    console.log(req.headers);
    console.log(req.body);
    request
      .post(`${API_URL}/api/users`)
      .send({
        'FirstName': req.body.firstName,
        'LastName': req.body.lastName
      })
      .set('Content-Type', 'application/json')
      .end(function(err, response, body){
        res.send(response.body);
      });
  });

  app.delete('/api/users/:userId', function(req, res, next) {
    console.log('delete:/api/users/', req.headers);
    console.log('delete:/api/users/', req.body);
    request
      .delete(`${API_URL}/api/users`)
      .send({
        'FirstName': req.body.firstName,
        'LastName': req.body.lastName,
        'UserId': req.params.userId
      })
      .set('Content-Type', 'application/json')
      .end(function(err, response){
        res.send(response.body);
      });
  });

  app.get('/api/orders', function(req, res, next) {
    console.log('get:/api/orders/', req.headers);
    console.log('get:/api/orders/', req.body);

    request
      .get(`${API_URL}/api/users/${req.body.id}/orders`)
      .set('Content-Type', 'application/json')
      .end(function(err, response){
        res.send(response.body);
      });
  });
};
