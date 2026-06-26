// TypeScript basically makes javascript follow certain rules
// Typescript was introduced by Micro Soft
// ts file will converted to js while executing
let a:string = "patil nagarjuna";

// 1. Keyword -- Export
// Type 
let testName:string = "Login test";
function add(a: number, b: number):number{
    return a+b;
}

export { a, testName, add };
// c:\PlaywrightLearning; npx tsc --ignoreConfig 
// Opps_TypeScript/Chapter_01_Introduction/Intro.ts; 
// node Opps_TypeScript/Chapter_01_Introduction/Intro.js