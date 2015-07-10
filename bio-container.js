var Polymer  = require('polymer');

// require all web component dependencies
require('bio-element');

// we can't use bio-container in the name when we use systemjs mappings
require('./bio-container.html!html');

var BioContainer = Polymer({

  is: 'bio-container',

  properties: {
    text: {
      type: String,
      value: 'hello'
    }
  },

  created: function() {
    console.log('bio-container created');
  }
});

module.exports = BioContainer;
