const form = document.getElementById('my-form');
const btn = document.getElementById('submit-btn');
let labels = document.querySelectorAll('label');
const inputs = document.querySelectorAll('input');
let defaultLabelTexts = Array.from(labels).map(label => label.innerText);

const validationRules = {
    'firstNme' :{
      patern: /^[A-Za-z]+$/,
      successMessage : 'Valid name, move to the next input.',
      failureMessage: 'Enter a valid name',
    },
    'lstnme': {
      patern: /^[A-Za-z]+$/,
      successMessage : 'Valid name, move to the next input.',
      failureMessage: 'Enter a valid name',
    },
    'UserName':{
      patern: /^[A-Za-z]+$/,
      successMessage : 'Valid user name.',
      failureMessage: 'Username must be between 8 and 16 characters',
    },
    'emil':{
      patern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      successMessage : 'Valid email address.',
      failureMessage: 'Enter a valid email address',
    },
    'pssword':{
      patern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      successMessage : 'Valid email address.',
      emptyPsswordMessge: 'Password cannot be empty',
      failureMessage: '8 characters long,uppercase, lowercase,a number, and a special character',
    }

}


/* Update UI */

const updateUI = (index, message, isValid)=>{
  labels[index].innerText = message;
  labels[index].style.color = isValid ?'#28a745' : '#dc3545';

  inputs[index].classList.toggle('success', isValid);
  inputs[index].classList.toggle('fail', !isValid);
}

/*Validate forms*/

const validateInputs = (index,value, message)=>{
  
}

/*Event listeners*/