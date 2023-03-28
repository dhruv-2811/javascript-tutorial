// Array.prototype.map()

// const array1 = [1, 4, 9 , 16, 25]

// // let newArr = array1.map((curElem, index, arr) =>{
// //     return curElem>9
// // })

// let newArr = array1.map((curElem, index, arr)=>{
//     return `Index no = ${index} and the value is ${curElem} belong to ${arr}`
// })

// let newArr1 = array1.forEach((curElem, index, arr)=>{
//     return `Index no = ${index} and the value is ${curElem} belong to ${arr}`
// })


// console.log(array1);
// console.log(newArr);
// console.log(newArr1);



//sol1 square root of each number 
// let arr = [25, 36, 49, 64, 81];

// let arrSqr = arr.map((curElem)=>{
//     return Math.sqrt(curElem)
// })

// console.log(arrSqr);

//sol2 multiply by 2 and return greater than 10

// let arr = [2,3,4,6,8]

// let modArr = arr.map((curElem)=> curElem*2).filter((curElem)=> curElem > 10);
// console.log(modArr);

// let modArr = arr.map((curElem)=> curElem*2).filter((curElem)=> curElem > 10).reduce((accumulator, curElem)=> accumulator+= curElem);
// console.log(modArr);



//reduce method
//flatten an array means to convert the 3rd or 2nd array into a single dimensional array


// let arr = [5,6,2];

// let sum = arr.reduce((accumulator, curElem, index, arr)=>{
//     return accumulator += curElem;
// })

// giving initial value
// let sum = arr.reduce((accumulator, curElem, index, arr)=>{
//     return accumulator += curElem;
// },7)
// console.log(sum);


const arr = [
    ['zone_1', 'zone_2'],
    ['zone_3', 'zone_4'],
    ['zone_5', 'zone_6'],
    ['zone_7', 'zone_8']
];

let flatArr = arr.reduce((accumulator, currVal)=>{
    return accumulator.concat(currVal)
})

console.log(flatArr);