function frontEnd(name) {
    if (name === 'sp') return true;
}

function fullStackBackend(name) {
    let legit = frontEnd(name);
    if (legit) {
        console.log(`${name} is a fullStackBackEndDeveloper `);
    } else {
        console.log(`${name} need to work hard`);
    }
}

fullStackBackend('sp');

function test() {
    console.log('Hi');
}
console.log(test()); //undefined
