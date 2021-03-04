//introduced in es6

const arr1 = (age) => age; //implicit return
console.log(arr1(10));

const arr2 = (age) => console.log(age);
arr2(20);

//explicit return incase of multiple statement
const arr3 = (age) => {
    console.log(age);
    return `Birth year is ${2020 - age}`;
};

console.log(arr3(25));

const arr4 = () => {}; //complete arrow function
arr4();

const arr5 = () => {};
console.log(arr5);
