/*
----------------------------------------
EXAMPLE CHALLENGE
----------------------------------------

Challenge: Write a function that returns the string, "This Works!".

Example Solution 1:
*/
// Original way or old way
function test1() {
	return "This Works!";
}
/*
Example Solution 2:
*/
// export const -- can be access anywhere in this file
const test2 = () => {
	const answer = "This Works!";
	return answer;
}
/*
Example Solution 3:
*/
const test3 = () => "This Works!"; // without the block quote the "=>" acts as the "return"
/*

----------------------------------------
CHALLENGE #01: Sum
----------------------------------------

Write a function named sum that will take an array of numbers and return the sum of them.

Example:
- If you pass it [1,2,3] then it should return 6 (which is 1 + 2 + 3)

NOTE: always look at the test results to see further details about what the test is expecting.
For example, the tests require that to complete this challenge, your function must return
0 if the input is empty. Please see the README file for an explanation of how to expand the test
results on the index page in the browser.

*/
function sum(num) {
	let total = 0;
	for (let index = 0; index < num.length; index++) {
		total += num[index];	
	}
	return total;
}
const num = [1, 2, 3];
const displaySol = sum(num);
console.log(displaySol);

/*

----------------------------------------
CHALLENGE #02: Double Letters
----------------------------------------

Write a function named doubleLetters that will take a string and double every letter in the string

Example:
- If you pass it "abc" then it should return "aabbcc"

*/
function doubleLetters(str) {
	let doubleStr = [];
	// Works if you don't need an index 
	for (let letter of str) {
		doubleStr.push(letter);
		doubleStr.push(letter);
	}
	doubleStr.join();
	console.log("double string: ", doubleStr);
	return doubleStr.join("");
}

const strChar = "abc";
const sol = doubleLetters(strChar);
console.log(sol); // displays the result

/*

----------------------------------------
CHALLENGE #03: Double Numbers
----------------------------------------

Write a function named doubleNumbers that will take an array of numbers and return an array with those numbers doubled

Example:
- If you pass it [1,2,3] then it should return [2,4,6]

*/
function doubleNumbers(numbers) {
	return numbers.map(function(num) {
	  return num * 2;
	});
  }
const numbers = [1, 2, 3];
const solution = doubleNumbers(numbers);
console.log(solution); 


/*

----------------------------------------
CHALLENGE #04: Multiply Numbers
----------------------------------------

Write a function named multiplyNumbers that will take an array of numbers and
return an array with those numbers multiplied by another value

Examples:
- If you call multiplyNumbers([1,2,3], 0) you'd get [0,0,0]
- If you call multiplyNumbers([1,2,3], 5) you'd get [5,10,15]

*/
function multiplyNumbers(numbers, numMultiplying) {
	const arr = [];
	for (let i = 0; i < numbers.length; i++) {
		arr[i] = numbers[i] * numMultiplying;
	}
	return arr;
}

// const numbers = [1, 2, 3];
// const numMultiplying = 5;
// const sol = numMultiplying(numbers, numMultiplying);
// console.log(sol);

/*

----------------------------------------
CHALLENGE #05: Merge Arrays
----------------------------------------

Write a function named mergeArrays that will take two arrays and merges them

Example:
- If you pass it ["a", "b", "c"] and ["d", "e", "f"] then it should return ["a", "d", "b", "e", "c", "f"]

NOTE: you can assume each input will be the same length

*/



/*

----------------------------------------
CHALLENGE #06: Create Range
----------------------------------------

Write a function named createRange that will take a number and a default value and return an array of that many values

Example:
- If you pass it 4 and "Hello" then it should return ["Hello", "Hello", "Hello", "Hello"]

*/
function mergeArrays(arr1, arr2) {
	const mergedArray = [];
	const maxLen = Math.max(arr1.length, arr2.length);
  
	for (let i = 0; i < maxLen; i++) {
	  if (i < arr1.length) {
		mergedArray.push(arr1[i]);
	  }
	  if (i < arr2.length) {
		mergedArray.push(arr2[i]);
	  }
	}
  
	return mergedArray;
  }
const arr1 = ["a", "b", "c"];
const arr2 = ["d", "e", "f"];

const merged = mergeArrays(arr1, arr2);
console.log(merged); 
/*

----------------------------------------
CHALLENGE #07: Flip Array
----------------------------------------

Write a function named flipArray that will take an array and return an object where the keys are the items and the values are the indices

Example:
- If you pass it ["quick", "brown", "fox"] then it should return { "quick": 0, "brown": 1, "fox": 2 }

*/



/*

----------------------------------------
CHALLENGE #08: Arrays to Object
----------------------------------------

Write a function named arraysToObject that will take an array of 2-element arrays, and return an object of key/value pairs

Example:
- If you pass it [[2014, "Horse"], [2015, "Sheep"]] then it should return { 2014: "Horse", 2015: "Sheep" }

*/



/*

----------------------------------------
CHALLENGE #09: Reverse String
----------------------------------------

Write a function named reverseString that will reverse a string without calling the built-in .split or .reverse methods

Example:
- If you pass it "hello" then it should return "olleh"

*/



/*

----------------------------------------
CHALLENGE #10: Repeats
----------------------------------------

Write a function named repeats that returns true if the first half of the string equals the last half, and false if not

Examples:
- If you pass it "haha" then it should return true because "ha" (the first half) equals "ha" (the second half)
- If you pass it "yay" then it should return false because it's odd
- If you pass it "heehaw" then it should return false because "hee" doesn't equal "haw"

*/



/*

----------------------------------------
CHALLENGE #11: Every Other
----------------------------------------

Write a function named everyOther that returns every other character in the string

Example:
- If you pass it "abcdef" then it should return "ace" because those represent every other letter

*/



/*

----------------------------------------
CHALLENGE #12: All Equal
----------------------------------------

Write a function named allEqual that returns true if every character in the string is the same

Examples:
- If you pass "aaa" it should return true
- If you pass "aba" it should return false

*/



/*

----------------------------------------
CHALLENGE #13: Sum of Letters
----------------------------------------

Write a function named sumLetters that returns the sum of every character in the string

Examples:
- If you pass "45" it should return 9
- If you pass "246" it should return 12

*/



/*

----------------------------------------
CHALLENGE #14: Count Vowels
----------------------------------------

Write a function named countVowels that returns the number of vowels in a string, excluding "y"

Example:
- If you pass "you" it should return 2

*/



/*

----------------------------------------
CHALLENGE #15: Split String
----------------------------------------

Write a function named split that takes a string and returns an array of the letters

Example:
- If you pass "you" it should return ["y", "o", "u"]

NOTE: do not use the builtin `split` method

*/



/*

----------------------------------------
CHALLENGE #16: Letter Map
----------------------------------------

Write a function named letterMap that takes a string and returns an object of the letters and their positions in the string

Examples:
- If you pass "Yo" it should return {Y: 0, o: 1}
- If you pass "Hello" it should return {H: 0, e: 1, l: 3, o: 4}

*/



/*

----------------------------------------
CHALLENGE #17: Letter Count
----------------------------------------

Write a function named letterCount that takes a string and returns an object with the letters and the number of their occurrences

Examples:
- If you pass "Yo" it should return {Y: 1, o: 1}
- If you pass "Hello" it should return {"H": 1, "e": 1, "l": 2, "o": 1}

*/



/*

----------------------------------------
CHALLENGE #18: Three Odd Numbers
----------------------------------------

Write a function named threeOdds that takes 2 numbers and returns true if there are 3 odd numbers _between_ those two numbers

Examples:
- If you pass 0,2 it should return false because the only number between 0 and 2 is 1
- If you pass 0,6 it should return true because between 0 and six (the numbers 1,2,3,4,5) there are three odds - 1, 3 and 5

*/



/*

----------------------------------------
CHALLENGE #19: Pad String Left
----------------------------------------

Write a function called leftPad that takes a string, a length and a fill character and returns a string padded to length with the fill character

Example:
- If you pass "a", 3, "*" it should return "**a" - that is, a string of length 3, padded on the left by the "*" character

*/



/*

----------------------------------------
CHALLENGE #20: Multiply String
----------------------------------------

Write a function named multiplyString that takes a number and a letter and creates a string of that many letters

Examples:
- If you pass 3, "a" it should return "aaa"
- If you pass 2, "b" it should return "bb"

*/



/*

----------------------------------------
CHALLENGE #21: Factorial
----------------------------------------

Write a function named factorial that takes a number and returns its factorial

Factorial of 4 means 4 * 3 * 2 * 1

Examples:
- If you pass 4 it should return 24 since that's 4 * 3 * 2 * 1
- If you pass 5 it should return 120 since that's 5 * 4 * 3 * 2 * 1

*/



/*

----------------------------------------
CHALLENGE #22: Between the Numbers
----------------------------------------

Write a function named arrayOfNumbers that takes a number and returns an array of all the numbers between 1 and that number, inclusive

Examples:
- If you pass 1 it should return [1]
- If you pass 3 it should return [1,2,3]

*/



/*

----------------------------------------
CHALLENGE #23: Even Odd
----------------------------------------

Write a function named evenOdd that takes two numbers as a range and returns an object with the numbers and whether they are even or odd

Example:
- If you pass 1, 4 it should return {"1": "odd", "2": "even", "3": "odd", "4": "even"}

*/



/*

----------------------------------------
CHALLENGE #24: Growing Keys
----------------------------------------

Write a function named growingKeys that takes a number and a string and returns an object where the keys are that string, repeated one more each time

Example:
- If you pass 2,"d" it should return {"d": true, "dd": true}

*/



/*

----------------------------------------
CHALLENGE #25: Every Element
----------------------------------------

Write a function named every that takes an array and a value and returns true if every element of the array equals the value

Examples:
- If you pass [1,1], 1 it should return true
- If you pass [1,2], 1 it should return false

*/



/*

----------------------------------------
CHALLENGE #26: Some Element
----------------------------------------

Write a function named some that takes an array and a value and returns true if at least one element of the array equals the value

Examples:
- If you pass [1,2], 1 it should return true
- If you pass [3,2], 1 it should return false

*/



/*

----------------------------------------
CHALLENGE #27: To Sentence
----------------------------------------

Write a function named some that takes an array and returns a string with the elements joined by commas, with a trailing 'and'

Examples:
- If you pass ["Sue", "Will"] it should return "Sue and Will"
- If you pass ["Sue", "Will", "Rachel"] it should return "Sue, Will and Rachel"

*/



/*

----------------------------------------
CHALLENGE #28: Acronym
----------------------------------------

Write a function named acronym that takes an array and returns a string that is an acronym of the items in the array

Examples:
- If you pass ["Sue", "Will"] it should return "SW"
- If you pass ["Java", Script", "Object", "Notation"] it should return "JSON"

*/



/*

----------------------------------------
CHALLENGE #29: Lowest Number
----------------------------------------

Write a function named min that takes an array and returns minimum value of the array

Example:
- If you pass [0,-3,2,5] it should return -3

*/



/*

----------------------------------------
CHALLENGE #30: Object Indeces
----------------------------------------

Write a function named index that takes an array of objects, and a property name, and returns an object where the keys are the specified property

Example:
- If you pass [{id: 1, name: "Joe"}, {id: 2, name: "Sue"}] it should return {1: {id: 1, name: "Joe"}, 2: {id: 2, name: "Sue"}}

*/



/*

----------------------------------------
CHALLENGE #31: Invert Keys and Values
----------------------------------------

Write a function named invert that takes an object and returns an object where the keys and values have been inverted

Example:
- If you pass {id: 1, name: "Joe"} it should return {1: "id", Joe: "name"}

*/



/*

----------------------------------------
CHALLENGE #32: Add Signature
----------------------------------------

Write a function named addSignature that takes an object and a name, and returns an object where

1. The keys are suffixed with "-signed"
2. The values are suffixed with " - <name>"

Example:
- If you pass {"contract": "foo"}, "Fred" it should return {"contract-signed": "foo - Fred"}

*/



/*

----------------------------------------
CHALLENGE #33: Array Key Value Pairs
----------------------------------------

Write a function named pairs that takes an object and returns an array of strings of key/value pairs

Example:
- If you pass {name: "Will", age: 24} it should return ["name - will", "age - 24"]

*/



/*

----------------------------------------
CHALLENGE #34: Sum Object Values
----------------------------------------

Write a function named sumValues that takes an object and returns the sum of the values without using Object.values

Example:
- If you pass {a: 1, b: 2} it should return 3

*/



/*

----------------------------------------
CHALLENGE #35: Biggest Object Name
----------------------------------------

Write a function named biggestProperty that takes an object and returns the name of the property with the highest value

Example:
- If you pass {1999: 4036, 2000: 7654} it should return '2000'

*/



/*

----------------------------------------
CHALLENGE #36: Key for Value
----------------------------------------

Write a function named keyForValue that takes an object and a value and returns the name of the property that matches that value

Example:
- If you pass {1999: 4036, 2000: 7654} and 4036, it should return '1999'

*/



/*

----------------------------------------
CHALLENGE #37: Object Contains Value
----------------------------------------

Write a function named containsValue that takes an object and a value and returns true if the object contains the value

Example:
- If you pass {1999: 4036, 2000: 7654} and 4036, it should return true

*/



//
