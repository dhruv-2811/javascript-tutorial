// What is NaN?

// NaN is a property of the global object.
// In other words, it is a variable in global scope.
// The initial value of NaN is Not-a-Number



// var myPhoneNumber = 9876543210
// var myName = "Dhruv Beast"

// console.log(isNaN(myPhoneNumber));

// console.log(isNaN(myName));

// if (isNaN(myName)){
//     console.log("plz enter valid phone number");
// }

// NaN Practice 

console.log(NaN===NaN); //False
console.log(Number.NaN===NaN); //False
console.log(isNaN(NaN)); //True
console.log(isNaN(Number.NaN)); //True
console.log(Number.isNaN(NaN)); //True

