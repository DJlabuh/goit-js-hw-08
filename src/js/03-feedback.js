import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const FEEDBACK_FORM_STATE = 'feedback-form-state';
let formData = {};

function loadFormState() {
  try {
    const formStateJSON = localStorage.getItem(FEEDBACK_FORM_STATE);
    if (formStateJSON) {
      formData = JSON.parse(formStateJSON);
      Object.keys(formData).forEach(function (fieldName) {
        const field = form.querySelector(`[name="${fieldName}"]`);
        if (field) {
          field.value = formData[fieldName];
        }
      });
    }
  } catch (e) {
    console.error('Error loading form state:', e);
  }
}

form.addEventListener(
  'input',
  throttle(function (e) {
    formData[e.target.name] = e.target.value.trim();
    localStorage.setItem(FEEDBACK_FORM_STATE, JSON.stringify(formData));
  }, 500)
);

form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(formData);
  formData = {};
  e.target.reset();
  localStorage.removeItem(FEEDBACK_FORM_STATE);
});

loadFormState();
