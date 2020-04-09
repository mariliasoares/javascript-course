console.dir(document.getElementById('main-title'));
//what's in this object
//this is the object which the browser automatically creates and exposes
//to us in JS, for all HTML elements


//by class name, by tag, a collection, return the first
document.querySelector('.list-item');

//all of them works
const listByClassName = document.getElementsByClassName('list-item')
const listByQueryAll = document.querySelectorAll('li');
const listByTagName = document.getElementsByTagName('li');

for (const listItemEl of listByTagName) {
  console.dir(listItemEl);
}

const h1 = document.getElementById('main-title');

h1.textContent = 'Some new title!';
h1.style.color = 'white';
h1.style.backgroundColor = 'black';

const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + ' (changed)';
