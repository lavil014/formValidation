const form = document.getElementById('my-form');
const btn = document.getElementById('submit-btn');
let labels = document.querySelectorAll('label');
const inputs = document.querySelectorAll('input');
let defaultLabelTexts = Array.from(labels).map(label => label.innerText);


/* Object to validtion rules in inputs */
const validationRules = {
    'firstNme' :{
      pattern: /^[A-Za-z]+$/,
      successMessage : 'Valid name, move to the next input.',
      failureMessage: 'Enter a valid name',
    },
    'lstnme': {
      pattern: /^[A-Za-z]+$/,
      successMessage : 'Valid name, move to the next input.',
      failureMessage: 'Enter a valid name',
    },
    'userName':{
      pattern: /^[A-Za-z]+$/,
      successMessage : 'Valid user name.',
      failureMessage: 'Username must be between 8 and 16 characters',
    },
    'emil':{
      pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      successMessage : 'Valid email address.',
      failureMessage: 'Enter a valid email address',
    },
    'pssword':{
      pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      successMessage : 'Valid email address.',
      emptyPsswordMessge: 'Password cannot be empty',
      failureMessage: '8 characters long,uppercase, lowercase,a number, and a special character',
    }

}


/* Function to Update UI */

const updateUI = (index, message, isValid)=>{
  labels[index].innerText = message;
  labels[index].style.color = isValid ?'#28a745' : '#dc3545';

  inputs[index].classList.toggle('success', isValid);
  inputs[index].classList.toggle('fail', !isValid);
}

/* Function to validate inputs*/

const validateInputs = (fieldName,index)=>{
  const value = inputs[index].value.trim();
  const rule = validationRules[fieldName];

  const isValid = rule.pattern ? rule.pattern.test(value) : rule.validate(value);

  if(!isValid){
    updateUI(index,rule.failureMessage,false);
  }else{
    updateUI(index,rule.successMessage, true);
  }

}

/*Event listeners*/
inputs[0].addEventListener('input', ()=>validateInputs('firstNme', 0))
inputs[1].addEventListener('input', ()=>validateInputs('lstNme',1))
inputs[2].addEventListener('input', ()=>validateInputs('userName',2))
inputs[3].addEventListener('input', ()=>validateInputs('emil',3))
inputs[4].addEventListener('input', ()=>validateInputs('pssword',4))

/*Function to validate form information is correct*/

form.addEventListener('submit',(e)=>{
  let validForm = Array.from(inputs).every(input => input.classList.contains('success'));

  if(!validForm){
    e.preventDefault();
    btn.innerText = 'Information is invalid';
    btn.style.backgroundColor = '#dc3545'; 
  } 
})
