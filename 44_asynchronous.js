// hoisting in javascript

// console.log(myName);
// var myName;
// myName = "Dhruv";

//how the above code block will be in output during creation phase

// 1. var myName;  // defaults to undefined
// 2. console.log(myName);
// 3. myName = "Dhruv";



// scope chain and lexical scoping

// let a = "Hello! "; //global scope

// const first = () => {
//     let b = "How are you? "

//     const second = () => {
//         let c = "Hii, I am fine thank you";
//         console.log(a+b+c);
//     }
//     second();
//     // console.log(a+b+c);  // can't use c
// }

// first()



// closures

const outerFun = (a) => {
    let b = 10;
    const innerFun = () => {
        let sum = a + b;
        console.log(sum);
    }
    return innerFun;
}
let checkClosure = outerFun(5);
checkClosure();