const password = document.getElementById('password');
const passCheck = document.getElementById('password-check');
const error = document.querySelector('.error');
const form = document.querySelector('#my-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (password.value !== passCheck.value) {
    error.style.display = 'block';
    return;
  }
  error.style.display = 'none';
  alert('Account created');
});
