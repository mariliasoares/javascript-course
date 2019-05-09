/***** ARRAYS *******

var things = ['Holdor', 1912, 'ice cream'];

// it will add an element at the end of the array
things.push('Plus one'); 

// adding to the beginning of the array
things.unshift('The end');

// removes the element from the end
things.pop();

// removes the first element
things.shift();

/* ************ Objects *************  
*/

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
