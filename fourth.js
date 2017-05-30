var addNumbers = function (num1, num2) {
    return num1 + num2;
};
var total = addNumbers(4, 5);
console.log(total);
var addMoreNumbers = function (num1, num2) {
    if (num2 === void 0) { num2 = 2; }
    return num1 + num2;
};
var sum = addMoreNumbers(1, 5);
var addManyMoreNumbers = function (num1, num2, num3) {
    if (num2 === void 0) { num2 = 2; }
    console.log("num1:", num1);
    console.log("num2:", num2);
    console.log("num3", num3);
    if (num3 !== null) {
        return num1 + num2 + num3;
    }
    return num1 + num2;
};
var newSum = addManyMoreNumbers(1, 5, 1);
console.log(newSum);
//Rest Parameters
function myRestParams(first, second) {
    var allOthers = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        allOthers[_i - 2] = arguments[_i];
    }
    console.log(first, second);
    console.log("allOthers", allOthers);
    return myRestParams;
}
console.log("myRestParams", myRestParams("A", "B", "c", "D", "E", "F", "G"));
function sumNumber() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    for (var _a = 0, nums_1 = nums; _a < nums_1.length; _a++) {
        var value = nums_1[_a];
        console.log(value);
    }
}
sumNumber(1, 2, 3);
