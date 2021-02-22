// SMALLEST NUMBER FROM ARRAY
var numberArray = [5, 52, 96, -4, 36, 78, -1, -32, 0, 0, -32];
var smallest = numberArray[0];
// for (i = 0; i < numberArray.length ; i++) {
for (var i in numberArray) {
    if (smallest < numberArray[i]) {

    }
    else
        smallest = numberArray[i];
}
console.log("The smallest number is", smallest);