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



const form = document.getElementById('my-form');
const btn = document.getElementById('submit-btn');
let labels = document.querySelectorAll('label');
const nameInput = document.getElementById('first-name');

nameInput.addEventListener('input',()=>{
  let name = document.getElementById('first-name').value.trim();
  let namePattern = /^[A-Za-z]+$/;
  

  if(name === '' || !namePattern.test(name)){
    labels[0].innerText = 'Enter a valid name';
    labels[0].style.color = 'red';
    } 
    else{
      labels[0].innerText = 'Valid name, move to the next input.';
      labels[0].style.color = 'green';
    }
})

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





