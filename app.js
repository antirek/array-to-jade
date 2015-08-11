var jso2jade = require('./index');

var jade = require('jade');

//var converter = new arr2jade();

var arr = [{
  'div.main': [{
    'p': '1212'
    },
    'p sdfdsf',
    'p 224344',
    { 
      'div.sp': {
        'h3': 'Hello',
        'p': 'ogogo',
        'div' :
        [
          'hr',
          'br'
        ]
      }
    }
    ]
  },'p colo'];


var str = jso2jade(arr);
var html = jade.render(str);

console.log(html);