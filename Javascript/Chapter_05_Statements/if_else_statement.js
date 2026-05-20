// JavaScript If Else Statement
// The if, else if, and else statements are used to make decisions in code.
// They run different blocks of code based on conditions.

// Example 1: if condition
// The if block runs only when the condition is true.

let age = 20;

if (age >= 18) {
  console.log("You are eligible to vote.");
}

// Example 2: if else condition
// The if block runs when the condition is true.
// The else block runs when the condition is false.

let marks = 35;

if (marks >= 40) {
  console.log("You passed the exam.");
} else {
  console.log("You failed the exam.");
}

// Example 3: if else if else condition
// Use else if when you want to check multiple conditions.

let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else if (score >= 60) {
  console.log("Grade: C");
} else {
  console.log("Grade: D");
}

// Example 4: Checking weather

let temperature = 32;

if (temperature > 35) {
  console.log("It is very hot today.");
} else if (temperature >= 25) {
  console.log("The weather is pleasant.");
} else {
  console.log("It is cold today.");
}

// Example 5: Checking login status

let isLoggedIn = true;

if (isLoggedIn) {
  console.log("Welcome to your account.");
} else {
  console.log("Please login first.");
}

// Example 6: Complex else if condition
// This example checks marks, attendance, and project submission.

let studentMarks = 78;
let attendance = 82;
let projectSubmitted = true;

if (studentMarks >= 90 && attendance >= 85 && projectSubmitted) {
  console.log("Result: Excellent performance with distinction.");
} else if (studentMarks >= 75 && attendance >= 80 && projectSubmitted) {
  console.log("Result: Passed with first class.");
} else if (studentMarks >= 60 && attendance >= 75) {
  console.log("Result: Passed with second class.");
} else if (studentMarks >= 40 && attendance >= 60) {
  console.log("Result: Passed, but improvement is needed.");
} else if (studentMarks >= 40 && attendance < 60) {
  console.log("Result: Marks are okay, but attendance is too low.");
} else if (studentMarks < 40 && projectSubmitted) {
  console.log("Result: Failed in marks, but project is submitted.");
} else {
  console.log("Result: Failed. Please improve marks, attendance, and project work.");
}

// Note:
// if checks the first condition.
// else if checks another condition when the first condition is false.
// else runs when none of the above conditions are true.
//  Checking Even number
let number = 10;
if(number%2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}
// Checking Grade based on marks
let marks1 = 85;
if(marks1 >=90){
  console.log("Grade: A");
} 
else if(marks1 >= 80 && marks1 <= 89){
  console.log("Grade: B");
}
else if(marks1 >= 70 && marks1 <= 79){  
  console.log("Grade: C");
}
else if(marks1 >= 60 && marks1 <= 69){
  console.log("Grade: D");
}
else{
  console.log("Failed");
}

// Example : Checking leap year
let x=2024;
if(x%4 === 0 && (x%100 !== 0 || x%400 === 0) )
  {
  console.log("The year is a leap year.");
  }