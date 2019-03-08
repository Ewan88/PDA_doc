var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  // it('it has a sample test', function(){
  //   assert.equal(true, true)
  // })

  it('should add 1 to 4 to get 5', function(){
    calculator.previousTotal = 4;
    calculator.add(1);
    assert.equal(5, calculator.runningTotal);
  });

  it('should multiply 3 by 5 and get 15', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(15, calculator.runningTotal);
  });


  it('should divide 21 by 7 and get 3', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(3, calculator.runningTotal);
  });

  it('should concatenate multiple number button clicks', function(){
    calculator.numberClick('5');
    calculator.numberClick('5');
    assert.equal(55, calculator.runningTotal);
  });

  it('should chain multiple operations together', function(){
    calculator.numberClick('5');
    calculator.operatorClick('+');
    calculator.numberClick('2');
    calculator.operatorClick('+'); // can be any operator
    assert.equal(7, calculator.previousTotal);
  });

  it('should clear the running total without affecting the calculation', function(){
    calculator.numberClick('5');
    calculator.operatorClick('+');
    calculator.numberClick('2');
    calculator.operatorClick('+');
    calculator.numberClick('3');
    calculator.clearClick();
    assert.equal('+', calculator.previousOperator);
    assert.equal(0, calculator.runningTotal)
  });

});
