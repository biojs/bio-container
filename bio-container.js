var _ = require('lodash');
var Polymer  = require('polymer');

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
