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
