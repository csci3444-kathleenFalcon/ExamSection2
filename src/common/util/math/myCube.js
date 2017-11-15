module.exports = {
    toCube: function(inpNum) {
        if (typeof inpNum === "number")
            return inpNum * inpNum * inpNum;
        else
            return "NaN";
    }
};