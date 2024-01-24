/* Замена в блоке favorite-coffee видео, после окончания его воспроизведения, на картинку */

const video = document.querySelector('.favorite-coffee__video');
const favoriteCoffeeBlock = document.querySelector('.favorite-coffee');
const pathToPicture = '../images/favorite-coffee.jpg';

video.onended = () => {
  video.style.display = 'none';
  favoriteCoffeeBlock.style.backgroundImage = `url(${pathToPicture})`;
};
