//Removed required from here into wdio.conf.
//const chai = require('chai');
//let expect = chai.expect;
//let assert = chai.assert;
const credentials = require('../../credentials/tesco_credentials.json');

module.exports = function() {

  this.When(/I want to click on "Groceries"/, function(done) {
     browser.click(".nav-item a");
     assert.equal(browser.getUrl(), "http://www.tesco.com/groceries/", "Assert user is navigated to new page")
  });
  this.When(/click on sign in/, function(done){ 
    browser.click("a.event-button");
   
  });
  this.When(/enter my username and password/, function(done){
    browser.setValue('input#username', credentials.username);
    browser.setValue('input#password', credentials.password);
    browser.click('button.ui-component__button');
     
  });
  this.Then(/ should be logged in/, function(done){
    let text = browser.getText('h1 .content-title__txt');
    assert.equal(text, 'Hello, '+credentials.user+'. Welcome back.', "Asserting welcome message");
  });

};
