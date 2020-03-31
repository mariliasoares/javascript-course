/*****************************
* BLOCK SCOPE
*/

/* Variables and constants created with let and const
  and const are block scope
*/

var name = 'Mah';

if (name === 'Mah') {
  var hobbies = ['Games', 'Cooking']; //normal global variable 
  console.log(hobbies);
}

if (name === 'Mah') {
  let hobbie = ['Games', 'Cooking']; //normal global variable 
  console.log(hobbie); //works here
}

console.log(hobbies); //can access here
console.log(hobbie); //cannot access here, cant be used outside of the if statement
//so it forces you to write better, cleaner code which is clearer about your intentions
// we dont use var anymore, so why is var still in the language?
//because of the browser support thing
