let name = 'Bob';
let doublequotes = "This is a string in double quotes.";
// multiline string
let multiline = `This is a string
that spans multiple lines.`;
console.log(name);
console.log(doublequotes);
console.log(multiline);
console.log(String(200));
console.log(String(true));
console.log(String(false));
console.log(String(null));
console.log(String(undefined));
console.log(String({}));
console.log(String([1, 2, 3]));
console.log(String(function() { return 'Hello'; }));
let name2 = 'Patil Nagarjuna|';
console.log(name2.length);
console.log(name2.toUpperCase());
console.log(name2.toLowerCase());
console.log(name2.includes('Nagarjuna'));   
console.log(name2.startsWith('Patil'));
console.log(name2.endsWith('|'));
console.log(name2.indexOf('Nagarjuna')); 
console.log(name2.slice(6, 15)); 
console.log(name2.replace('Nagarjuna', 'John'));
// Accessing characters in a string
console.log(name2[0]);
console.log(name2.charAt(0));
console.log(name2.at(-1));
console.log(name2.charCodeAt(0));
