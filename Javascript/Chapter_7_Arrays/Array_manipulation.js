let number_array = [1, 2, 3, 4, 5];
console.log("Original array:", number_array);
// Adding elements to the end of the array
number_array.push(6, 9, 10);
console.log("After push:", number_array);
console.log(number_array.length); // Output: 8
// Removing the last element from the array
let removedElement = number_array.pop();
console.log("Removed element:", removedElement);
console.log("After pop:", number_array);
number_array.unshift(9, 10);
console.log("After unshift:", number_array);
// Removing the first element from the array
let removedFirstElement = number_array.shift();
console.log("Removed first element:", removedFirstElement);
console.log("After shift:", number_array);
number_array.splice(2, 0, 7, 8);
console.log("After splice (inserting 7 and 8 at index 2):", number_array);
number_array.splice(4, 2);
console.log("After splice (removing 2 elements from index 4):", number_array);
