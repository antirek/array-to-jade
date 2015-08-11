# jso2jade

prepare some js object and parse as jade template to html

Usage
=====

`````javascript

var jso2jade = require('./index');

var jade = require('jade');

var arr = [{
  'div.content': [{
    'h3': 'Hello, ' + user.name
    },
    'p Congratulations for you!',
    'p You win more than life on Earth',
    { 
      'div.conditions': {
        'h5.attention': 'Attention',
        'p': 'New conditions',
        'div' :
        [
          'hr',
          'br'
        ]
      }
    }
    ]
  },
  'div.contacts Send me email'];


var html = jade.render(jso2jade(arr));

console.log(html);


`````