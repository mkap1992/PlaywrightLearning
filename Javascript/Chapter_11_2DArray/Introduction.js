// 2D Array Introduction

// A 2D array is an array of arrays. It can be visualized as a table with rows and columns. Each element in a 2D array is accessed using two indices:
//  one for the row and one for the column.
// Creating a 2D array
let matrix = [
    [1, 2, 3],
    [4, 5, 6],  
    [7, 8, 9]
];
console.log(matrix[0][0]); // 1
console.log(matrix[1][2]); // 6
console.log(matrix[2][1]); // 8
// You can also create a 2D array using loops
let rows = 3;   
let cols = 3;
let matrix2 = [];
for (let i = 0; i < rows; i++) {
    matrix2[i] = [];
    for (let j = 0; j < cols; j++) {
        matrix2[i][j] = 0;
    }
}
console.log(matrix2);
// Accessing and modifying elements in a 2D array
matrix[0][1] = 10;  
console.log(matrix[0][1]); // 10
matrix[1][0] = 20;  
console.log(matrix[1][0]); // 20
// Iterating through a 2D array
for (let i = 0; i < matrix.length; i++) {   
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }   
}

// 2D arrays are commonly used in various applications such as representing grids, matrices, and tables. 
// They provide a way to organize and manipulate data in a structured manner.
// In the next sections, we will explore more operations and techniques for working with 2D arrays, 
// including traversing, searching, and performing various algorithms on them.
// Stay tuned for more examples and explanations on how to effectively utilize 2D arrays in JavaScript!
// In the upcoming sections, we will also cover topics such as multi-dimensional arrays,
// array methods for 2D arrays, and common algorithms that can be implemented using 2D arrays. 
// We will also discuss the advantages and disadvantages of using 2D arrays in different scenarios.
// By the end of this chapter, you will have a solid understanding of how to work with 2D arrays in JavaScript 
// and be able to apply them in your projects effectively.
// Let's continue exploring the world of 2D arrays and discover the various techniques and operations that can be performed on them!
let grid = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0]
];
for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
        console.log(grid[i][j]);
    }   
}
// In this example, we have a 3x3 grid represented as a 2D array. We use nested loops to iterate through each element in the grid and print its value.
// This is just a basic introduction to 2D arrays in JavaScript. In the next sections, we will explore more advanced topics such as multi-dimensional arrays, array methods for 2D arrays, and common algorithms that can be implemented using 2D arrays.
let multiDimensionalArray = [
    [
        [1, 2], 
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8]
    ]
];
console.log(multiDimensionalArray[0][1][0]); // 3
console.log(multiDimensionalArray[1][0][1]); // 6
// In this example, we have a 3D array (an array of arrays of arrays). We can access elements in the multi-dimensional array using multiple indices. 
// The first index represents the outer array, the second index represents the middle array, and the third index represents the innermost array. 
// This allows us to organize data in a more complex structure and perform operations on it effectively.
// In the next sections, we will explore more operations and techniques for working with multi-dimensional arrays, including traversing, searching, and performing various algorithms on them.
let multiDimensionalArray2 = [
    [
        [1, 2],
        [3, 4]
    ],
    [
        [5, 6], 
        [7, 8]
    ]
];
for (let i = 0; i < multiDimensionalArray2.length; i++) {
    for (let j = 0; j < multiDimensionalArray2[i].length; j++) {
        for (let k = 0; k < multiDimensionalArray2[i][j].length; k++) {
            console.log(multiDimensionalArray2[i][j][k]);
        }
    }   
}
// In this example, we have a 3D array and we use nested loops to iterate through each element in the multi-dimensional array and print its value. 
// This allows us to access and manipulate data in a more complex structure effectively.
// In the upcoming sections, we will also cover topics such as array methods for multi-dimensional arrays, common algorithms that can be implemented using multi-dimensional arrays, and the advantages and disadvantages of using multi-dimensional arrays in different scenarios. 
// By the end of this chapter, you will have a solid understanding of how to work with multi-dimensional arrays in JavaScript and be able to apply them in your projects effectively.
let multiDimensionalArray3 = [
    [
        [1, 2],
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8]
    ]
];
multiDimensionalArray3[0][1][0] = 10;  
console.log(multiDimensionalArray3[0][1][0]);
multiDimensionalArray3[1][0][1] = 20;  
console.log(multiDimensionalArray3[1][0][1]);
// In this example, we modify elements in the multi-dimensional array by accessing them using their respective indices.
// We change the value at index [0][1][0] to 10 and the value at index [1][0][1] to 20.
// This demonstrates how we can easily access and modify elements in a multi-dimensional array using their indices.
// In the next sections, we will explore more operations and techniques for working with multi-dimensional arrays, including traversing, searching, and performing various algorithms on them. 
// We will also discuss the advantages and disadvantages of using multi-dimensional arrays in different scenarios. 
// By the end of this chapter, you will have a solid understanding of how to work with multi-dimensional arrays in JavaScript and be able to apply them in your projects effectively.   
// Example for array methods on multi-dimensional arrays
let multiDimensionalArray4 = [
    [
        [1, 2],
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8]
    ]
];
let flattenedArray = multiDimensionalArray4.flat(2);
console.log(flattenedArray); // [1, 2, 3, 4, 5, 6, 7, 8]
// In this example, we use the flat() method to flatten a multi-dimensional array into a single-level array.
// The flat() method takes an optional argument that specifies the depth level to flatten. In this case, we use 2 to flatten the array completely.
// The resulting flattened array contains all the elements from the multi-dimensional array in a single level.
// This is just one example of how we can use array methods to manipulate multi-dimensional arrays. In the next sections, we will explore more array methods and techniques for working with multi-dimensional arrays effectively.  

let multiDimensionalArray5 = [
    [
        [1, 2],
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8]
    ]
];
let mappedArray = multiDimensionalArray5.map(subArray => subArray.map(innerArray => innerArray.map(value => value * 2)));
console.log(mappedArray); // [[[2, 4], [6, 8]], [[10, 12], [14, 16]]]
// In this example, we use the map() method to create a new multi-dimensional array where each value is multiplied by 2.
// We use nested map() calls to iterate through each level of the multi-dimensional array and apply the multiplication operation to each value.
// The resulting mapped array contains the modified values while maintaining the original structure of the multi-dimensional array.
// This demonstrates how we can use array methods like map() to manipulate multi-dimensional arrays in a functional programming style. 
// In the next sections, we will explore more array methods and techniques for working with multi-dimensional arrays effectively.
let multiDimensionalArray6 = [
    [
        [1, 2],
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8]
    ]
];
let filteredArray = multiDimensionalArray6.map(subArray => subArray.map(innerArray => innerArray.filter(value => value % 2 === 0)));
console.log(filteredArray); // [[[2], [4]], [[6], [8]]]
// In this example, we use the filter() method to create a new multi-dimensional array that only contains even values.  
// We use nested map() calls to iterate through each level of the multi-dimensional array and apply the filter() method to each inner array to keep only the even values.
// The resulting filtered array contains only the even values while maintaining the original structure of the multi-dimensional array.
// This demonstrates how we can use array methods like filter() to manipulate multi-dimensional arrays based on specific conditions. 
// In the next sections, we will explore more array methods and techniques for working with multi-dimensional arrays effectively.

// 2D for each loop
let multiDimensionalArray7 = [
    [
        [1, 2],
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8]
    ]
];
// Using forEach to iterate through a multi-dimensional array
multiDimensionalArray7.forEach(subArray => {
    subArray.forEach(innerArray => {    
        innerArray.forEach(value => {
            console.log(value);
        });
    });
});
// Example of using forEach to iterate through a multi-dimensional array and print each value.
// We use nested forEach calls to traverse through each level of the multi-dimensional array and access each value.
// This allows us to perform operations on each value in the multi-dimensional array effectively.
// In the next sections, we will explore more techniques for working with multi-dimensional arrays, including searching for specific values, performing various algorithms, and discussing the advantages and disadvantages of using multi-dimensional arrays in different scenarios. 
// By the end of this chapter, you will have a solid understanding of how to work with multi-dimensional arrays in JavaScript and be able to apply them in your projects effectively.

    
