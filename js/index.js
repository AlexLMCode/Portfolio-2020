const cuatroOchenta = matchMedia('screen and (max-width: 480px)');
const menu = document.querySelector('.menu');
const burgerButton = document.querySelector('#burger-menu');

cuatroOchenta.addListener(validation);

function validation(event) {
  if (event.matches) {
    burgerButton.addEventListener('click', () => {
      if (menu.classList.contains('is-active')) {
        menu.classList.remove('is-active');
      } else {
        menu.classList.add('is-active');
      }
    });
  } else {
    burgerButton.removeEventListener('click', () => {
      if (menu.classList.contains('is-active')) {
        menu.classList.remove('is-active');
      } else {
        menu.classList.add('is-active');
      }
    });
  }
  console.log(event);
}
validation(cuatroOchenta);
