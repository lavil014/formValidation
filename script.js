const form = document.getElementById('my-form');
const btn = document.getElementById('submit-btn');
let labels = document.querySelectorAll('label');
const inputs = document.querySelectorAll('input');

const validateName = ()=>{
  let name = document.getElementById('first-name').value.trim();
  let namePattern = /^[A-Za-z]+$/;
  

  if(name === '' || !namePattern.test(name)){
    labels[0].innerText = 'Enter a valid name';
    labels[0].style.color = 'red';
    inputs[0].classList.add('fail');
    } 
    else{
      labels[0].innerText = 'Valid name, move to the next input.';
      labels[0].style.color = 'green';
      inputs[0].classList.add('success');
    }
}

const validateLastName = ()=>{
  let lastName = inputs[1].value.trim();
  let lastNamePattern = /^[A-Za-z]+$/;

  if(lastName === '' || !lastNamePattern.test(lastName)){
    labels[1].innerText = 'Enter a valid name';
    labels[1].style.color = 'red';
    inputs[1].classList.add('fail');
    } 
    else{
      labels[1].innerText = 'Valid name, move to the next input.';
      labels[1].style.color = 'green';
      inputs[1].classList.add('success');
    }
  }
 
inputs[0].addEventListener('input', validateName)
inputs[1].addEventListener('input', validateLastName);


/*

class DOMElements {
    constructor(name, lastName, userName,eMail,passWord, btn, ){
      this._name = document.getElementById(name);
      this._lastName = document.getElementById(lastName);
      this._userName = document.getElementById(userName);
      this._eMail = document.getElementById(eMail);
      this._passWord = document.getElementById(passWord);
      this._btn = document.getElementById(btn);
    }

    validateName (event){
      event.preventDefault();

      let name = this._name.value;
      this._btn.addEventListener('click',()=>{
        console.log("Event listener is working");
      })
      
    }
}

const singUpElements = new DOMElements ('first-name','last-name','username','e-mail','password','submit-btn');*/


/*
form.addEventListener('submit', (event)=>{

  event.preventDefault();

  let name = document.getElementById('first-name').value.trim();
  let lastName = document.getElementById('last-name').value.trim();
  let namePattern = /^[A-Za-z]+$/;


   if(namePattern === ''){
    console.log('Do not input blanks , name has to be a valid name')
    }
     else if (!namePattern.test(name)){
      console.log('Enter a valid name')
    } 
    else{
      console.log('Your name is valid , thank you!')
    }
})*/





