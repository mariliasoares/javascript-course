// ************ If / else statements *************

var firstName = 'Marilia';
var civilStatus = 'single';

// '===' logical operator which returns true or false 
if ( civilStatus === 'married' ) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
} // this text here should be logged to the console

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

/* ********** BASIC BOOLEAN LOGIC: NOT, AND & OR ********** 
    - A branch of computer science that deals with true or false values.
    - AND (&&) => true if ALL are true.
    - OR (||) => true if ONE is true.
    - NOT (!) => inverts true/false value.
*/

// If John is a boy, teenager or younger
var firstName = 'John';
var age = 16;

if (age < 13){
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {         // AND(6) and OR(5) operator have a lower precedence than these comparison operators(11)
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}

/********** TERNARY OPERATOR **********
    - Its called ternary (or conditional operator) because it has three operands.
*/
// after ? we write what we want to comparte, like the if block
//the condition         if block
age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.'); // else block

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

/********** SWITCH STATEMENT **********
    - like a huge if...else statement where we have multiple else if clauses, basically
    - looks a bit cleaner than having all of the if..else blocks 
    - basically simply switches a variable and compares all of the cases to that variable 
*/
var job = 'cop';
switch (job) { 
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Manaus.');
        break;
    case 'programmer':
        console.log(firstName + ' programs beautiful websites.');
        break;
    default: // our last else in an if..else statement.
        console.log(firstName + ' does something else.');
}

age = 45;
// set true is a trick to simply make the switch work as an if...else statement with ranges
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;  
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}