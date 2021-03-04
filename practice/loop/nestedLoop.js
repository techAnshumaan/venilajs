let nestArr = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90],
    [100, 110, 120],
    [130, 140, 150],
];

let nestArr2 = [
    [10, 20, 30],
    [40, 50],
    [60, 70, 80, 90, 100],
    [110],
    [120, 130, 140, 150],
];

//~ loop outer array
for (let i = 0; i < nestArr2.length; i++) {
    console.log(`outer array index is ${i} value ${nestArr2[i]}`);
    //@loop inner array
    for (let j = 0; j < nestArr2[i].length; j++) {
        console.log(`inner array index is ${j} value ${nestArr2[i][j]}`);
    }
}
