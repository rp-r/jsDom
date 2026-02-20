'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
 e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};


btnsOpenModal.forEach(btn=>btn.addEventListener('click',openModal))

/*
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);
*/
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  //e.preventDefault();
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


//*197 How DOM realy works
//  JS---DOM--BROWSER
//DOMTREE structure works... DOM is complex API !
//IN DOM different types of Node 
//NODE ...textContent - childeNodes parentNode
//NODE ELEMENET TEXT COMMENT DOCUEMNE

//innerHTML //classList append()



//*198** How to  create select and delete elements in js

//console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

document.querySelector('.header');
 const allSection=document.querySelectorAll('.section');

 //console.log(allSection);


 document.getElementById('section--1');
  const allButtons=document.getElementsByTagName('button');
//ALL BUTTON ON THE PAGE
  //console.log(allButtons);

  //html collection 
 console.log( document.getElementsByClassName('btn'));


 //CREATING AND INSERTING ELEMENT

//USE TO CREATE ELEMENTS  insertAdjacentHTML

//NOT WHERE IN DOM 
const message=document.createElement('div');

message.classList.add('cookie-message');
message.textContent=' we use cokkie ';
message.innerHTML='we use cokkie <button class="btn btn--close-cookie">Got it !</button>'


 const header=document.querySelector('header');
//FIRST CHILD OF HEADER ELEMENT 
// header.prepend(message);

 //last CHILD
header.append(message);
//header.append(message.cloneNode(true));
//WE USD PREPEND AND APPEND AT SAME TIME 
//header.after(message)

//DELETE ELEMNTS


document.querySelector('.btn--close-cookie')
.addEventListener('click',function()
{
  message.remove();
});


//BACK WE SELECT PARENT AND THEN REMOVW CHILDE
//message.parentElement.removeChild(message)
//DM TRAVERING  PARENT AND CHILD IN DOM 

//style 

message.style.backgroundColor='#37383d';
//INLINE STYLE we get 
message.style.width='120%';

console.log(message.style.backgroundColor);
//STYLE GETCOMOUTED STYPLE 
console.log(getComputedStyle(message).height);
console.log(getComputedStyle(message).color);

message.style.height=Number.parseFloat(getComputedStyle(message).height,10)+80+'px'


//COLOR ARE VARIABLES
//CHANGE COLOR
//setProperty()
document.documentElement.style.setProperty('--color-primary','orangered');


//ATTRIBUTES
const logo=document.querySelector('.nav__logo');
console.log(logo);
console.log(logo.alt);
//IF WE ADD PROPERTIES MANULAY IT WILL NOT BE APPEAR IN LOGO
console.log(logo.src);
console.log(logo.className);

console.log(logo.getAttribute('designer'));


logo.setAttribute('company','banllist');
