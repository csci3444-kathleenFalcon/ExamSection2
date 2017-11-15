module.exports = {
    toSquare: function(inpNum) {
        if (typeof inpNum === "number")
            return inpNum * inpNum;
        else if (typeof inpNum === "string" && Number(inpNum) === "number")
            return Number(inpNum) * Number(inpNum);
        else
            return "NaN";
    }
};