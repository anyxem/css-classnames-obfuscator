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

  it('from file shortest new name', function() {
    classes = require('./data.json');
    var basic = csscno(classes);
    var mostCommonClass = 'wwwwww';
    var firstShortestNewClassName = 'a';

    chai.expect(basic[mostCommonClass]).to.deep.equal(firstShortestNewClassName);
  });


});
