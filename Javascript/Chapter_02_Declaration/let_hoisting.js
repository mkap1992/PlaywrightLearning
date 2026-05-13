let x = "global";
if (true) {
    console.log(x); // "global" due to hoisting of `let` in the block scope
    let x = "block";
    console.log(x); // "block"
}