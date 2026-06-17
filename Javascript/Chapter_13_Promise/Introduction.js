let order = new Promise((resolve, reject) => {
    let orderPlaced = true;
    if (orderPlaced) {
        resolve("Order placed successfully!");
    } else {
        reject("Failed to place order.");
    }
});

console.log(order);
// Promise with real example of api call
let apicall = new Promise((resolve, reject) => {
    resolve({
        status: 200,body: {
            name: "John",
            age: 30
        }

    });
});
apicall.then(response => {
    console.log("API call successful:", response);
}).catch(error => {
    console.error("API call failed:", error);
});

// Example of promise with finally
let promiseWithFinally = new Promise((resolve, reject) => {
    let condition = true;
    if (condition) {
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise rejected.");
    }   
});

promiseWithFinally.then(result => {
    console.log(result);
}).catch(error => {
    console.error(error);
}).finally(() => {
    console.log("This will always be executed, regardless of the promise outcome.");
});
