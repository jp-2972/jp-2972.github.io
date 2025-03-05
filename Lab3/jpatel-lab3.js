// Jainam Vipulkumar Patel
// ITMD 541-01 Graduate Student
// Lab 3

// Exercise #1 Mininum, Maximum, and Average of numbers

function minMaxAverage(arr) { // Function to find total numbers, minimum number, maximum number, and average of the numbers.
    
    // To find the smallest number in the array.
    let minNum = Math.min(...arr);

    // To find the largest number in the array.
    let maxNum = Math.max(...arr);

    // The sum of all numbers is calculated.
    let totalNum = arr.reduce((sum, number) => sum + number, 0);

    // To find average of the numbers
    let avgNum = totalNum / arr.length;
    
    console.log(`Total Numbers: ${arr.length}, Min Value: ${minNum}, Max Value: ${maxNum}, Average: ${avgNum}`)

}

// Test Cases for Exercise #1
minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1]); // Test Case 1 given by professor.
minMaxAverage([2, 1, 3, 14, 10, 11, 8]); // Test Case 2
minMaxAverage([5, 7, 12, 6, 8, 19, 3, 24, 15]); // Test Case 3


// Exercise #2 Count the number of vowels

function countVowels(str) {
     // Use a regular expression to find all vowels which includes both uppercase and lowercase.
    let numVowels = str.match(/[aeiou]/gi) || [];

    console.log(`${str}: ${numVowels.length} vowels`);
}

// Test Cases for Exercise #2
countVowels("Winter") // Test Case 1 given by the professor.
countVowels("Jainam") // Test Case 2
countVowels("Vipulkumar") // Test Case 3



// Exercise #3 Soreted Array

function sortNumbers(arr) {
    // Sort numbers from smallest to largest using the inbuilt sort() function.
    return arr.sort((a, z) => a-z);
}

// Test Cases for Excercise #3
console.log("Original Array:", [9, 4, 6, 2], "Sorted Array:", sortNumbers([9, 4, 6, 2])); // Test Case 1 given by the professor
console.log("Original Array:", [12, 10, 16, 11], "Sorted Array:", sortNumbers([12, 10, 16, 11])); // Test Case 2
console.log("Original Array:", [28, 25, 20, 22], "Sorted Array:", sortNumbers([28, 25, 20, 22])); // Test Case 3


// Exercise #4 Celsius to Fahrenheit
function celFah(celsius) {
    // Convert input to a number which handles string inputs also as asked by professor for graduate requirement.
    let cel = parseFloat(celsius);
    
    // Convert Celsius to Fahrenheit using the formula: F = (C × 9/5) + 32.
    let fah = (cel * 9/5) + 32;
    console.log(`${cel} Celsius = ${fah} Fahrenheit`);
}

celFah(30); // Test Case 1 given by the professor.
celFah(36); // Test Case 2
celFah(-5); // Test Case 3

// Below are test cases that are additional graduate requirements to be done graduate student.
celFah("35"); // Test Case 4 given by the professor
celFah("46"); // Test Case 5
celFah("-8"); // Test Case 6

// Exercise #5 Sort People by Age
function sortAgePeople(p) {
    // Sort the array of people objects based on age as youngest to oldest.
    let sortppl = p.sort((b, y) => b.age - y.age);

    // Return a new array with formatted introduction strings.
    return sortppl.map(per => `${per.name} is ${per.age} and from ${per.city}`);
}

// Test Case 1 which has professor's example
let ppl1 = [
    {name: "Name", age: 23, city: "Chicago"},
    {name: "Vishal", age: 37, city: "Dallas"},
    {name: "Tejal", age: 43, city: "Austin"},
    {name: "Hiren", age: 28, city: "Houston"},
    {name: "Rajeev", age: 35, city: "Florida"}
];

// Test Case 2
let ppl2 = [
    {name: "Dev", age: 23, city: "Chicago"},
    {name: "Parshv", age: 26, city: "Jersey City"},
    {name: "Meet", age: 24, city: "Nashville"},
    {name: "Abhinav", age: 28, city: "San Jose"},
    {name: "Vinay", age: 35, city: "Dallas"}
];


// Test Case 3
let ppl3 = [
    {name: "Hari", age: 23, city: "Chicago"},
    {name: "Aanshi", age: 26, city: "Abilene"},
    {name: "Neel", age: 34, city: "Boston"},
    {name: "Vishruti", age: 28, city: "Little Rock"},
    {name: "Dhruvil", age: 30, city: "New York City"}
];

console.log(sortAgePeople(ppl1));
console.log(sortAgePeople(ppl2));
console.log(sortAgePeople(ppl3));