'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/signatures', function(err) {
  if (err) {
    console.log('Failed connection to MongoDB.');
  } else {
    console.log('Successful connection to MongoDB.');
  }
});