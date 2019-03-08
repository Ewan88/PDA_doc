var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('should update the display of the running total', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number1')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number1')).click();
    element(by.css('#operator_add')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2');
  });

  it('should update the display with the result', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number1')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3');
  });

  it('should chain multiple operations', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number5')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number7')).click();
    element(by.css('#operator_subtract')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('12');
  });

  it('should display the expected output for a range of numbers', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number5')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number7')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-2');
  });

  it('should not divide by zero', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('Infinity');
  });

  it('should divide 22 by 7 to get PI', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number7')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3.142857142857143');
  });

  // it('should be able to calculate 100^10', function(){
  //   running_total = element(by.css('#running_total'));
  //   for (let i = 0; i < 10; i++){
  //     element(by.css('#number1')).click();
  //     element(by.css('#number0')).click();
  //     element(by.css('#number0')).click();
  //     element(by.css('#operator_multiply')).click();
  //   }
  //   expect(running_total.getAttribute('value')).should.eventually.equal('1000000').notify(done);
  //   done();
  // });

  // Do the number buttons update the display of the running total?
  // Do the arithmetical operations update the display with the result of the operation?
  // Can multiple operations be chained together?
  // Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
  // What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass.

});
