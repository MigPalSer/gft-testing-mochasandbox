const assert = require('assert')

describe('Mathematical Operations - Test Suite', function(){

  // 1. Addition
  it('Addition of two numbers', function(){
    var a = 10;
    var b = 10;
    var c = a+b;
    assert.equal(c,20);
  });

  // 2. Subtraction
  it('Subtraction of two numbers', function(){
    var a = 10;
    var b = 10;
    var c = a-b;
    assert.equal(c,0);
  });

  // 3. Multiplication
  it('Multiplication of two numbers', function(){
    var a = 10;
    var b = 10;
    var c = a*b;
    assert.equal(c,100);
  });

  // 4. Division
  it('Division of two numbers', function(){
    var a = 10;
    var b = 10;
    var c = a/b;
    assert.equal(c,1);
  });

});
