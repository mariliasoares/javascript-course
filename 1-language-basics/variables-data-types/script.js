// ************ BEST PRACTICES *************
// camelcase notation = we start with a small letter in the beginning and then when we have a second word then that one starts with a capital letter
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

/************* PRIMITIVE JAVASCRIPT DATA TYPES *************
  number = always floating point numbers, tanto decimal quando inteiro
  string, boolean
  undefined = automatically assigned to a variable/non-existing
  null = non-exist
*/
var job;
console.log(job); // undefined: we didnt assign any value to it

job = 'Teacher';
console.log(job); // now its fine

/************* RULES *************
  1. variables cannot start with numbers or symbols, EXCEPT for the dollar sign or an underscore
  2. we cannot use reserved Javascript keywords as variables names.
*/
// var 3years = 3; - Invalid or unexpected token
var years = 3;
// var function = 23; - wrong
var tion = 23;

/************ TYPE COERCION *************
  Javascript has dynamic typing: data types are automatically assigned to variables
  |__> automatically figures out if a variable is a string or a number.
*/
console.log(firstName + ' ' + lastName);

var job, isMarried;
job = 'Google';
isMarried = false;

console.log(firstName + ' is a ' + age + ' years old. Works at ' + job + '. Is he married? ' + isMarried);

//************ VARIABLE MUTATION ************
age = 'twenty eight';
alert(age);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
