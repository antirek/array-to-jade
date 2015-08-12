var jso2jade = require('../index');

var arr1 = ['hello', 'qwerty'];
var arr1expected = 'hello\nqwerty';

var arr2 = [{
      'div.content': [{
        'h3': 'Hello'
        },
        'p Congratulations for you!',
        'p You win more than life on Earth',        
        ]
      },
      'div.contacts Send me email'];

var arr2expected = [
  'div.content', 
  '  h3 Hello', 
  '  p Congratulations for you!',
  '  p You win more than life on Earth',
  'div.contacts Send me email'
].join('\n');


describe('Test', function () {

  it('check simples', function (done) {

    expect(jso2jade(arr1)).toEqual(arr1expected);
    done();

  });

  it('check with object in array', function (done) {

    expect(jso2jade(arr2)).toEqual(arr2expected);
    done();

  });
});