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

/************************** Objects **************/
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

