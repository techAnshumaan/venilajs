//~ for loop
for (let x = 1; x <= 10; x++) {
    console.log(`I m trying to give time to JS as ${x}`);
}

//~looping array
let arrObject = [
    'index',
    'starts0',
    'lengthProperty',
    ['js', 'java', 'python'],
];

let types = [];
for (let index = 0; index < arrObject.length; index++) {
    console.log(
        arrObject[index],
        `type of ${arrObject[index]} is `,
        typeof arrObject[index]
    );

    types[index] = typeof arrObject[index];
}
console.log(arrObject);
console.log(types);

//~continue
const arr = [10, 20, 30, 40, 50, 'sp'];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 'sp') continue;

    console.log(arr[i]);
}

//~break
const arr2 = [10, 20, 30, 'sp', 40, 50];
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === 'sp') break;
    console.log(arr2[i]);
}

//~loop array backward
console.log(`\nLooping array backward\n`);
let array2 = ['sp', 'MCA', 'FullStackDevelopment', 'FreeLancer'];
for (let ind = array2.length - 1; ind >= 0; ind--) {
    console.log(`index ` + ind, `Pos ` + (ind + 1), array2[ind]);
}

//~ Nested loop
console.log(`\nNested Loop \n`);
let arrNest = [1, [10, 20, 30, 40], [99, 888, 333], [1231, 4], 'Sp'];
for (let i = 0; i < arrNest.length; i++) {
    console.log(arrNest[i]);
    console.log(typeof arrNest[i]);
    for (let j = 0; j < arrNest[i].length; j++) {
        if (typeof arrNest[i] === Object) console.log(arrNest[i][j]);
    }
}


