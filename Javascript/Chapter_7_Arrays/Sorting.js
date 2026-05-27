let fruits = ["Banana", "Apple", "Cherry"];
console.log("Original array:", fruits);
// Sorting in ascending order
fruits.sort();
console.log("Sorted array (ascending):", fruits);
// Sorting in descending order
fruits.sort((a, b) => b.localeCompare(a));
console.log("Sorted array (descending):", fruits);

let numbers = [40, 100, 1, 5, 25, 10];
console.log("Original array:", numbers);    
// Sorting in ascending order
numbers.sort((a, b) => a - b);
console.log("Sorted array (ascending):", numbers);  
// Sorting in descending order
numbers.sort((a, b) => b - a);
console.log("Sorted array (descending):", numbers); 
numbers.sort();
console.log("Sorted array (default):", numbers);  // Incorrect sorting due to string comparison


let numbers2 = [1,2,3,4,5];
console.log("Original array:", numbers2);
let slicedNumbers = numbers2.slice(1, 3);
// start index and end index-1
console.log("Sliced array (index 1 to 2):", slicedNumbers);
// no end index, slice to the end of the array
let slicedNumbers2 = numbers2.slice(2);
console.log("Sliced array (index 2 to end):", slicedNumbers2);
// negative slice, counts from the end of the array
let slicedNumbers3 = numbers2.slice(-3);
console.log("Sliced array (last 3 elements):", slicedNumbers3);

// take all elements from index 0 to the end of the array
let slicedNumbers4 = numbers2.slice(0);
console.log("Sliced array (all elements):", slicedNumbers4);

// combine two arrays
let moreNumbers = [6, 7, 8];
let combinedNumbers = numbers2.concat(moreNumbers);
console.log("Combined array:", combinedNumbers);
// Spread operator to combine arrays
let combinedNumbers2 = [...numbers2, ...moreNumbers];
console.log("Combined array using spread operator:", combinedNumbers2);