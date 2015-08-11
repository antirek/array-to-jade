'use strict';

var Converter = function (settings) {

  var options = {};

  var recursiveParser = function(obj, prepender){
    var prepend = prepender || '';
    var result_array = [];

    switch (typeof obj) {
    
      case 'string':          
          result_array.push(prepend + obj);           
        break;
    
      case 'object': 
          if (obj instanceof Array) {
            obj.forEach(function (item) {                
                recursiveParser(item, prepend).forEach(function (it) {
                  result_array.push(it);
                });
            });
          } else {
            for (var key in obj) {
              if (typeof obj[key] == 'string') {
                result_array.push(prepend + key + ' ' + obj[key])
              }else{
                result_array.push(prepend + key);
                recursiveParser(obj[key], prepend + '  ').forEach(function (it) {
                  result_array.push(it);
                });
              }
            }
          }
        break;
    
      case 'function': 
        break;
    }

    return result_array;
  };

  var prepare = function (obj) {
    var t = recursiveParser(obj);  
    var str = t.join("\n");
    return str;
  };

  return {
    prepare: prepare
  }
};

module.exports = Converter;