import emojipedia from "./emojipedia";

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

function double(x) {
  return x * 2;
}
const newNumbers1 = numbers.map(double);

var newNumbers2 = [];

numbers.forEach(function (x) {
  newNumbers2.push(x * 2);
});

const newNumbers3 = numbers.map(function (x) {
  return x * 2;
});

console.log(newNumbers3);

//Filter - Create a new array by keeping the items that return true.

const newNumbers4 = numbers.filter(function(num) {
  return num < 10;
});

var newNumbers5 = [];
numbers.forEach(function(num) {
  if (num < 10) {
    newNumbers5.push(num);
  }
})

//Reduce - Accumulate a value by doing something to each item in an array.

var newNumber7 = numbers.reduce(function (accumulator, currentNumber) {
  console.log("accumulator = " + accumulator);
  console.log("currentNumber = " + currentNumber);
    return accumulator + currentNumber;
})

var newNumber6 = 0;
numbers.forEach(function (currentNumber) {
  newNumber6 += currentNumber
})

//Find - find the first item that matches from an array.

const newNumber8 = numbers.find(function (num) {
  return num > 10;
})

console.log(newNumber8);

//FindIndex - find the index of the first item that matches.

const newNumber9 = numbers.findIndex(function (num) {
  return num > 10;
})

console.log(newNumber9);


const newEmojipedia = emojipedia.map(function(emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});

console.log(newEmojipedia);
