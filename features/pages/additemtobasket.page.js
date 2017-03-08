use = "strict"
var Page = require('./page')

class searchPage extends Page{
	open() {
	        super.open('http://www.tesco.com');
	    }
	searchby(item){
			var input = browser.element('.searchBox');
	    	input.setValue(item);
	    	browser.click('#searchBtn');
	}
	additem(item){
		browser.click(item);
	}
	checkout(){
		browser.click('a.button.tescoBlue.rightArrow.chkOutBtn.chkOutBtnMargin');
	}

}
module.exports = new searchPage();
