// function currying

// sum(5)(3)(8)

// function sum(num1) {
//     return function (num2) {
//         return function (num3) {
//             console.log(num1 + num2 + num3);
//         }
//     }
// }

//above code in 1 line
// const sum = (num1) => (num2) => (num3) => console.log(num1 + num2 + num3);

// sum(5)(3)(8);



// callback hell

setTimeout(() => {
    console.log("Work 1 done");
    setTimeout(() => {
        console.log("Work 2 done");
        setTimeout(() => {
            console.log("Work 3 done");
        },1000)
    },1000)
},1000)