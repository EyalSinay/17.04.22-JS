const numbers = [1, -5, 666, 2, 400, 11];
console.log(numbers);


// 1. Sort the array of numbers from descending to ascending order:
numbers.sort((a, b) => a - b);
console.log(numbers);


// 2. Sort the array of numbers from ascending to decending order.
numbers.sort((a, b) => b - a);
console.log(numbers);