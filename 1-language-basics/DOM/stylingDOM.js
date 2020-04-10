// const ulDOM = document.body.firstElementChild.nextElementSibling;
// const firstLis = ulDOM.firstElementChild;
// console.log(firstLis);

const section = document.querySelector('section');
//added the style attribute and reflected the change back into HTML
// section.className = '';
// section.style.backgroundColor = 'gray';

const button = document.querySelector('button');

button.addEventListener('click', () => {
  // if(section.className === 'red-bg visible') {
  //   section.className = 'red-bg invisible';
  // } else {
  //   section.className = 'red-bg visible';
  // }

  section.classList.toggle('visible');
  section.classList.toggle('invisible');
});

