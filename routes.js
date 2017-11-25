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
        // console.log(response.body);
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

  // app.post('/members', function (req, res) {
  //
  //   console.log("Request URL: ", `https://${keys.mailchimpInstance}.api.mailchimp.com/3.0/lists/${keys.listUniqueId}/members/`);
  //   console.log("/req.body.member/: ", req.body.member);
  //     request
  //         .post(`https://${keys.mailchimpInstance}.api.mailchimp.com/3.0/lists/${keys.mailchimpListUniqueId}/members/`)
  //         .set('Content-Type', 'application/json;charset=utf-8')
  //         .set('Authorization', 'Basic ' + new Buffer('any:' + keys.mailchimpApiKey ).toString('base64'))
  //         .send({
  //           'email_address': req.body.member.email,
  //           'status': 'subscribed',
  //           'merge_fields': {
  //             'FNAME': req.body.member.firstName,
  //             'LNAME': req.body.member.lastName
  //           }
  //         })
  //         .end(function(err, response) {
  //           console.log("/response/", response)
  //           if (response.status < 300 || (response.status === 400 && response.body.title === "Member Exists")) {
  //             res.send(response.body);
  //           } else {
  //             res.send(response.body);
  //           }
  //         });
  // });
};
