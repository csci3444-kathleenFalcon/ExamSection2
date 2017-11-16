// NOTE this is following BDD

// const assert = require('assert');
// NOTE using chai for assertions instead of assert that comes with nodeJS 
const assert = require('chai').assert;
const myCube = require('./src/common/util/math/myCube');

const num1 = 5;
const num1String = "5";
const num1NaN = "$";
const num1Cube = 125;

describe('myCube', function() {
    describe('toCube', function() {
        it('toCube(' + num1 + ') should return the value of "' + num1Cube + '"', function() {
            let result = myCube.toCube(num1);
            assert.equal(result, num1Cube);
        });

        it('toCube(' + num1String + ') should return the value of "' + num1Cube + '"', function() {
            let result = myCube.toCube(num1String);
            assert.equal(result, num1Cube);
        });

        it('toCube(' + num1NaN + ') should return the value of "NaN"', function() {
            let result = myCube.toCube(num1NaN);
            assert.equal(result, "NaN");
        });

        it('toCube(' + num1 + ') should return type number', function() {
            let result = myCube.toCube(num1);
            assert.typeOf(result, 'number');
        });
    });
});