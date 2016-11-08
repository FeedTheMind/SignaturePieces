'use strict';

var mongoose = require('mongoose');

var dbURI = mongoose.connect('mongodb://localhost/signatures');

mongoose.connection.on('connected', function(err) {
  if (err) {
    console.log('Failed connection to MongoDB.');
  } else {
    console.log('Successful connection to MongoDB.');
    // Have new data each time connection established
    dbURI.connection.db.dropDatabase();
  }
});
