/* РЕАЛИЗАЦИЯ МОДАЛЬНОГО ОКНА */

import { coffeeOptions, dessertOptions, teaOptions } from './data';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.page-body__overlay');
const body = document.querySelector('.page-body');
const close = modal.querySelector('.modal__close');

/* Рендеринг данных модального окна */

const renderModalData = (product) => {
  modal.querySelector('.modal__picture').src = product.querySelector(
    '.assortment__picture'
  ).src;
  modal.querySelector('.modal__name').textContent =
    product.querySelector('.assortment__name').textContent;
  modal.querySelector('.modal__description').textContent =
    product.querySelector('.assortment__description').textContent;
  modal.querySelector('.modal__price').textContent =
    product.querySelector('.assortment__price').textContent;
};

/* Рендеринг опций выбора модального окна */

const renderOptions = (options) => {
  modal.querySelector('.modal__size-signature--small').textContent =
    options.size[0];
  modal.querySelector('.modal__size-signature--medium').textContent =
    options.size[1];
  modal.querySelector('.modal__size-signature--large').textContent =
    options.size[2];

  modal.querySelector('.modal__additives-signature--first').textContent =
    options.additives[0];
  modal.querySelector('.modal__additives-signature--second').textContent =
    options.additives[1];
  modal.querySelector('.modal__additives-signature--third').textContent =
    options.additives[2];
};

const renderModalOptions = () => {
  const currentCategory = document.querySelector(
    '.assortment__button--current'
  );
  if (currentCategory.classList.contains('assortment__button--coffee')) {
    renderOptions(coffeeOptions);
  } else if (currentCategory.classList.contains('assortment__button--tea')) {
    renderOptions(teaOptions);
  } else if (
    currentCategory.classList.contains('assortment__button--dessert')
  ) {
    renderOptions(dessertOptions);
  }
};

/* Выбор размера */

const buttonSmall = modal.querySelector('.modal__size-button--small');
const buttonMedium = modal.querySelector('.modal__size-button--medium');
const buttonLarge = modal.querySelector('.modal__size-button--large');

const ADDITIONAL_PRICE_FOR_MEDIUM = 0.5;
const ADDITIONAL_PRICE_FOR_LARGE = 1;

const changeCurrentButton = (event) => {
  const clickedButton = event.target.closest('.modal__size-button');

  if (clickedButton) {
    const price = modal.querySelector('.modal__price');
    let resultPrice = Number(price.textContent.substring(1));

    buttonSmall.classList.remove('modal__size-button--current');

    if (buttonMedium.classList.contains('modal__size-button--current')) {
      buttonMedium.classList.remove('modal__size-button--current');
      resultPrice -= ADDITIONAL_PRICE_FOR_MEDIUM;
    }

    if (buttonLarge.classList.contains('modal__size-button--current')) {
      buttonLarge.classList.remove('modal__size-button--current');
      resultPrice -= ADDITIONAL_PRICE_FOR_LARGE;
    }

    clickedButton.classList.add('modal__size-button--current');
    if (clickedButton.classList.contains('modal__size-button--medium')) {
      resultPrice += ADDITIONAL_PRICE_FOR_MEDIUM;
    } else if (clickedButton.classList.contains('modal__size-button--large')) {
      resultPrice += ADDITIONAL_PRICE_FOR_LARGE;
    }

    price.textContent = `$${resultPrice.toFixed(2)}`;
  }
};

const onSizeButtonsHandler = () => {
  buttonSmall.addEventListener('click', changeCurrentButton);

  buttonMedium.addEventListener('click', changeCurrentButton);

  buttonLarge.addEventListener('click', changeCurrentButton);
};

const removeEventListenersSizeButtons = () => {
  const buttons = document.querySelectorAll('.modal__size-button');

  buttons.forEach((button) => {
    button.removeEventListener('click', changeCurrentButton);
    button.classList.remove('modal__size-button--current');
  });

  buttonSmall.classList.add('modal__size-button--current');
};

/* Выбор дополнительных опций */

const buttonFirst = modal.querySelector('.modal__additives-button--first');
const buttonSecond = modal.querySelector('.modal__additives-button--second');
const buttonThird = modal.querySelector('.modal__additives-button--third');

const ADDITIONAL_PRICE_FOR_ADDITIVES = 0.5;

const switchCurrentAdditivesButton = (event) => {
  const clickedButton = event.target.closest('.modal__additives-button');

  const price = modal.querySelector('.modal__price');
  let resultPrice = Number(price.textContent.substring(1));

  if (!clickedButton.classList.contains('modal__additives-button--current')) {
    clickedButton.classList.add('modal__additives-button--current');

    resultPrice += ADDITIONAL_PRICE_FOR_ADDITIVES;
  } else {
    clickedButton.classList.remove('modal__additives-button--current');

    resultPrice -= ADDITIONAL_PRICE_FOR_ADDITIVES;
  }

  price.textContent = `$${resultPrice.toFixed(2)}`;
};

const onAdditivesButtonHandler = () => {
  buttonFirst.addEventListener('click', switchCurrentAdditivesButton);
  buttonSecond.addEventListener('click', switchCurrentAdditivesButton);
  buttonThird.addEventListener('click', switchCurrentAdditivesButton);
};

const removeEventListenerAdditivesButton = () => {
  const buttons = document.querySelectorAll('.modal__additives-button');

  buttons.forEach((button) => {
    button.removeEventListener('click', switchCurrentAdditivesButton);
    button.classList.remove('modal__additives-button--current');
  });
};

/* Открытие и закрытие модального окна */

let closeHandler;
let outsideHandler;

const onCloseHandler = () => {
  closeHandler = () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';
    body.style.overflow = 'auto';
    close.removeEventListener('click', closeHandler);
    overlay.removeEventListener('click', outsideHandler);
    removeEventListenersSizeButtons();
    removeEventListenerAdditivesButton();
  };
  close.addEventListener('click', closeHandler);
};

const onOutsideHandler = () => {
  outsideHandler = (event) => {
    if (event.target !== modal) {
      modal.style.display = 'none';
      overlay.style.display = 'none';
      body.style.overflow = 'auto';
      close.removeEventListener('click', closeHandler);
      overlay.removeEventListener('click', outsideHandler);
      removeEventListenersSizeButtons();
      removeEventListenerAdditivesButton();
    }
  };
  overlay.addEventListener('click', outsideHandler);
};

const onProductHandler = () => {
  const products = document.querySelectorAll('.assortment__link');
  products.forEach((product) => {
    product.addEventListener('click', (event) => {
      event.preventDefault();
      modal.style.display = 'block';
      overlay.style.display = 'block';
      body.style.overflow = 'hidden';
      renderModalData(product);
      renderModalOptions();
      onSizeButtonsHandler();
      onAdditivesButtonHandler();
      onCloseHandler();
      onOutsideHandler();
    });
  });
};

export { onProductHandler };
