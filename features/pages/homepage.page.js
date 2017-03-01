"use strict";
var Page = require('./page')

class Homepage extends Page {
    open() {
        super.open('http://www.tesco.com');
    }
    wait(){
    	browser.waitForVisible(".logo", 5000);
    }
    getTitleBox(){ 
    	this.wait();
    	return browser.element("svg").element("title");
    }
}

module.exports = new Homepage();

