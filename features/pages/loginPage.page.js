"use strict";
var Page = require('./page')

class LoginPage extends Page {
    open() {
        super.open('http://www.tesco.com');
    }
    clickGroceries(){
    	browser.click(".nav-item a");
    }
    wait(){
    	browser.waitForVisible(".logo");
    }
    clickSignIn(){
    	browser.click("a.event-button");
    }
    clickLogin(){
   		browser.click('button.ui-component__button');
    }
    setUsername(username){
    	browser.setValue('input#username', username);
    }
    setPassword(password){
		browser.setValue('input#password', password);
    }
    getBannerText(){
    	return browser.getText('h1 .content-title__txt');
    }

}

module.exports = new LoginPage();

