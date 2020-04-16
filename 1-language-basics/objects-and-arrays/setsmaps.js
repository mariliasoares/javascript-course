const ids = new Set(['hi', 'from', 'set']);
ids.add(2);
//In a set a value is guaranteed to be unique
console.log(ids);

//go through all elements
for (const entry of ids.entries()) { //returns the same value twice
  //console.log(entry);
  console.log(entry[0]);
}