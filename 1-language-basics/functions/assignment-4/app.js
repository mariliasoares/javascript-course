//rewrite as arrow functions
const SayHelloBtn = document.getElementById("button");
const SayHelloMsgBtn = document.getElementById("button-msg");
const SayHiBtn = document.getElementById("button-hi");
const FastestBtn = document.getElementById("button-fastest");

let DEFAULT_NAME = 'User';
let MESSAGE;

const sayHello = name => console.log('Hi ' + name);

const getName = () => {
  let name = prompt("Whats your name?", "");
  if(name === "") {
    alert("Invalid name!");
    return name = DEFAULT_NAME;
  } 
  return name;
};

SayHelloBtn.addEventListener('click', () => {
  const name = getName();
  sayHello(name);
});


//replace 'hi' by getting a second argument and default message
const sayHelloWithMsg = (name, msg = 'hi from your argument friend!') => {
  console.log(`${msg} by ${name}`);
};

const message = () => {
  let msg = prompt("Type your message here", "");
  if(msg === "") {
    alert("Ops, there is nothing in it, we chose the default Hi message for you!");
    return MESSAGE = 'Hi';
  }
  return msg;
};

SayHelloMsgBtn.addEventListener('click', function() {
  const msg = message();
  const name = getName();
  sayHelloWithMsg(name, msg);
  sayHelloWithMsg(name);
});


//hard-coded values in function body 
const sayHi = () => {
  console.log("Hi there!");
};

SayHiBtn.addEventListener('click', sayHi);

//with one returned value
FastestBtn.addEventListener('click', () => {
  console.log("Fastest woman alive");
});


// a funtion that takes an unlimited amount of arguments/strings
const checkInput = (callback, ...strings) => {
  let checkEmptyString = false;
  for (const string of strings) {
    if(!string) {
      checkEmptyString = true;
      break;
    }
  }
  if(!checkEmptyString) {
    callback();
  }
};

const callbck = (message) => {
  console.log(message);
};

checkInput(callbck.bind(this, "There is no empty string here!"), 10, 20, 30, 50);
