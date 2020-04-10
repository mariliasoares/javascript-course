console.dir(document.getElementById('main-title'));
//what's in this object
//this is the object which the browser automatically creates and exposes
//to us in JS, for all HTML elements


//by class name, by tag, a collection, return the first
console.dir(document.querySelector('.list-item'));

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

//this will cost a little bit of performance because query selector has to scan the entire page
//and then scan this quite complex css query
const li = document.querySelector('li:last-of-type');

//better use, if select the last > still be faster
const ul = document.querySelector('ul');
ul.lastElementChild.textContent = ul.lastElementChild.textContent + ' (changed)';
// li.textContent = li.textContent + ' (changed)';

// ** Traversing child nodes **
// to select the second list item we could use DOM tranversal techniques
// 1. to get acess to the parent unordered list element
// 2. then look at its child nodes or child elements
// 3. select the second child

const children2 = ul.children[1]; //using children: give me acess to all child element nodes
console.dir(children2);

//how to reach out to a especific li parent
//cant have more than one parent element or parent node
const liFirst = document.querySelector('li');
//give access to the nearest parents node
console.dir(liFirst.parentNode); // ul

//another ancestor: closest => takes a CSS selector
console.dir(liFirst.closest('body'));

//to reach out header, sibling of the unordered list, its on the same level
const ulParent = li.parentNode;
console.dir(ulParent.previousSibling);
console.dir(ulParent.previousElementSibling);
console.dir(ulParent.nextElementSibling);