'use strict';

var mongoose = require('mongoose');

var factsSchema = new mongoose.Schema({
  facts: [String, String, String, String, String, String]
});

var Fact = mongoose.model('Fact', factsSchema);

var appreciation = new Fact;
// Eventually, have images to "color"
appreciation.facts = [
 'Draw a bat.',
 'Draw an owl.',
 'Draw a dog.',
 'Draw a cat.',
 'Draw a star.',
 'Draw the moon.'
];

appreciation.save();

module.exports = Fact;
