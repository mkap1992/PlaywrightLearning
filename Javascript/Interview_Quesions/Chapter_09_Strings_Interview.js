// Chapter 09 Interview Questions: Strings
// Theory questions plus practical examples.

console.log("Chapter 09: Strings Interview Questions\n");

console.log("Q1. What is a string?");
console.log("Answer: A string is a sequence of characters written inside quotes or backticks.");

let singleQuoteName = 'Rahul';
let doubleQuoteMessage = "Learning JavaScript";
let templateMessage = `${singleQuoteName} is ${doubleQuoteMessage}`;

console.log(singleQuoteName);
console.log(doubleQuoteMessage);
console.log(templateMessage);

console.log("\nQ2. What is the difference between quotes and backticks?");
console.log("Answer: Backticks support template literals, variables, expressions, and multi-line strings.");

let courseName = "JavaScript";
let duration = 30;

console.log(`Course: ${courseName}, Duration: ${duration} days`);

let multiLineText = `Line one
Line two`;

console.log(multiLineText);

console.log("\nQ3. How do you convert other values to string?");
console.log("Answer: Use the String() function.");

console.log(String(100));
console.log(String(true));
console.log(String(null));
console.log(String(undefined));

console.log("\nQ4. How do you find the length of a string?");
console.log("Answer: Use the .length property.");

let userName = "Patil Nagarjuna";
console.log("Length:", userName.length);

console.log("\nQ5. How do you change string case?");
console.log("Answer: Use toUpperCase() and toLowerCase().");

console.log("Uppercase:", userName.toUpperCase());
console.log("Lowercase:", userName.toLowerCase());

console.log("\nQ6. How do you check whether a string contains specific text?");
console.log("Answer: Use includes(). It returns true or false.");

let url = "https://example.com/web/base/login?tenant=RAUTO_FOLI2";

console.log("Contains login:", url.includes("login"));
console.log("Contains logout:", url.includes("logout"));

console.log("\nQ7. Difference between startsWith and endsWith?");
console.log("Answer: startsWith checks the beginning. endsWith checks the ending.");

console.log("Starts with https:", url.startsWith("https"));
console.log("Ends with tenant:", url.endsWith("RAUTO_FOLI2"));

console.log("\nQ8. Difference between indexOf and lastIndexOf?");
console.log("Answer: indexOf returns the first matching position. lastIndexOf returns the last matching position.");

let message = "Login test completed and logout test completed";

console.log("First test position:", message.indexOf("test"));
console.log("Last test position:", message.lastIndexOf("test"));
console.log("Missing value position:", message.indexOf("payment"));

console.log("\nQ9. Practical: Extract part of a string using slice.");

let domain = url.slice(8, 19);
console.log("Domain:", domain);

console.log("\nQ10. Practical: Replace one part of a string.");

let updatedUrl = url.replace("example", "hmsweb");
console.log("Updated URL:", updatedUrl);

console.log("\nQ11. Practical: Split a URL and read the domain.");

let urlParts = url.split("/");
console.log("URL parts:", urlParts);
console.log("Domain from split:", urlParts[2]);

console.log("\nQ12. Practical: Remove extra spaces from a name.");

let spacedName = " Patil Nagarjuna ";

console.log("Trim:", spacedName.trim());
console.log("Trim start:", spacedName.trimStart());
console.log("Trim end:", spacedName.trimEnd());
console.log("Remove all spaces:", spacedName.replace(/\s/g, ""));

console.log("\nQ13. Practical: Build full name using concatenation and template literal.");

let firstName = "Patil";
let lastName = "Nagarjuna";

let fullNameUsingPlus = firstName + " " + lastName;
let fullNameUsingTemplate = `${firstName} ${lastName}`;

console.log("Using plus:", fullNameUsingPlus);
console.log("Using template literal:", fullNameUsingTemplate);

console.log("\nQ14. Practical: Access characters in a string.");

let browserName = "Chrome";

console.log("First character:", browserName[0]);
console.log("First using charAt:", browserName.charAt(0));
console.log("Last using at:", browserName.at(-1));
console.log("Character code:", browserName.charCodeAt(0));
