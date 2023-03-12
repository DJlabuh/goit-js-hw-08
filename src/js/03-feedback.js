import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

function loadFormState() {
  const formStateJSON = localStorage.getItem('feedback-form-state');
  if (formStateJSON) {
    const formState = JSON.parse(formStateJSON);
    emailInput.value = formState.email;
    messageInput.value = formState.message;
  }
}

form.addEventListener(
  'input',
  throttle(function () {
    const formState = { email: emailInput.value, message: messageInput.value };
    localStorage.setItem('feedback-form-state', JSON.stringify(formState));
  }, 500)
);

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const formState = { email: emailInput.value, message: messageInput.value };
  console.log(formState);
  emailInput.value = '';
  messageInput.value = '';
  localStorage.removeItem('feedback-form-state');
});

loadFormState();
