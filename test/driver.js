var {Builder, By, until} = require('selenium-webdriver');
var driver;

var getDriver = function() {
  if(driver) {
    return driver;
  } else {
    driver = new Builder().forBrowser("chrome").build();
    return driver;
  }
}


module.exports.getDriver = getDriver;
