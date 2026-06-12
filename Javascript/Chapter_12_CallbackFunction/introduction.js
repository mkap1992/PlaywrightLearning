// Callback Functions in JavaScript
// A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. 
// It allows you to handle asynchronous operations, such as fetching data from an API or performing time-consuming tasks without blocking the main 
// thread.
// Example of a callback function
function fetchData(callback) {
    setTimeout(() => {  
        const data = { name: 'John', age: 30 };
        callback(data); // Call the callback function with the fetched data
    }, 2000); // Simulate a delay of 2 seconds
}

function displayData(data) {
    console.log('Fetched Data:', data);
}

// Call the fetchData function and pass the displayData function as a callback
fetchData(displayData);


function normalFunction(){
    console.log("This is a normal function.");
}
