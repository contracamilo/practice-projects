//variables

const email = document.getElementById ('email');
const subject = document.getElementById ('subject');
const message = document.getElementById ('message');
const submit = document.getElementById ('submit');
const reset = document.getElementById ('resetBtn');
const form = document.getElementById ('send-mail');

const eventListeners = () => {
  document.addEventListener ('DOMContentLoaded', appStart);

  //field validation
  email.addEventListener ('input', validateField);
  subject.addEventListener ('input', validateField);
  message.addEventListener ('input', validateField);
  submit.addEventListener ('click', sendEmail);
  reset.addEventListener ('click', resetForm);
  form.addEventListener ('blur', validateField);
};

const appStart = () => {
  submit.disabled = true;
};

function validateField () {
  const mailValue = email.value;
  const emailRE = /\S+@\S+\.\S+/;
  let validMail = emailRE.test (mailValue);
  let errors = document.querySelectorAll ('.error');

  validateLength (this);
  console.log (errors.length);
  if (
    email.value !== '' &&
    subject.value !== '' &&
    message.value !== '' &&
    validMail
  ) {
    if (errors.length === 0) {
      submit.disabled = false;
    }
  }
}

const validateLength = field => {
  let borderStyle = field.style.borderBottomColor;

  if (field.value.length > 0) {
    borderStyle = 'green';
    field.classList.remove ('error');
  } else {
    borderStyle = 'red';
    field.classList.add ('error');
  }
};

const sendEmail = e => {
  e.preventDefault ();
  const spinner = document.querySelector ('#spinner');
  spinner.style.display = 'block';

 

  setTimeout(() => {
	spinner.style.display = 'none';

	const sent = document.createElement('img');
	const loaders = document.querySelector('#loaders');
	
	sent.src = '../img/mail.gif';
	sent.style.display = 'block';
	loaders.appendChild(sent);

	setTimeout(() => {sent.remove()}, 3500);

  }, 700);

  let datatoSent = {
	email: email.value,
    subject: subject.value,
    message: message.value
  }
  console.log(datatoSent);
  return datatoSent;
};


const resetForm = (e) => {
	e.preventDefault();
	form.reset();
}



//calls
eventListeners ();
