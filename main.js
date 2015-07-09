// require all web component dependencies
require('bio-element');

// we can't use bio-container in the name when we use systemjs mappings
require('./bio-container.html!html');
//require('./bio-container.css!css');

module.exports = require("./bio-container");
