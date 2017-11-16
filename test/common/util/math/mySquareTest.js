// NOTE this is following BDD

// const assert = require('assert');
// NOTE using chai for assertions instead of assert that comes with nodeJS 
const assert = require('chai').assert;
const mySquare = require('./../../../../src/common/util/math/mySquare');

const num1 = 5;
const num1String = "5";
const num1NaN = "Hello";
const num1Square = 25;

describe('mySquare', function() {
    describe('toSquare', function() {
        it('toSquare(' + num1 + ') should return the value of "' + num1Square + '"', function() {
            let result = mySquare.toSquare(num1);
            assert.equal(result, num1Square);
        });

        it('toSquare("' + num1String + '") should return the value of "' + num1Square + '"', function() {
            let result = mySquare.toSquare(num1String);
            assert.equal(result, num1Square);
        });

        it('toSquare(' + num1NaN + ') should return the value of "NaN"', function() {
            let result = mySquare.toSquare(num1NaN);
            assert.equal(result, "NaN");
        });

        it('toSquare(' + num1 + ') should return type number', function() {
            let result = mySquare.toSquare(num1);
            assert.typeOf(result, 'number');
        });
    });
});