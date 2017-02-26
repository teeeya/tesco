//Removed required from here into wdio.conf.
//const chai = require('chai');
//let expect = chai.expect;
//let assert = chai.assert;

module.exports = function() {
  this.Given(/I open the homepage for Tesco/, function (done) {
    browser.url('http://tesco.com');
  });
  this.When(/the page is fully loaded/, function(done) {
     isVisible = browser.isVisible('.tescoLogo');
  });
  this.Then(/ should the tesco logo/, function(done){
    assert.equal( browser.getTitle(), 'Tesco | Online Groceries, Homeware, Electricals & Clothing', 'Assertion for the title of the page');
  });
};
