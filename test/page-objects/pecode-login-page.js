var page = require('./page');
var webdriver = require('selenium-webdriver');

//var PecodeResultsPage = require('./pecode-results-page');

function PecodeLoginPage (webdriver) {
  page.call(this, webdriver, 'https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php');
}

PecodeLoginPage.prototype = Object.create(page.prototype);
PecodeLoginPage.prototype.constructor = PecodeLoginPage;

PecodeLoginPage.prototype.typeLogin = function(data) {
  return this.driver.findElement(webdriver.By.css('input[name="username"]')).sendKeys(data);
};

PecodeLoginPage.prototype.typePassword = function(data) {
  return this.driver.findElement(webdriver.By.css('input[name="password"]')).sendKeys(data);
};

PecodeLoginPage.prototype.clickLoginButton = function() {
 
 //////////////////  works same /////////////////
 return this.waitFor({css:'input.btn-success'}).click();
 //return this.driver.wait(  webdriver.until.elementLocated(webdriver.By.css('input.btn-success')),   20000).click();
 //works same return this.driver.executeScript("document.getElementsByTagName('input')[2].click();");
 //////////////////////////////////////////////
 
};

module.exports = PecodeLoginPage;