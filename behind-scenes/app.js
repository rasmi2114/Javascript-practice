let name = 'Max';

if(name === 'Max'){
    let hobbies = ['sports', 'cooking'];
    console.log(hobbies);
}

function greet() {
  let age = 30;
  let name = 'Manuel';
  console.log(name, age);
}

console.log(name, hobbies);

greet();
'use strict';

const name = 'Max';
alert(name);
var undefined = 5;

// console.log(userName);
const addListenerBtn = document.getElementById('add-listener-btn');
const clickableBtn = document.getElementById('clickable-btn');
const messageInput = document.getElementById('click-message-input');

function printMessage() {
  const value = messageInput.value;
  console.log(value || 'Clicked me!');
}

function addListener() {
  clickableBtn.addEventListener('click', printMessage);
}

addListenerBtn.addEventListener('click', addListener);

