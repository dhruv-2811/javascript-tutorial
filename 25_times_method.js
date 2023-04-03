// Time Methods

// const curTime = new Date();

// how to get individual time

// console.log(curTime.getTime()); // since january 1,1970 in milliseconds
// console.log(curTime.getHours());
// console.log(curTime.getMinutes());
// console.log(curTime.getSeconds());
// console.log(curTime.getMilliseconds());


// how to set individual time  
// let curTime = new Date();
// console.log(curTime.setTime());
// console.log(curTime.setHours(5));
// console.log(curTime.setMinutes(5));
// console.log(curTime.setSeconds(5));
// console.log(curTime.setMilliseconds(5));


//practice time

const dt1 = new Date().toLocaleTimeString(); //  10:00:54 pm
const dt2 = new Date().toLocaleDateString(); //  3/4/2023
const dt3 = new Date().toLocaleString(); // 3/4/2023, 10:00:54 pm

console.log(dt1);
console.log(dt2);
console.log(dt3);