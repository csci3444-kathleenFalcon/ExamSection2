module.exports = {
    toSquare: function(inpNumber) {
        const mySquare = require('./mySquare');
        return (mySquare.toSquare(inpNumber));
    },
    toCube: function(inpNumber) {
        const myCube = require('./myCube');
        return (myCube.toCube(inpNumber));
    }
};

/* raise a number to any power
module.exports = {
    toPowers: function(inpNumber, power)
    {
        if (isNaN(inpNum))
            return "NaN";
        else if (typeof inpNum === "number" && typeof power === "number")
            return (Math.pow(inpNum, power));
        else
            return ("Invalid input/selection.");
    }
}
*/

/* square or cube by command
module.exports = {
    toPowers: function(inpNumber, cmd) {
        if (toLowerCase(cmd) == "square") {
            const mySquare = require('./mySquare');
            return (mySquare.toSquare(inpNumber));
        } else if (toLowerCase(cmd) == "cube") {
            const myCube = require('./myCube');
            return (myCube.toCube(inpNumber));
        } else
            return ("Invalid input/selection.");
    }
}
*/