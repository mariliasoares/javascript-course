/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/
/*
var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);
*/

// var BMI = mass / (height * height);
var massMark = prompt("Quanto Mark pesa? (kg)");
var heightMark = prompt("E quanto de altura? (m)");
var massJohn = prompt("Quanto John pesa? (kg)");
var heightJohn = prompt("E quanto de altura? (m)");

var johnBMI = massJohn / (heightJohn * heightJohn); 
var markBMI = massMark / (heightMark * heightMark);
console.log(markBMI, johnBMI);
var itsHigher = markBMI > johnBMI;
console.log('Its Mark\'s BMI higher than John\'s? ' + itsHigher);
        // the single quotation mark on the name makes it be outside of the string
        // to scape this quotation mark we do that by adding this back-slash. Thats called escaping.