var chai = require("chai");
var csscno = require('../index.js');

describe('#basic', function() {
  it('basic read array', function() {
    classes = ['asd','fgh'];
    expect = {
      asd: 'a',
      fgh: 'b'
    }
    var basic = csscno(classes);

    chai.expect(basic).to.deep.equal(expect);
  });

  it('from file', function() {
    classes = require('./data.json');
    expect = {
      asd: 'a',
      fgh: 'b'
    }
    var basic = csscno(classes);

    chai.expect(basic).to.deep.equal(expect);
  });

});
