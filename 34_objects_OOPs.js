// object literal


// How to create a object

// 1st Way
// let bioData = {
//     myName : "Dhruv Patel",
//     myAge : "22",
//     getData : function(){
//         console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//     }
// }

// console.log(bioData.myName);
// bioData.getData();

// 2nd way no need to write functions as well after es6

// let bioData = {
//     myName : "Dhruv Patel",
//     myAge : "22",
//     getData () {
//         console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//         }
//     }
// bioData.getData();

//  storing object inside a object

let bioData = {
    myName : {
        realName : 'Dhruv Patel',
        channelName: 'Muscular Dhruv'
    },
    myAge : "22",
    getData () {
        console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
        }
    }


console.log(bioData.myName.realName);