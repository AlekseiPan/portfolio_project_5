/* Навигация*/

const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const navMainMenu = document.querySelector('.main-nav__menu');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', () => {
  if (!navMain.classList.contains('main-nav--opened')) {
    navMain.classList.add('main-nav--opened');
    navMainMenu.addEventListener(
      'transitionend',
      () => {
        navMain.style.paddingBottom = `${navMainMenu.offsetHeight}px`;
        navMainMenu.style.position = 'absolute';
      },
      { once: true }
    );
  } else {
    navMain.classList.remove('main-nav--opened');
    navMain.style.paddingBottom = '0px';
    navMainMenu.style.position = 'fixed';
  }
});
