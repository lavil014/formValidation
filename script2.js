const form = document.getElementById('my-form');
const btn = document.getElementById('submit-btn');
let labels = document.querySelectorAll('label');
const inputs = document.querySelectorAll('input');
let defaultLabelTexts = Array.from(labels).map(label => label.innerText);




const validateName = ()=>{

  let name = document.getElementById('first-name').value.trim();
  let namePattern = /^[A-Za-z]+$/;
  

  if(name === '' || !namePattern.test(name)){
    labels[0].innerText = 'Enter a valid name';
    labels[0].style.color = '#dc3545';
    inputs[0].classList.remove('success');
    inputs[0].classList.add('fail');
    } 
    else{
      
      labels[0].innerText = 'Valid name, move to the next input.';
      labels[0].style.color = '#28a745';
      inputs[0].classList.add('success');

      /*
      
      setTimeout(()=>{
        labels[0].innerText = defaultLabelTexts[0];
        labels[0].style.color = '';
        inputs[0].classList.remove('success');
        inputs[0].classList.remove('fail');
      }, 5000);

      */
    }
}; 

const validateLastName = ()=>{

  let lastName = inputs[1].value.trim();
  let lastNamePattern = /^[A-Za-z]+$/;

  if(lastName === '' || !lastNamePattern.test(lastName)){
    labels[1].innerText = 'Enter a valid name';
    labels[1].style.color = '#dc3545';
    inputs[1].classList.remove('success');
    inputs[1].classList.add('fail');
    } 
    else{
      labels[1].innerText = 'Valid name, move to the next input.';
      labels[1].style.color = '#28a745';
      inputs[1].classList.add('success');

      /*
      setTimeout(()=>{
        labels[1].innerText = defaultLabelTexts[1];
        labels[1].style.color = '';
        inputs[1].classList.remove('success');
        inputs[1].classList.remove('fail');
      }, 5000);*/
    }
  }

const validateUserName = ()=>{
  let userName = inputs[2].value.trim();

  if( userName === ''){
    labels[2].innerText = 'Username cannot be empty';
    labels[2].style.color= '#dc3545';
    inputs[2].classList.remove('success');
    inputs[2].classList.add('fail');

  } else if(userName.length <8 || userName.length >16){
    labels[2].innerText = 'Username must be between 8 and 16 characters';
    labels[2].style.color = '#dc3545';
    inputs[2].classList.remove('success');
    inputs[2].classList.add('fail');
  } else{
    inputs[2].classList.remove('fail');
    labels[2].innerText = 'Valid user name';
    labels[2].style.color = '#28a745';
    inputs[2].classList.add('success');

    /*
    setTimeout(()=>{
      labels[2].innerText = defaultLabelTexts[2];
      labels[2].style.color = '';
      inputs[2].classList.remove('success');
    }, 5000);*/
  }


}

const validateEmail = ()=>{

  let email = inputs[3].value.trim();
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  

  if( email === '' || !emailPattern.test(email)){
    labels[3].innerText = 'Enter a valid email address';
    labels[3].style.color = '#dc3545';
    inputs[3].classList.remove('success');
    inputs[3].classList.add('fail');
  }else{
    inputs[3].classList.remove('fail');
    labels[3].innerText = 'Valid email address';
    labels[3].style.color = 'green';
    inputs[3].classList.add('success');

    /*
    setTimeout(()=>{
      labels[3].innerText = defaultLabelTexts[3];
      labels[3].style.color = '';
      inputs[3].classList.remove('success');
    }, 5000);*/
  }
}

const validatePassword = () => {
  let password = inputs[4].value.trim();
  let passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (password === '') {
    labels[4].classList.remove('valid-password');
    labels[4].innerText = 'Password cannot be empty';
    labels[4].style.color = '#dc3545';
    inputs[4].classList.remove('success');
    inputs[4].classList.add('fail');
  } else if (!passwordPattern.test(password)) {
    labels[4].innerText = '8 characters long,uppercase, lowercase,a number, and a special character';
    labels[4].classList.add('valid-password')
    labels[4].style.color = '#dc3545';
    inputs[4].classList.remove('success');
    inputs[4].classList.add('fail');
  } else {
    labels[4].classList.remove('valid-password');
    labels[4].innerText = 'Valid password';
    labels[4].style.color = '#28a745';
    inputs[4].classList.remove('fail');
    inputs[4].classList.add('success');

    /*    
    setTimeout(()=>{
      labels[4].innerText = defaultLabelTexts[4];
      labels[4].style.color = '';
      inputs[4].classList.remove('success');
    }, 5000);*/
  }
};


inputs[0].addEventListener('input', validateName)
inputs[1].addEventListener('input', validateLastName);
inputs[2].addEventListener('input', validateUserName);
inputs[3].addEventListener('input', validateEmail);
inputs[4].addEventListener('input', validatePassword);

form.addEventListener('submit',(e)=>{
  let validForm = Array.from(inputs).every(input => input.classList.contains('success'));

  if(!validForm){
    e.preventDefault();
    btn.innerText = 'Information is invalid';
    btn.style.backgroundColor = '#dc3545'; 
  } 
})







