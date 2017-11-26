const request = require('superagent');
const API_URL = "http://shipbobinterview.azurewebsites.net";

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.sendFile('./public/index.html'); // load our public/index.html file
  });

  // Get all users
  app.get('/api/users', function(req, res, next) {
    console.log('get:api/users/', req.body);
    request
      .get(`${API_URL}/api/users`)
      .set('Content-Type', 'application/json')
      .end(function(err, response){
        res.send(response.body);
      });
  });

  // Get a single user
  app.get('/api/users/:userId', function(req, res, next) {
    console.log('get:api/users/:userId', req.body);
    request
      .get(`${API_URL}/api/users/${req.params.userId}`)
      .set('Content-Type', 'application/json')
      .end(function(err, response){
        console.log('get:/api/users/:userId', response.body);
        res.send(response.body);
      });
  });

  // Create a User
  app.post('/api/users', function(req, res, next) {
    console.log('post:api/users/', req.body);
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

  // Edit a User
  app.put('/api/users/:userId', function(req, res, next) {
    console.log('put:api/users/', req.body);
    request
      .put(`${API_URL}/api/users`)
      .send({
        'UserId': req.body.userId,
        'FirstName': req.body.firstName,
        'LastName': req.body.lastName
      })
      .set('Content-Type', 'application/json')
      .end(function(err, response, body){
        res.send(response.body);
      });
  });

  // Delete a User
  app.delete('/api/users/:userId', function(req, res, next) {
    console.log('delete:api/users/', req.body);
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

  // Get all Orders for a User
  app.get('/api/orders', function(req, res, next) {
    console.log('get:api/orders/', req.body);
    request
      .get(`${API_URL}/api/users/${req.body.id}/orders`)
      .set('Content-Type', 'application/json')
      .end(function(err, response){
        res.send(response.body);
      });
  });

  app.post('/api/orders', function(req, res, next) {
    console.log('post:api/orders/', req.body);
    request
      .post(`${API_URL}/api/users/${req.body.userId}/orders`)
      .send({
        'TrackingId': req.body.trackingId,
        'UserId': req.body.userId,
        'Location': {
          'Street': req.body.location[0].street,
          'Name': req.body.location[0].name,
          'City': req.body.location[0].city,
          'State': req.body.location[0].state,
          'ZipCode': req.body.location[0].zipcode
        }
      })
      .set('Content-Type', 'application/json')
      .end(function(err, response){
        if (err) {
          console.log(err);
        } else {
          console.log(response);
        }
        res.send(response.body);
      });
  });
};
