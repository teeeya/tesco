const credentials = require('../../credentials/tesco_credentials.json');
const loginPage = require ('../pages/loginPage.page')
module.exports = function() {
  this.When(/I want to click on "Groceries"/, function() {
    loginPage.clickGroceries();
    assert.equal(browser.getUrl(), "http://www.tesco.com/groceries/", "Assert user is navigated to new page")
  });
  this.When(/click on sign in/, function(){ 
    loginPage.clickSignIn();
  });
  this.When(/enter my username and password/, function(){
    loginPage.setUsername(credentials.username);
    loginPage.setPassword(credentials.password);
    loginPage.clickLogin();
  });
  this.Then(/ should be logged in/, function(){
    assert.equal(loginPage.getBannerText(), 'Hello, '+credentials.user+'. Welcome back.', "Asserting welcome message");
  });

};
