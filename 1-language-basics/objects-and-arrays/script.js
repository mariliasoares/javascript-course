/***** ARRAYS ******* */
const numbers = [1, 2, 3];

//array-like object or iterable converting to an array
const moreNumbers = Array.from('Hi!');
console.log(moreNumbers);

var things = ['Holdor', 1912, 'ice cream'];
console.log(things);

// it will add an element at the end of the array
things.push('Plus one'); 
console.log(things);

// adding to the beginning of the array
things.unshift('The end');
console.log(things);

// removes the element from the end
things.pop();
console.log(things);

// removes the first element
things.shift();
console.log(things);

//1 arg: starts in.... 2arg: remove first element,
things.splice(0, 1, 'Good food');

//starts look at last element, from right to left
// (-1, 1)
console.log('splice method ' + things);

//returns a new brand array > copy an array without poiting to the same address
let storedResults = things.slice();
console.log('slice method ' + storedResults);

//works for selecting ranges of an array, part of array
// slice(2) => starting in 2 to all the others
storedResults = things.slice(0, 2);
console.log('slice method ' + storedResults);

//pull out everything in a brand new array, new address
const arrayConcat = storedResults.concat([]);
console.log(arrayConcat);

//how to find some element for primitive values
console.log(arrayConcat.indexOf(1912));


// **** FIND METHOD
// where manuel is? when the array is working with reference values
// find() takes a function as an argument, anonymous or arrow, can accept three args
///1 arg: single object of that array, 2 arg: index of that single element, 3 arg: the full array
const personData = [{name: 'Max'}, {name: 'Manuel'}];

//returns an object
const manuel = personData.find((person, idx, persons) => {
    return person.name === 'Manuel';
});

console.log(manuel);

const prices = [10.99, 5.99, 3.99, 5.49];
const tax = 0.19;


// **** MAP: taking an array, every item, and returning a new element
// const taxAdjustedPrices = [];

// for (const price of prices) {
//     taxAdjustedPrices.push(price * (1 + tax));
// }

// console.log(taxAdjustedPrices);

//we transformed the array into an array of objects
// prices.forEach((price, idx, prices) => {
//     const priceObj = {index: idx, taxAdjPrice: price * (1 + tax) };
//     taxAdjustedPrices.push(priceObj);
// });
const taxAdjustedPrices = prices.map((price, idx, prices) => {
    const priceObj = {index: idx, taxAdjPrice: price * (1 + tax) };
    return priceObj;
});

console.log(prices, taxAdjustedPrices);


// **** SORT : converts everything to a string and then its simply sort this
let sortedPrices = prices.sort();
console.log("sort array " + sortedPrices);

//return wheter A is grater than B, are they equal or if B is greater?
sortedPrices = prices.sort((a, b) => {
    if (a > b) {
        return 1;
    } else if (a === b) {
        return 0;
    } else {
        return -1;
    }
});
console.log("sorted array " + sortedPrices);
console.log("reverse array " + sortedPrices.reverse());


// **** FILTER ELEMENTS IN ARRAY: return a new array
const filteredArray = prices.filter((price, idx, prices) => {
    return price > 6;
});
//or const filteredArray = prices.filter(p => p > 6);
console.log('filter prices ' + filteredArray)


// ***** REDUCE METHOD: reduces an array to a simpler value (sum them up, to any value)
// let sum = 0;
// prices.forEach((price) => {
//     sum += price
// });
//1 arg: initial value(0), 2 arg: the first element on array
const sum = prices.reduce((prevValue, curValue, curIndex, prices) => {
    return prevValue + curValue;
}, 0);
// const sum = prices.reduce((prevValue, curValue) => {
//     return prevValue + curValue;
// }, 0);
console.log("reduce method: " + sum);


// **** STRING METHOD SPLIT TO AN ARRAY
const data = 'new york;10.00;2000';
let transformedString = data.split(';');
console.log(transformedString);
transformedString[1] = +transformedString[1];
console.log(transformedString);


// **** JOIN : join things together
const nameFragments = ['Marilia', 'Soares'];
const name = nameFragments.join(' ');
console.log(name);


// ***** SPREAD OPERATOR 
// when created an object or when created an array and then could use
// the three dots in there to take an existing object or an existing array {...} [...]
// and pull out all the key-value pairs or all the elements and add them to the new object/array

// spread operator for copying  
let arr = ['a','b','c']; 
let arr2 = [...arr]; 
console.log(arr); // [ 'a', 'b', 'c' ] 
arr2.push('d'); //inserting an element at the end of arr2 
console.log(arr2); // [ 'a', 'b', 'c', 'd' ] 

//the copied array is not affected
console.log(arr); // [ 'a', 'b', 'c' ] 

const persons = [{name: 'Max', age: 30}, {name: 'Marilia', age: 22}];
//copied the addresses to the places in memory of these objects
const copiedPersons = [...persons];

//doesnt changed
persons.push({name: 'Anna', age: 29});
//changed
persons[0].age = 31;
console.log(persons, copiedPersons);

//to avoid that change, would have to copy every object by using map method, return a new object for every person
const copiedPersonsMap = [...persons.map(person => ({
        //since I returned something in curly braces, to tell JS this doesnt mark the function body but should be my object
        //I have to wrap this in an extra pair of parentheses
        name: person.name,
        age: person.age
        //I map all objects in the original array into new objects which have new places in memory
    })
)];


//not takes an array, instead it takes a list of values, it takes values and returns the smaller value, list of values
// Math.min(1,2,3);

//and what if I want to work with an array? => spread operator
console.log(Math.min(...prices));


// **** ARRAY DESTRUCTURING SYNTAX
const nameData = ['Marilia', 'Soares', 'Student', 22];

//splitting an array into variables
const [ firstName, lastName, ...otherInformation ] = nameData;
console.log("array destructuring " + firstName, lastName, otherInformation);


/************************** OBJECTS **************/
//CREATE THE OBJECT
//literal notation 
var hotel = {}
hotel.name = 'Perk';
hotel.checkName = function() {
    return this.name;
};

//object constructor notation
var hotel = new Object();
hotel.name = 'Perk';
hotel.checkName = function() {
    return this.name;
};

//CREATING WITH PROPERTIES
//literal notation:with a comma between each pair
var hotel = {
    name: 'Perk',
    rooms: 22,
    checkName: function() {
        return this.name;
    }
};

//object constructor notation: can be used to create multiple objects.
function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function() {
        return this.rooms - this.booked;
    };
}
var quackHotel = new Hotel('Quay', 40, 25);
var perkHotel = new Hotel('Perk', 120, 70);

/****************************************************/

// can put all kinds of different data types
var person = {
    firstName: 'Marilia', // separate with a comma
    lastName: 'Soares',
    birthYear: 1998,
    family: ['Martha', 'Gabriella'],
    job: 'intern',
    calcAge: function() {
        this.age = 2019 - this.birthYear;
    }
};

person.calcAge();
console.log(person);

person.job = 'web developer';
console.log(person.job);
//mutate the data with brackets notation
person['job'] = 'designer';
console.log(person.job);

// initializing array
var boy = new Object();
boy.name = 'Dean';
boy['lastName'] = 'Gilmore';
console.log(boy);

// only objects have methods
// arrays are actually also objects, the only way they can have methods

var mark = {
    fullname: 'Mark Ruffalo',
    mass: 66,
    height: 1.81,
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI; 
    }
};

var john = {
    fullname: 'John Bowie',
    mass: 66,
    height: 1.81,
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI; 
    }
};

var markBMI = mark.calcBMI();
var johnBMI = john.calcBMI();

console.log(markBMI);
console.log(johnBMI);

if (markBMI > johnBMI) {
    console.log(mark.fullname + ' has the highest BMI of ' + markBMI + ' kg.');
} else if (markBMI < johnBMI) {
    console.log(john.fullname + ' has the highest BMI of ' + johnBMI + ' kg.');
} else if (markBMI === johnBMI) {
    console.log('Both John and Mark have the same BMI of ' + johnBMI + ' kg.');
}
