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

  // GET all Orders for a User
  app.get('/api/orders/', function(req, res, next) {
    console.log('get:api/orders/', req.body);
    request
      .get(`${API_URL}/api/users/${req.query.userId}/orders`)
      .set('Content-Type', 'application/json')
      .end(function(err, response) {
        console.log(response.body);
        res.send(response.body);
      });
  });

  // GET one Order
  app.get('/api/orders/:orderId', function(req, res, next) {
    console.log('get:api/orders/:orderId', req.body);
    console.log(`get:${API_URL}/api/users/${req.query.userId}/orders/${req.query.orderId}`)
    request
      .get(`${API_URL}/api/users/${req.query.userId}/orders/${req.query.orderId}`)
      .set('Content-Type', 'application/json')
      .end(function(err, response){
        res.send(response.body);
      });
  });

  // POST an Order
  app.post('/api/orders', function(req, res, next) {
    console.log('post:api/orders/', req.body);
    console.log(`post:${API_URL}/api/users/${req.body.userId}/orders`);

    request
      .post(`${API_URL}/api/users/${req.body.userId}/orders`)
      .send({
        'TrackingId': req.body.trackingId,
        'UserId': req.body.userId,
        'Location': {
          'Street': req.body.location.street,
          'Name': req.body.location.name,
          'City': req.body.location.city,
          'State': req.body.location.state,
          'ZipCode': req.body.location.zipCode
        }
      })
      .set('Content-Type', 'application/json')
      .end(function(err, response){
        if (err) {
          console.log(err);
        } else {
          console.log(response.body);
        }
        res.send(response.body);
      });
  });

  // DELETE an Order for a User
  app.delete('/api/orders/:orderId', function(req, res, next) {
    console.log('delete:api/orders/', req.body);

    let { location } = req.body;
    let { orderId } = req.params;

    request
      .delete(`${API_URL}/api/users/${req.body.id}/orders`)
      .send({
        'orderId': orderId,
        'trackingId': req.body.trackingId,
        'userId': req.body.userId,
        'location': {
          'locationId': location ? location.id : 0,
          'Street': location ? location.street : '',
          'Name': location ? location.name : '',
          'City': location ? location.city : '',
          'State': location ? location.state : '',
          'ZipCode': location ? location.zipCode : ''
        }
      })
      .set('Content-Type', 'application/json')
      .end(function(err, response){
        res.send(response.body);
      });
  });
};
