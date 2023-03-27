// var myFriends = new Array; // optional no need to write
// var myFriends = ['male', 'female', 20, 'arjun', 'abc', 53, true]

// traversal of array

// var myFriends = ['rocky', 'jacky', 'mackey', 'xavier'];

// console.log(myFriends[3]);

// console.log(myFriends.length); //length of array

// console.log(myFriends[myFriends.length - 1 ]);

// for loop

// var myFriends = ['rocky', 'jacky', 'mackey', 'xavier'];

// for(var i = 0; i<myFriends.length; i++){
//     console.log(myFriends[i])
// }

// ECMAScript 2015 / ES6
// for in loop and for of loop

// var myFriends = ['rocky', 'jacky', 'mackey', 'xavier'];

// for (let elements in myFriends){
//     console.log(elements);
// }

// for(let elements of myFriends){
//     console.log(elements);
// }


// Array.prototype.forEach()

// var myFriends = ['rocky', 'jacky', 'mackey', 'xavier'];

// myFriends.forEach(function (element, index, array) {
//     console.log(element + ' index: ' + index + " array: " + array);
// });

// myFriends.forEach((element, index, array) => {
//     console.log(element + ' index: ' + index + " array: " + array);
// });


// Array.prototype.indexOf()
// return -1 if element not found else return the index of the element
// var myFriends = ['rocky', 'jacky', 'mackey', 'xavier'];
// console.log(myFriends.indexOf('jacky'));
// console.log(myFriends.indexOf('jacky', 2));
// console.log(myFriends.indexOf('name'));


// Array.prototype.lastIndexOf()
// var myFriends = ['rocky', 'jacky', 'mackey', 'xavier'];
// console.log(myFriends.lastIndexOf("xavier",1))
// console.log(myFriends.lastIndexOf("xavier",3))


// Array.prototype.includes()
// var myFriends = ['rocky', 'jacky', 'mackey', 'xavier'];
// console.log(myFriends.includes('jacky'));
// console.log(myFriends.includes('jacky',3));
// console.log(myFriends.includes('ja'));


// Array.prototype.find()
// arr.find(callback(element[, index[, array]])[, thisArg])

// const prices = [200,300,350,400,450,500,600];

// const findElem = prices.find((currVal) => currVal < 400)
// console.log(findElem);

// console.log(prices.find((currVal) => currVal > 1400))


// Array.prototype.findIndex()
// const prices = [200,300,350,400,450,500,600];
// console.log(prices.findIndex((currVal) => currVal > 400))
// console.log(prices.findIndex((currVal) => currVal > 1400))


// Array.prototype.filter()
// const prices = [200,300,350,400,450,500,600]; 

// const newPriceTag = prices.filter((elem, index) => {
//     return elem > 400
// })
// console.log(newPriceTag);


// Array.prototype.sort()

const months = ['March', 'Jan', 'Feb', 'April' , 'Dec', 'Nov'];
console.log(months.sort());

const array1 = [1, 30, 4, 21, 100000, 99];
console.log(array1.sort());