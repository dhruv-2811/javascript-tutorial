// const myBioData = ['Dhruv', 'Patel', 22];

// let myFName = myBioData[0];
// let myLName = myBioData[1];
// let myAge = myBioData[2];

// console.log(myFName);

// let [myFName, myLName, myAge] = myBioData
// console.log(myFName);

// let [myFName, myLName, myAge, MyDegree="BE"] = myBioData
// console.log(MyDegree);


const myBioData = {
    myFname : 'Dhruv',
    myLname : 'Patel',
    age : 22    
}

// let age = myBioData.age
// let myFName = myBioData.myFname
// console.log(age);

let {myFName, myLName, age, MyDegree="BE"} = myBioData
console.log(age);
