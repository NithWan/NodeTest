var assert = require('Chai').assert;
var Box = require('../js/Box');

describe('Testing Box', function() {

  it('should assert obj is instance of Box', function() {
    var obj = new Box(10, 20, 30);
    assert.instanceOf(obj, Box);
  })

  it('should assert volume of the box to be 6000', function() {
    // create an object
    var obj = new Box(10, 20, 30);

    // now assert the volume
    assert.equal(obj.getVolume(), 6000);
  })

})
