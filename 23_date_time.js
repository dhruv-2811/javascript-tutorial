//Javascript Date objects
//represents milliseconds since 1 January 1970 UTC


// Creating Date Objects
// 4 ways to create a new date object;

// new Date()
// new Date(year, motnth, day, hours, minutes, seconds, milliseconds)
// new Date(milliseconds)
// new Date(date string)


// new Date()

// let currDate = new Date();
// console.log(currDate);

// console.log(new Date());

// console.log(new Date().toLocaleString());

// console.log(new Date().toString());


//Date.now()
// console.log(Date.now());  // return milliseconds since 1 January 1970 UTC


//new Date(year, month, ...)
// counts month from 0 to 11 i.e. January is 0 and December is 11

// var d = new Date(2018, 0, 24, 20, 33, 30, 0)
// var d1 = new Date(28, 0, 24)
// console.log(d.toLocaleString());
// console.log(d1.toLocaleString());



// new Date(dateString)

// var d = new Date("October 13, 2014 11:12:00")
// console.log(d.toLocaleString());



// new Date(milliseconds)
// var d = new Date(0)
// var d = new Date(1700000000000)
// var d = new Date(86400000*2)
// console.log(d.toLocaleString());
