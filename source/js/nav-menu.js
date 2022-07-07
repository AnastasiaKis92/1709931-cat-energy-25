const navContainer = document.querySelector('.main-nav');
const toggleButton = document.querySelector('.main-nav__toggle');

navContainer.classList.remove('main-nav--nojs');

const onMenuToggle = () => {
  if (navContainer.classList.contains('main-nav--closed')) {
    navContainer.classList.remove('main-nav--closed');
    navContainer.classList.add('main-nav--opened');
    return;
  }
  navContainer.classList.add('main-nav--closed');
  navContainer.classList.remove('main-nav--opened');
};

const toggleMenu = toggleButton.addEventListener('click', onMenuToggle);

export {toggleMenu};
