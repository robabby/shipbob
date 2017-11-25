// modules
const express = require('express');
const bodyParser = require('body-parser');
const request = require('superagent');
const app = express();

const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  }
  else {
    next();
  }
};

app.use(allowCrossDomain);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// set our port
var port = process.env.PORT || 3000;

// set the static files location
app.use(express.static(__dirname + '/public'));

require('./routes')(app); // configure our routes

// startup our app at http://localhost:3000
app.listen(port);


// expose app
exports = module.exports = app;
