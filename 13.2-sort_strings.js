// a. Array of words:
const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];
console.log(foods);

// a.1. Sort the array of strings from descending to ascending order:
foods.sort();
console.log(foods);

// a.2. Sort the array of strings from ascending to descending order:
foods.sort((a, b) => a > b ? -1 : 1);
console.log(foods);


console.log('-'.repeat(100));
// b. Lets sort an array of words that includes a word with an uppercase:
const foodsWithUpperCase = ["falafel", "Sabich", "hummus", "pizza with extra pineapple"];
console.log(foodsWithUpperCase);

// b.1. Sort the array of strings from descending to ascending order:
foodsWithUpperCase.sort((a,b)=>{
    const aLower = a.toLowerCase();
    const bLower = b.toLowerCase();
    if (aLower > bLower) {
        return 1;
    } else
    if (aLower < bLower) {
        return -1;
    } else {
        return 0;
    }
});
console.log(foodsWithUpperCase);

// b.2. Sort the array of strings from ascending to descending order:
foodsWithUpperCase.sort((a,b)=>{
    const aLower = a.toLowerCase();
    const bLower = b.toLowerCase();
    if (aLower > bLower) {
        return -1;
    } else
    if (aLower < bLower) {
        return 1;
    } else {
        return 0;
    }
});
console.log(foodsWithUpperCase);


console.log('-'.repeat(100));
// c. Longest word:
const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];
console.log(words);

// c.1. Sort the array of strings from the longest word to the shortest word only using the sort function:
words.sort((a, b) => b.length - a.length);
console.log(words);