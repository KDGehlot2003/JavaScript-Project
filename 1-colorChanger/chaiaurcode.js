const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

button.forEach(function (button) {
  button.addEventListener('click', function (ele) {
    body.style.backgroundColor = ele.target.id;
  });
});

console.log("Hello");
