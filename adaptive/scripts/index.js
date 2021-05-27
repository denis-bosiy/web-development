const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu--mobile');

function toggleMenu() {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu--mobile');

  burger.classList.toggle('burger--active');
  menu.classList.toggle('menu--active');
}
