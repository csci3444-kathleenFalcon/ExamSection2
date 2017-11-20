module.exports = {
    toCube: function(inpNum) {
        if (isNaN(inpNum))
            return "NaN";
        else if (typeof inpNum === "number")
            return inpNum * inpNum * inpNum;
        else //if (typeof inpNum === "string" && typeof Number(inpNum) === "number")
            return Number(inpNum) * Number(inpNum) * Number(inpNum);
    }
};