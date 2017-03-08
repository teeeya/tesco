"use strict";
class Page {
	constructor() {
	}
	open(path) {
		browser.url(path);
	}
	click(element){
		browser.click(element);
	}
}
module.exports = Page;