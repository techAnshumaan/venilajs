//------------parameter
function table(num) {
    for (i = 1; i <= 10; i++) {
        document.write(`${num} * ${i} = ${num * i}`);
        document.write('<br/>');
    }
}
//----arg
table(12);

document.write('<br/>');
document.write('<br/>');
document.write('<br/>');

function add(num1, num2) {
    document.write(`${num1} + ${num2} = ${num1 + num2}`);
}
add(110, 20);

document.write('<br/>');
document.write('<br/>');
document.write('<br/>');

//- argument object
function mul() {
    document.write(` num of args passed ${arguments.length}`);
    // @arguments is an local array object
    console.log(arguments);

    document.write('<br/>');
}

mul(10, 2030, 30);
mul(11, 2, 2, 333);

function argAdd() {
    if (arguments.length == 0) {
        document.write(`Pls pass args to add`);
    } else {
        let sum = 0;
        for (i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        document.write('<br/>');
        document.write(`sum of arg is ${sum}`);
    }
}

argAdd();
argAdd(10, 220, 332, 13);
