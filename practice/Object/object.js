//done -> declaring Object
const objPerson = {
    pnm: 'SP',
    page: 25,
    qualification: 'MCA',
    skills: [
        'Java',
        'Js',
        'OOP',
        'DesignPattern',
        'J2EE Framework',
        'ORM Framework',
        'Linux',
        'Mongodb',
    ],
};
console.log(objPerson);

//done -> accessing object
///-   . notation
console.log(objPerson.pnm);
console.log(objPerson['pnm']);

let nm = 'pnm';
console.log(objPerson[nm]);

// const interestedIn = prompt(
//     `What i wanna know  pnm page qualification skills choose 1 `
// );
// console.log(interestedIn);
// console.log(objPerson[interestedIn]);

//done -> add new properties to the object
objPerson.github = 'tech.legit';
objPerson[`linkedIn`] = 'Sp stack';
console.log(objPerson);

const assignment = {
    teacher: 'jones',
    loc: 'portugal',
    friends: ['ab', 'Jr Ab', 'Aish'],
    bff: 'ab',
};

console.log(
    `${assignment.teacher} has ${assignment.friends.length} friends and his best friend is ${assignment.bff}`
);

//*Practice

let obj = {
    nm: 'Sp',
    lastnm: 'maan',
    age: 25,
    qualification: 'MCA',
};

// console.log(obj.nm);
// console.log(obj.qualification);
// console.log(obj.age);

console.log(obj[nm + 'first']);
console.log(obj['last' + 'nm']);

/*
 (Q) we can go for . notation when we are simply just wanna know about the object property but incase we ne to perform some king of operation/add-on kind we should go for [] notation 
 */

//example
let testObj = {
    nm: 'sp',
    age: 25,
    mySkill: ['java', 'javasript'],
    mylang: ['odia', 'Hindi', 'english'],
};

console.log(testObj['nm']);
console.log(testObj[nm]);

let view = 'Skill';
let view2 = 'lang';
console.log(testObj['my' + view]);
console.log(testObj['my' + view2]);

/*
method inside object as a property attribute 
 */

const enhObj = {
    a: 'variable',
    nm: 'SP',
    b: 5,
    flag: true,

    // call: function (name) {
    //     console.log(`
    //     This is object method call ${name}`);
    // },

    /* use of this k.w.  */

    call: function () {
        this.age = 10;
        console.log(this);
        console.log(this.nm);
    },
};

//accessing method from obj
enhObj.call(`sp`);
enhObj['call']('Anshu');
console.log(enhObj.age);

