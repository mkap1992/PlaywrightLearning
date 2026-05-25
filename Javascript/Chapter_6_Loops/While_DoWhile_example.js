// Real-time QA example: Wait for a test order to reach "Completed" status

let orderStatusList = ["Created", "Payment Pending", "Packed", "Shipped", "Completed"];
let currentStatusIndex = 0;
let retryCount = 0;
let maxRetries = 5;

while (retryCount < maxRetries) {
  let currentStatus = orderStatusList[currentStatusIndex];
  console.log("Checking order status:", currentStatus);

  if (currentStatus === "Completed") {
    console.log("QA Test Passed: Order reached Completed status.");
    break;
  }

  currentStatusIndex++;
  retryCount++;
}

if (retryCount === maxRetries) {
  console.log("QA Test Failed: Order did not reach Completed status.");
}

// Do while example: Run payment retry test at least once
let paymentAttempt = 1;
let paymentSuccessful = false;

do {
  console.log("Payment test attempt:", paymentAttempt);

  if (paymentAttempt === 3) {
    paymentSuccessful = true;
    console.log("QA Test Passed: Payment completed successfully.");
  }

  paymentAttempt++;
} while (!paymentSuccessful && paymentAttempt <= 3);

if (!paymentSuccessful) {
  console.log("QA Test Failed: Payment did not complete.");
}
