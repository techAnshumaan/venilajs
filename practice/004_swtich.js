/* 
work scheduled
*/

const day = 'Saturday';
/* Logic of work scheduled  */
switch (
    day // day === 'monday'
) {
    case 'monday':
        console.log('Js basic Theory ');
        console.log('Practice Spring DI ');
        break;
    case 'tuesday':
        console.log('Js basic practice');
        console.log('J2ee filters');
        break;
    case 'wednesday':
    case 'Thursday':
        console.log('Js basic Project ');
        break;
    case 'Friday':
        console.log('Programming Ds');
        break;
    case 'Saturday':
        console.log('Algorithms ');
        break;
    case 'Sunday':
        console.log('Movie');
        break;
    default:
        console.log('Pls pass a valid day ');
}

//! Q) execute the same logic with if-else

const Day = 'Sunday';
if (Day === 'Sunday') {
} else if (Day === 'Tuesday') {
} else if (Day === 'Wednesday' || Day === 'Thursday') {
} else if (Day === 'Saturday') {
} else if (Day === 'Sunday') {
} else {
    console.log(`Pls enter valid Day`);
}


 