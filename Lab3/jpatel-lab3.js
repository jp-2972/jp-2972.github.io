// Jainam Vipulkumar Patel
// ITMD 541-01 Graduate Student
// Lab 3

// Exercise #1 Mininum, Maximum, and Average of numbers

function minMaxAverage(arr) { // Function t find total numbers, minimum number, maximum number, and average of the numbers.
    let minNum = Math.min(...arr);
    let maxNum = Math.max(...arr);
    let totalNum = arr.reduce((sum, number) => sum + number, 0);
    let avgNum = totalNum / arr.length;
    
    console.log(`Total Numbers: ${arr.length}, Min Value: ${minNum}, Max Value: ${maxNum}, Average: ${avgNum}`)

}

// Test Cases for Exercise #1
minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1]); // Test Case 1 given by professor
minMaxAverage([2, 1, 3, 14, 10, 11, 8]); // Test Case 2
minMaxAverage([5, 7, 12, 6, 8, 19, 3, 24, 15]); // Test Case 3


// Exercise #2 Count the number of vowels

function countVowels(str) {
    let numVowels = str.match(/[aeiou]/gi) || [];

    console.log(`${str}: ${numVowels.length} vowels`);
}

// Test Cases for Exercise #2
countVowels("Winter") // Test Case 1 given by the professor
countVowels("Jainam") // Test Case 2
countVowels("Vipulkumar") // Test Case 3



// Exercise #3 Soreted Array

function sortNumbers(arr) {
    return arr.sort((a, z) => a-z);
}

// Test Cases for Excercise #3
console.log("Original Array:", [9, 4, 6, 2], "Sorted Array:", sortNumbers([9, 4, 6, 2])); // Test Case 1 given by the professor
console.log("Original Array:", [12, 10, 16, 11], "Sorted Array:", sortNumbers([12, 10, 16, 11])); // Test Case 2
console.log("Original Array:", [28, 25, 20, 22], "Sorted Array:", sortNumbers([28, 25, 20, 22])); // Test Case 3


