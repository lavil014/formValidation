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
    inputs[0].classList.remove('success');
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
    inputs[1].classList.remove('success');
    inputs[1].classList.add('fail');
    } 
    else{
      labels[1].innerText = 'Valid name, move to the next input.';
      labels[1].style.color = 'green';
      inputs[1].classList.add('success');
    }
  }

const validateUserName = ()=>{
  let userName = inputs[2].value.trim();

  if( userName === ''){
    labels[2].innerText = 'Username cannot be empty';
    labels[2].style.color= 'red';
    inputs[2].classList.remove('success');
    inputs[2].classList.add('fail');

  } else if(userName.length <8 || userName.length >16){
    labels[2].innerText = 'Username must be between 8 and 16 characters';
    labels[2].style.color = 'red';
    inputs[2].classList.remove('success');
    inputs[2].classList.add('fail');
  } else{
    labels[2].innerText = 'Valid user name';
    labels[2].style.color = 'green';
    inputs[2].classList.add('success');
  }


}

const validateEmail = ()=>{

  let email = inputs[3].value.trim();
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  

  if( email === '' || !emailPattern.test(email)){
    labels[3].innerText = 'Enter a valid email address';
    labels[3].style.color = 'red';
    inputs[3].classList.remove('success');
    inputs[3].classList.add('fail');
  }else{
    labels[3].innerText = 'Valid email address';
    labels[3].style.color = 'green';
    inputs[3].classList.add('success');
  }
}


inputs[0].addEventListener('input', validateName)
inputs[1].addEventListener('input', validateLastName);
inputs[2].addEventListener('input', validateUserName);
inputs[3].addEventListener('input', validateEmail);


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





