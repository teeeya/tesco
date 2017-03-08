const credentials = require('../../credentials/tesco_credentials.json');
const loginPage = require('../pages/loginPage.page');
const basketPage = require('../pages/additemtobasket.page')


module.exports = function() {
  this.Given(/I am logged into tesco.com/, function() {
  	loginPage.open();
    loginPage.clickGroceries();
    loginPage.clickSignIn();
    loginPage.setUsername(credentials.username);
    loginPage.setPassword(credentials.password);
    loginPage.clickLogin();
    console.log("User is logged in");
  });

  this.Given(/I have searched for Milk/, function(){
    basketPage.searchby("milk");
   	assert.include(browser.getUrl(), "searchBox=milk", "Assert user is returned search results for milk")
  });

  this.When(/I click on the plus button/, function(){
  	basketPage.additem('input[value="Add"]');
  });
  this.Then(/the item should be in my basket/, function(){
  	basketPage.checkout();
  });
 
};
