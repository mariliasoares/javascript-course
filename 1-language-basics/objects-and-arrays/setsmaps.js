const ids = new Set(['hi', 'from', 'set']);
ids.add(2);
//In a set a value is guaranteed to be unique
console.log(ids);

//go through all elements
for (const entry of ids.entries()) { //returns the same value twice
  //console.log(entry);
  console.log(entry[0]);
}

// **** MAPS

const person1 = {name: 'Max'};
const person2 = {name: 'Marilia'};

const personData = new Map([[person1, [{date: 'yesterday', price: 10}]]]);

personData.set(person2, [{date: 'two weeks ago', price: 100}])

console.log(personData);
console.log(personData.get(person1));

for (const entry of personData.entries()) {
  console.log(entry);
}

for (const [key, value] of personData.entries()) {
  console.log(key, value);
}

for (const key of personData.keys()) {
  console.log(key);
}


// ***** WEAK SET

let person = {name: 'Mah'};

//weak set internally works such that it can only store objects so that it can actually
//clear these objects for you, release them to garbage collection
const persons = new WeakSet();
persons.add(persons);

console.log(persons);


// ***** WEAK MAP
// map will hold a variable onto it and not release it for garbage collection
const personData = new WeakMap();
personData.set(person, 'Extra info!');

person = null;

console.log(personData);
