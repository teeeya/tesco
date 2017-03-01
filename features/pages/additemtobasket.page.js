use = "strict"
var Page = require('./page')

class searchPage extends Page{
	open() {
	        super.open('http://www.tesco.com');
	    }
	searchby(item){
			var input = browser.element('.searchBox');
	    	input.setValue(item);
	}
}
module.exports = new searchPage();
