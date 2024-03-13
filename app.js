const formControl = document.getElementById('formControl');
const inputElement=document.getElementById('inputElement');
const errorMessage=document.getElementById('error-message');


function validateEmail (email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}

function checkEmailInput(inputValue) {
  
    if(inputValue==='') {
    inputElement.classList.add("email-error");
    errorMessage.innerHTML="Whoops! It looks like you forgot to add your email";
    errorMessage.classList.add('error-message');
  } else if (!validateEmail(inputValue)) {
    inputElement.classList.add("email-error");
    inputElement.value="example@email.com";
    errorMessage.textContent="Please provide a valid email address";
    errorMessage.classList.add('error-message')
  } else if(inputValue!==''&&validateEmail(inputValue)) {
    inputElement.classList.add("succes-email");
    errorMessage.textContent='You sucessfully submitted!';
    errorMessage.classList.add('succes-message');
    inputElement.value="";
  } else {
    inputElement.classList.remove('email-error');
    errorMessage.textContent="";
  }
}

formControl.addEventListener('submit', (e) => {
  e.preventDefault();
  checkEmailInput(inputElement.value);
});













