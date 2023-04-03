// Dates Method

const curDate = new Date();

// how to get the individual date

// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth()); //0-11 jan to dec
// console.log(curDate.getDate());
// console.log(curDate.getDay());



// how to set the individual date

console.log(curDate.setFullYear(2022));
console.log(curDate.setFullYear(2022,10,5));
let setMonth = curDate.setMonth(10);//0-11 jan to dec
console.log(setMonth);
console.log(curDate.setDate(5));
console.log(curDate.toLocaleString());
