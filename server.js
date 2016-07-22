'use strict';
var express = require('express');
var app = express();
var path = require('path');

require('./src/database.js');
var Randoms = require('./src/models/facts.js');

// Defines the port on which to run
app.set('port', 3000);

app.use(express.static(path.join(__dirname, 'client')));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/client/views/index.html');
});

app.get('/fact/:id', function(req, res) {
  var ourIndex = req.params.id;
  Randoms.findOne({},function(err,docs){
    res.send(docs.facts[ourIndex]);
  });
});

// Listens for requests
var server = app.listen(app.get('port'), function(){
  var port = server.address().port;
  console.log('I\'m listening on port ' + port + '.');
});
