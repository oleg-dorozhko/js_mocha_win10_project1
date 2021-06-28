// for mochawesome reporting use command
// home\js mocha\project1>npx mocha --spec test/test.js --reporter mochawesome

  var assert = require('assert');

  var expect = require('chai').expect;
  var PecodeLoginPage = require('./page-objects/pecode-login-page');
  var PecodeResultPage = require('./page-objects/pecode-result-page');
  var envPath = __dirname + "/../.env";
  var dotenv = require('dotenv');
  dotenv.config({path:envPath});


  describe('Pecode Login Page Test Suite', function() {

	  var driver;
	  
	  this.timeout(10000);

	  before(function(done) {
		driver = require('./driver').getDriver();
		done();
	  });
	  
	  after(function(done) {
		if(driver)
		  driver.quit();
		done();
	  }); 

  it('should display error message for wrong password after logging', function(done) {
    try {
		
		var pecodeLoginPage = new PecodeLoginPage(driver);
		
		pecodeLoginPage.open().then( function() {
			 
				pecodeLoginPage.typeLogin(process.env.LOGIN).then( function() {
					
				 
						pecodeLoginPage.typePassword(process.env.PASSWORD).then( function() {
							 
								pecodeLoginPage.clickLoginButton().then( function() {
									 
											
											var pecodeResultPage = new PecodeResultPage(driver);
											pecodeResultPage.getPasswordHelpBlockMessage().then( function(message){
												//try
												//{
												assert.equal(message.length, 39);
												expect(message).to.equal("The password you entered was not valid.");
												//}
												//catch(exc) {
												//	console.log(exc);
												//}
												done();
											});
											
											
									 
								});
							 
						});
					 
				});
			 
		});
	
	}
	catch(exc) {
		console.log(exc);
	}
	finally{
		 
	}
   
  });
  
  
  
   it('should fails cause of unsuccesfull login', function(done) {
    try {
		
		var pecodeLoginPage = new PecodeLoginPage(driver);
		
		pecodeLoginPage.open().then( function() {
			 
				pecodeLoginPage.typeLogin(process.env.LOGIN).then( function() {
					
					
						pecodeLoginPage.typePassword(process.env.PASSWORD+"1").then( function() {
					
								pecodeLoginPage.clickLoginButton().then( function() {
											
											var pecodeResultPage = new PecodeResultPage(driver);
											
											pecodeResultPage.getPasswordHelpBlockMessage().then( function(message){
											
												//try
												//{
												assert.equal(message.length, 39);
											
												expect(message).to.equal("The password you entered was not valid.");
											
												//}
												//catch(exc) {
												//	console.log(exc);
												//}
												done(new Error("Login is unsuccessful")); //if we got help-block message - login unsuccesfull
											
											});
											
								});
					
						});
					
				});
			 
		});
	
	}
	catch(exc) {
		console.log(exc);
	}
	finally{

	}
 });
  
  
  
  
  /////////////////////////////////////////////////////////////////
  it('should show help-block message when username is empty', function(done) {
    try {
		
		var pecodeLoginPage = new PecodeLoginPage(driver);
		
		pecodeLoginPage.open().then( function() {
			 
				pecodeLoginPage.typeLogin(process.env.SPACE).then( function() {
					
					
						pecodeLoginPage.typePassword(process.env.PASSWORD+"1").then( function() {
					
								pecodeLoginPage.clickLoginButton().then( function() {
											
											var pecodeResultPage = new PecodeResultPage(driver);
											 
								
												pecodeResultPage.getUsernameHelpBlockMessage().then( function(message){
													//try
													//{
													assert.equal(message.length, 22);
													expect(message).to.equal("Please enter username.");
													//expect(true).to.equal(false); //if we got help-block message - login unsuccesfull
													//}
													//catch(exc) {
													//	console.log(exc);
													//}
													done();
												});
								
								
											 
											
								});
					
						});
					
				});
			 
		});
	
	}
	catch(exc) {
		console.log(exc);
	}
	finally{

	}
 });
  
  ////////////////////////////////////////////////////////////
  
  
  
  
  
  
  
  
  
  
  
  
  
}); 

