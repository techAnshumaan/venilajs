//function declaration -> hoisted
function f1() {
    console.log(`Just invoked a Function`);
}

f1(); //function call

//function Expression -> not hoisted
const funcExpression = function () {
    console.log(`Function Expression`);
};
funcExpression();
