//! type conversion  -> converting manually

/*
    Number() -> change to number datatype
    String() -> Change to String datatype
    Boolean() ->  Change to Boolean datatype 
*/

const enteredValue = '1001';
console.log(typeof enteredValue);
// console.log(enteredValue + 100);
console.log(enteredValue);
console.log(Number(enteredValue));

const valueToConvert = 10;
console.log(typeof valueToConvert);
console.log(typeof String(valueToConvert));

console.log(Number('Hi'));

//type coercion -> performed by js automatically when ever came across the operator

let x = '1' + 1; //x = 11
x = x - 1; // 11 -1
x = x + 11; // 10 + 11
x = x * 2; //21 * 2
console.log(x);

//truthy falsy value
// falsy value -> NaN , '' , 0 , undefined , null -> convert to boolean We ll get false

let res = Boolean(NaN);
console.log(res);

res = Boolean(0);
console.log(res);

res = Boolean(undefined);
console.log(res);

res = Boolean(null);
console.log(res);

res = Boolean('');
console.log(res);

res = Boolean({}); //{} -> empty obj
console.log(res);

res = Boolean(-1);
console.log(res);
