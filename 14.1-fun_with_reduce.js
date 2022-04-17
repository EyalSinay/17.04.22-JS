/*
Write the following functions using the reduce built-in function.
1. max
2. sum of even numbers
3. average
*/

// 1:
function max(arr) {
    const arrReduce = arr.reduce((previousValue, currentValue) => {
        return previousValue > currentValue ? previousValue : currentValue
    }, -Infinity);
    return arrReduce;
}
console.log(max([20, 40, 90, 72, 90, 72, 3]));
console.log(max([-3, -4, -5]));
console.log(max([]));


console.log('-'.repeat(100));
// 2:
function sumOfEvenNumbers(arr) {
    const arrReduce = arr.reduce((previousValue, currentValue) => {
        if (currentValue % 2 === 0) {
            return previousValue + currentValue;
        } else {
            return previousValue;
        }
    }, 0);
    return arrReduce;
}
console.log(sumOfEvenNumbers([7, 1, 4, 6, 4, 3, 2, 3]));
console.log(sumOfEvenNumbers([2, , 1, 4]));
console.log(sumOfEvenNumbers([]));


console.log('-'.repeat(100));
// 3:
function average(arr) {
    const arrReduce = arr.reduce((previousValue, currentValue, currentIndex, array) => {
        if (currentIndex === 0) {
            return (previousValue + currentValue) / array.length;
        } else {
            return previousValue + (currentValue / array.length);
        }
    }, 0);
    return arrReduce;
}
console.log(average([3, 1]));
console.log(average([2, 2, 2]));
console.log(average([1, 2, 3]));
console.log(average([2]));
console.log(average([0, 0, 6]));
console.log(average([]));