const sunIcon = document.querySelector('#sun');
const moonIcon = document.querySelector('#moon');
const body = document.querySelector('body');

sunIcon.addEventListener('click', () => {
  sunIcon.classList.add('hidden');
  moonIcon.classList.remove('hidden');
  body.classList.remove('dark');
});

moonIcon.addEventListener('click', () => {
  moonIcon.classList.add('hidden');
  sunIcon.classList.remove('hidden');
  body.classList.add('dark');
});
