// UTILITY
function printValue(value){
    console.info(value)
}

// 1.0 DEFINE VARIABLES
//TODO: ADD fixed variable

const name = 'Ignatius and Collins';

//TODO: ADD redeclarable variable

var food = 'Rice & Beans'

//TODO: ADD re-assignable but not redeclarable variable

let breakfast = 'water';

// 2.0 DIFFERENT DATA TYPES
//TODO: Create a fixed variable with a number value

const number = 4;

//TODO: Create a redeclarable variable with a boolean value

var defeat = true;

//TODO: Create a re-assignable variable with a string value

let greatestTeam = 'Chelsea';


// 3.0 STRING OPERATIONS
//TODO: Concatenate string (+)

const greeting = ('hello' + 'World');

//TODO: Interpolate string (`${}`)

let firstName = "Ignatius";

console.log(`hello ${firstName}`);

//TODO: Convert to uppercase

let tm = 'caesar';

console.log(tm.toUpperCase());

//TODO: Convert to lowercase

let TM= 'RHONA'
 console.log(TM.toLowerCase());

//TODO: Index a specific character

let school ="Moringa";

console.log(school.indexOf('n'))


//TODO: PRACTICE ON YOUR OWN (Check mozilla documentation)


// 4.0 COMPARISON
//TODO: strict equality

let num1 = 5;

let num2 = 7;

console.log(num1 === num2);


//TODO: strict inequality

console.log(num1 !== num2);

//TODO: equality

console.log(num1 == num2);

//TODO: inequality

console.log(num1 !== num2);

//TODO: greater than

let num3 = 79;

let num4 = 89;

console.log(num3 > num4);

//TODO: less than

console.log(num3 < num4);

//TODO: greater or equal to

console.log(num3 >= num4);

//TODO: less or equal to

console.log(num3 <= num4);

// 5.0 CONTROL FLOW
// TODO: if-else statement

let age = 25;

if (age <= 18) {
    console.log('mpoa goes to Kamiti');
} else if (age >= 56) {
    console.log('Wacha wamama');
} else { 
    console.log ('happy ever after');
}

//TODO: switch-case

switch (true) {
    case (age <= 18):
        console.log('mpoa goes to Kamiti');
        break;
    case (age >= 56):
        console.log('Wacha wamama');
        break;
    default: 
        console.log('happy ever after');
}






