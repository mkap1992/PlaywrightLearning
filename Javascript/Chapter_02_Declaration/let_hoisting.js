let x = "global";
if (true) {
    console.log(x); // "global" due to hoisting of `let` in the block scope
    let x = "block";
    console.log(x); // "block"
}
// In this example, the `let x` inside the block creates a new variable that shadows the outer `x`.
// The first `console.log(x)` will throw a `ReferenceError` because `x` is not accessible before its declaration due to the temporal dead zone.
// The second `console.log(x)` will output "block" because it refers to the `x` declared within the block scope.    