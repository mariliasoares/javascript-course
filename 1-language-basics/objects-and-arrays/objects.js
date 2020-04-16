//keys be automatically converted/coerced to strings in JS

const userNick = 'mariliaxd';

let person = {
  'first name': 'Mah',
  age: 22,
  hobbies: ['Games', 'Sleep'],
  [userNick]: '...', //will search for a variable of that name and take the value stored in that variable as a key name
  greet: function () {
    alert('Hello!');
  },

};

// just add
person.isAdmin = true;

//delete is the better way
delete person.age;

console.log(person['mariliaxd']);

// * * * SQUARE BRACKETS notation: get access to the elements
// 1. use to dynamically access properties
// 2. also to dynamically set them
console.log(person['first name']);

