// ECMAScript 2015 / ES6

// let vs const vs var

// var => function scope
// let and const => Block scope

// var myName = 'Dhruv Beast';
// console.log(myName)

// myName = 'Dhruv Patel'
// console.log(myName)


// let myName = 'Dhruv Beast';
// console.log(myName)

// myName = 'Dhruv Patel'
// console.log(myName)


// const myName = 'Dhruv Beast'; // once assigned cant changed again
// console.log(myName)

// myName = 'Dhruv Patel'
// console.log(myName)


function biodata(){
    let myFirstName='Dhruv';
    console.log(myFirstName);

    if (true) {
        let myLastName = 'Patel';
        console.log('inner ' + myLastName);
        console.log('inner ' + myFirstName);
    }
    console.log('innerOuter ' + myLastName);

}

biodata();