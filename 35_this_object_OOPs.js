// what is 'this' object?

// The definition of 'this' object is that it contain the current context.

//the this object can have different values depending on where it is placed.

// ex 1

// console.log(this); // refers to current context i.e. window global object

// ex 2

// function myName() {
//     console.log(this);
// }
// myName();

// ex 3
// var myNames = 'Dhruv';
// function myName() {
//     console.log(this.myNames);
// }

// myName();


// ex 4

// const obj = {
//     myAge : 22,
//     myName() {
//         console.log(this.myAge);
//     }
// }
// obj.myName();


// ex 5
// this object will not work with arrow function

// const obj = {   
//     myAge : 22,
//     myName: () => {
//         console.log(this);
//     }
// }
// obj.myName();


//ex 6


let bioData = {
    myName: {
        realName: "Dhruv Patel",
        channelName: "Muscular Dhruv"
    },
    myAge: 22,
    getData(){
        console.log(`My name is ${this.myName.channelName} and my age is ${this.myAge}`);
    }
}
bioData.getData();
