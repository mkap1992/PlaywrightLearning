let fruits = ["Apple", "Banana", "Cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
console.log("Using for...of loop:");
for (let fruit of fruits) {
    console.log(fruit);
}
console.log("Using forEach method:");
fruits.forEach((fruit, index) => {
    console.log(fruit, index);
});
console.log("In Mehtod:");
for (let i in fruits) {
    console.log(fruits[i]);
}   
