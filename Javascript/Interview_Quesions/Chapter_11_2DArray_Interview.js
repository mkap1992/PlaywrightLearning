// Chapter 11 Interview Questions: 2D Arrays and Multidimensional Arrays
// Theory questions plus practical examples.

console.log("Chapter 11: 2D Arrays and Multidimensional Arrays Interview Questions\n");

console.log("Q1. What is a 2D array?");
console.log("Answer: A 2D array is an array of arrays. It is commonly used to represent rows and columns.");

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Matrix:", matrix);

console.log("\nQ2. How do you access an element in a 2D array?");
console.log("Answer: Use two indexes. The first index selects the row, and the second index selects the column.");

console.log("First row, first column:", matrix[0][0]);
console.log("Second row, third column:", matrix[1][2]);
console.log("Third row, second column:", matrix[2][1]);

console.log("\nQ3. How do you update a value in a 2D array?");
console.log("Answer: Assign a new value using row index and column index.");

matrix[0][1] = 10;
matrix[2][2] = 99;

console.log("Updated matrix:", matrix);

console.log("\nQ4. How do you create a 2D array using loops?");
console.log("Answer: Create an outer array for rows and inner arrays for columns.");

let rows = 3;
let cols = 4;
let zeroMatrix = [];

for (let i = 0; i < rows; i++) {
    zeroMatrix[i] = [];

    for (let j = 0; j < cols; j++) {
        zeroMatrix[i][j] = 0;
    }
}

console.log("Zero matrix:", zeroMatrix);

console.log("\nQ5. How do you iterate through a 2D array?");
console.log("Answer: Use nested loops. The outer loop goes through rows, and the inner loop goes through columns.");

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(`matrix[${i}][${j}] = ${matrix[i][j]}`);
    }
}

console.log("\nQ6. What is a jagged array?");
console.log("Answer: A jagged array is a 2D array where rows can have different lengths.");

let jaggedArray = [
    [10, 20],
    [30, 40, 50],
    [60]
];

console.log("Jagged array:", jaggedArray);
console.log("Second row length:", jaggedArray[1].length);

console.log("\nQ7. Practical: Find the sum of all values in a 2D array.");

let numbers = [
    [2, 4, 6],
    [8, 10, 12]
];

let total = 0;

for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers[i].length; j++) {
        total = total + numbers[i][j];
    }
}

console.log("Total:", total);

console.log("\nQ8. Practical: Find the largest value in a 2D array.");

let scores = [
    [45, 67, 89],
    [23, 100, 56],
    [78, 91, 34]
];

let largest = scores[0][0];

for (let i = 0; i < scores.length; i++) {
    for (let j = 0; j < scores[i].length; j++) {
        if (scores[i][j] > largest) {
            largest = scores[i][j];
        }
    }
}

console.log("Largest score:", largest);

console.log("\nQ9. Practical: Search for a value in a 2D array.");

let target = 100;
let found = false;

for (let i = 0; i < scores.length; i++) {
    for (let j = 0; j < scores[i].length; j++) {
        if (scores[i][j] === target) {
            found = true;
            console.log(`Found ${target} at row ${i}, column ${j}`);
        }
    }
}

console.log("Value found:", found);

console.log("\nQ10. What is a multidimensional array?");
console.log("Answer: A multidimensional array is an array with more than two levels, such as a 3D array.");

let threeDArray = [
    [
        [1, 2],
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8]
    ]
];

console.log("3D array value:", threeDArray[0][1][0]);
console.log("Another 3D array value:", threeDArray[1][0][1]);

console.log("\nQ11. How do you flatten a multidimensional array?");
console.log("Answer: Use flat() with the required depth.");

let flattenedArray = threeDArray.flat(2);
console.log("Flattened array:", flattenedArray);

console.log("\nQ12. Practical: Double every value in a multidimensional array.");

let doubledArray = threeDArray.map(function(twoDArray) {
    return twoDArray.map(function(innerArray) {
        return innerArray.map(function(value) {
            return value * 2;
        });
    });
});

console.log("Doubled array:", doubledArray);

console.log("\nQ13. Practical: Print a grid using forEach.");

let grid = [
    ["A", "B", "C"],
    ["D", "E", "F"],
    ["G", "H", "I"]
];

grid.forEach(function(row) {
    row.forEach(function(cell) {
        console.log(cell);
    });
});

console.log("\nQ14. Where are 2D arrays used in real projects?");
console.log("Answer: They are used for grids, tables, game boards, seating charts, matrix calculations, and test data combinations.");

let testData = [
    ["Chrome", "Login", "Passed"],
    ["Firefox", "Payment", "Failed"],
    ["Edge", "Search", "Passed"]
];

console.log("Browser:", testData[0][0]);
console.log("Test name:", testData[0][1]);
console.log("Status:", testData[0][2]);
