var _ = require('lodash');
var Polymer  = require('polymer');

require('bio-element');
// we can't use bio-container in the name when we use systemjs mappings
require('./bio-container.html!html');
//require('./bio-container.css!css');

var BioContainer = Polymer({

  is: 'bio-container',

  properties: {
    text: {
      type: String,
      value: 'Hello'
    }
  },
  
  created: function() {
    console.log('bio-container created');
  }
});

module.exports = BioContainer;
