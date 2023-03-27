// Array.prototype.push()
// add element at the end of the array
// returns the new length of the array

// const animals = ['pigs', 'goats', 'sheep'];

// const count = animals.push('chicken');
// console.log(animals);
// console.log(count);

// animals.push('chicken', 'cats', 'cow')
// console.log(animals);


// Array.prototype.unshift()
// add element at the beginning of the array
// returns the new length of the array

// const animals = ['pigs', 'goats', 'sheep'];

// const count = animals.unshift('chicken');
// console.log(animals);

// animals.unshift('chicken', 'cats', 'cow')
// console.log(animals);


// const myNumbers = [1,2,3,5];
// myNumbers.unshift(4,6);
// console.log(myNumbers);



// Array.prototype.pop()
// removes last element and return that element

// const plants = ['broccoli', 'cauliflower', 'kale', 'tomato', 'cabbage'];

// console.log(plants);
// console.log(plants.pop());
// console.log(plants);


// Array.prototype.shift()
// removes first element and return that element

// const plants = ['broccoli', 'cauliflower', 'kale', 'tomato', 'cabbage'];

// console.log(plants);
// console.log(plants.shift());
// console.log(plants);



// Array.prototype.splice()
// Adds and/or removes elements from an array

const months = ['Jan', 'march', 'April', 'June', 'July'];

//sol1
// const newMonth = months.splice(months.length,0,"Dec")
// console.log(months);

//sol2
// console.log(newMonth);

//sol3
// const indexOfMonth = months.indexOf('march');
// if (indexOfMonth != -1){
//     const updateMonth = months.splice(indexOfMonth,1,'March');
//     console.log(months);
    
// }else{
//     console.log('No such data found');
// }


//sol4

const indexOfMonth = months.indexOf('April');
if (indexOfMonth != -1){
    const updateMonth = months.splice(indexOfMonth,Infinity);
    console.log(months);
    console.log(updateMonth);
}else{
    console.log('No such data found');
}
