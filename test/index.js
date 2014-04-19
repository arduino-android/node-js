var expect = require('expect.js'),
    holoalarm = require('..');

describe('holoalarm', function() {
  it('should say hello', function(done) {
    expect(holoalarm()).to.equal('Hello, world');
    done();
  });
});
