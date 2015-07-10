require('webcomponentsjs-lite');
var Polymer  = require('polymer');

// require all web component dependencies
require('bio-element');

// we can't use bio-container in the name when we use systemjs mappings
require('./bio-container.html!html');
module.exports = require("./bio-container");
