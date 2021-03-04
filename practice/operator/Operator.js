console.log(2 ** 3);

//comparison operator → produce boolean value

let x = 10;
const res = x > 10;
console.log(typeof res);

//equality operator == (loose equality operator) Vs === (Strong equality operator )
let check1 = '18';
let check2 = 18;

console.log(typeof check1);
console.log(typeof check2);

//type coercion -> automatic conversion of Type , when operand came across operator

if (check1 == check2) {
    console.log(`Loosely Equal`);
} else {
    console.log(`Not equal`);
}

// === never performed type coercion
if (check1 === check2) {
    console.log(`Strongly not Equal`);
} else {
    console.log(`Strongly not equal`);
}

// not equal != , !==

let num = '7';
if (num !== 7) {
    console.log(`Why not 7 `);
} else {
    console.log(`Yes Ronaldo num `);
}

//Logical operator
let driverSara = true;
let coderSara = false;

if(coderSara && driverSara ){
    console.log(`All rounder`);
}
else {
    console.log(`Not an all rounder`);
}

if (coderSara || driverSara) {
    console.log(`She is good`);
} else {
    console.log(`Not`);
}

if(!coderSara){
    console.log(`Sara is a good is coder !! lol 🤣`);
}

if(!driverSara){
    console.log("lol");
}else{
    console.log("Sara is a terrible  driver 🙄");
}

