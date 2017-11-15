module.exports = {
    toSquare: function(inpNum) {
        if (typeof inpNum === "number")
            return inpNum * inpNum;
        else
            return "NaN";
    }
};