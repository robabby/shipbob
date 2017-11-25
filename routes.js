const request = require('superagent');
const API_URL = "http://shipbobinterview.azurewebsites.net";

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.sendFile('./public/index.html'); // load our public/index.html file
  });

  app.get('/api/users', function(req, res, next) {
    request
      .get(`${API_URL}/api/users`)
      .set('Content-Type', 'application/json')
      .end(function(err, response){
        res.send(response.body);
      });
  });

  app.post('/api/users', function(req, res, next) {
    console.log('/req.body/', req.body);
    request
      .post(`${API_URL}/api/users`)
      .send({
        'FirstName': req.body.firstName,
        'LastName': req.body.lastName
      })
      .set('Content-Type', 'application/json')
      .end(function(err, response, body){
        console.log(response.body);
        res.send(response.body);
      });
  });
};
