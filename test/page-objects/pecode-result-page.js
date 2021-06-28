var page = require('./page');
var webdriver = require('selenium-webdriver');

function PecodeResultPage (webdriver) {
  page.call(this, webdriver, 'https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php');
}

PecodeResultPage.prototype = Object.create(page.prototype);
PecodeResultPage.prototype.constructor = PecodeResultPage;

PecodeResultPage.prototype.getPasswordHelpBlockMessage = function(data) {
  return this.driver.findElement(webdriver.By.css('input[name="password"] ~ span.help-block')).getText();
};

PecodeResultPage.prototype.getUsernameHelpBlockMessage = function(data) {
  return this.driver.findElement(webdriver.By.css('input[name="username"] ~ span.help-block')).getText();
};

module.exports = PecodeResultPage;