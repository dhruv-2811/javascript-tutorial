// ECMAScript 2015 / ES6

// normal way of writing function

// console.log(sum());

// function sum() {
    // let a = 5; b = 6;
    // let sum = a+b;
    // return `the sum of the two number is ${sum}`
// }


// how to convert it in fat arrow function
// const sum = () => {
//     return `the sum of the two number is ${(a=5)+(b=6)}`
// }
const sum = () => `the sum of the two number is ${(a=5)+(b=6)}` 

console.log(sum());