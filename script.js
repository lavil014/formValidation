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



form.addEventListener('submit', (event)=>{

  event.preventDefault();

  let name = document.getElementById('first-name').value;
  console.log(name);

  if (name === '' ){
    console.log('Please add a valid name');
  } else {
    console.log('This is a valid name');
  }




})





