
// MAE
let meanAbsError = function (fact, predict) {
        
        var valueArray = fact.map(
                function (v, index) {
                        return Math.abs(v - predict[index]) / v;
                })
        return ErrorArray.reduce((acc, value) => (acc + value)) / valueArray.length
}

// RMSE
let RootMeanSquareError = function (fact, predict) {
        var valueArray = fact.map(
                function (v, i) {
                        return Math.pow((v - predict[i]), 2);
                })
        return Math.sqrt(valueArray.reduce((a, x) => (a + x), 0)) / valueArray.length;
};
