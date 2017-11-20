// NOTE this is following BDD

// const assert = require('assert');
// NOTE using chai for assertions instead of assert that comes with nodeJS 
const assert = require('chai').assert;
const myPowers = require('./../../../../src/common/util/math/myPowers');

const num1 = 5;
const num1String = "5";
const num1NaN = "Hello";
const num1Square = 25;
const num1Cube = 125;

describe('myPowers', function() {
    describe('toSquare', function() {
        it('toSquare(' + num1 + ') of myPowers should return the value of "' + num1Square + '"', function() {
            let result = myPowers.toSquare(num1);
            assert.equal(result, num1Square);
        });

        it('toSquare("' + num1String + '") of myPowers should return the value of "' + num1Square + '"', function() {
            let result = myPowers.toSquare(num1String);
            assert.equal(result, num1Square);
        });

        it('toSquare(' + num1NaN + ') of myPowers should return the value of "NaN"', function() {
            let result = myPowers.toSquare(num1NaN);
            assert.equal(result, "NaN");
        });

        it('toSquare(' + num1 + ') of myPowers should return type number', function() {
            let result = myPowers.toSquare(num1);
            assert.typeOf(result, 'number');
        });
    });
    describe('toCube', function() {
        it('toCube(' + num1 + ') of myPowers should return the value of "' + num1Cube + '"', function() {
            let result = myPowers.toCube(num1);
            assert.equal(result, num1Cube);
        });

        it('toCube("' + num1String + '") of myPowers should return the value of "' + num1Cube + '"', function() {
            let result = myPowers.toCube(num1String);
            assert.equal(result, num1Cube);
        });

        it('toCube(' + num1NaN + ') of myPowers should return the value of "NaN"', function() {
            let result = myPowers.toCube(num1NaN);
            assert.equal(result, "NaN");
        });

        it('toCube(' + num1 + ') of myPowers should return type number', function() {
            let result = myPowers.toCube(num1);
            assert.typeOf(result, 'number');
        });
    });
});