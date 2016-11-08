'use strict';

var mongoose = require('mongoose');

var factsSchema = new mongoose.Schema({
  facts: [String, String, String, String, String, String]
});

var Fact = mongoose.model('Fact', factsSchema);

var appreciation = new Fact;
// Change the "facts" to drawing ideas
  // Eventually, have images to "color"
appreciation.facts = [
  'Brain research shows that art promotes creativity, social development, and self-worth.', 
  'April 15 is World Art Day, celebrated by the International Association of Art.', 
  'From 1912 - 1948, the Olympic Games awarded medals for artworks inspired by sport.', 
  'When the Mona Lisa was stolen from the Louvre in 1911, the empty space it left on the wall attracted more visitors than the painting had. ', 
  'The small town depicted in The Starry Night is Saint-Rémy-de-Provence in the south of France.', 
  'Earth without art is just eh.'
];

appreciation.save();

module.exports = Fact;

// Have new data each time connection established
