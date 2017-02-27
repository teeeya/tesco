const homepage = require ('../pages/homepage.page')
module.exports = function() {
  this.Given(/I open the homepage for Tesco/, function () {
    homepage.open();
  });
  this.When(/the page is fully loaded/, function() {
  	homepage.wait();
  });
  this.Then(/should the tesco logo/, function(){
    assert(homepage.getTitleBox(), 'Tesco');
  });
};

  