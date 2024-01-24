import { coffee, tea, dessert } from './data.js';
import { onProductHandler } from './modal.js';

/* ОТОБРАЖЕНИЕ ПРОДУКТОВ МЕНЮ */

/* Функции рендеринга продуктов */

const PRODUCTS_NUMBER_FOR_NARROW_SCREEN = 4;
const PRODUCTS_NUMBER_FOR_WIDE_SCREEN = 8;

let productsLoaded = [];
let productsCount;

const productTemplate = document
  .querySelector('#assortment__item')
  .content.querySelector('.assortment__item');
const productsList = document.querySelector('.assortment__list');
const buttonLoading = document.querySelector('.assortment__load');

const renderProduct = (product) => {
  const productCard = productTemplate.cloneNode(true);

  productCard.querySelector('.assortment__picture').src = product.url;
  productCard.querySelector('.assortment__name').textContent = product.name;
  productCard.querySelector('.assortment__description').textContent =
    product.description;
  productCard.querySelector('.assortment__price').textContent = product.price;

  return productCard;
};

const renderProducts = (products) => {
  const onProductsLoaderHandler = () => {
    renderProducts(products);
  };

  const viewportWidth = window.innerWidth;
  const PRODUCTS_NUMBER =
    viewportWidth <= 768
      ? PRODUCTS_NUMBER_FOR_NARROW_SCREEN
      : PRODUCTS_NUMBER_FOR_WIDE_SCREEN;

  if (productsCount !== products.length) {
    productsCount = PRODUCTS_NUMBER;
  }
  // if (productsCount !== products.length) {
  //   if (viewportWidth <= 768) {
  //     if (products.length < PRODUCTS_NUMBER_FOR_NARROW_SCREEN) {
  //       productsCount = products.length;
  //     } else {
  //       productsCount = PRODUCTS_NUMBER_FOR_NARROW_SCREEN;
  //     }
  //   } else {
  //     if (products.length < PRODUCTS_NUMBER_FOR_WIDE_SCREEN) {
  //       productsCount = products.length;
  //     } else {
  //       productsCount = PRODUCTS_NUMBER_FOR_WIDE_SCREEN;
  //     }
  //   }
  // }

  productsLoaded = products.slice(0, productsCount);

  productsList.innerHTML = '';

  const fragment = document.createDocumentFragment();

  productsLoaded.forEach((product) => {
    fragment.appendChild(renderProduct(product));
  });
  productsList.appendChild(fragment);

  if (
    products.length > PRODUCTS_NUMBER &&
    productsLoaded.length < products.length
  ) {
    buttonLoading.classList.remove('assortment__load--hidden');
    buttonLoading.addEventListener('click', onProductsLoaderHandler, {
      once: true,
    });
  } else {
    buttonLoading.classList.add('assortment__load--hidden');
  }

  onProductHandler();

  productsCount = products.length;

  window.addEventListener('resize', () => {
    productsCount = 0;
    onProductsLoaderHandler();
  });
};

renderProducts(coffee);

/* Реализация переключения категории продуктов */

const buttonCoffee = document.querySelector('.assortment__button--coffee');
const buttonTea = document.querySelector('.assortment__button--tea');
const buttonDessert = document.querySelector('.assortment__button--dessert');

const clearListProducts = (event) => {
  const clickedButton = event.target.closest('.assortment__button');

  if (clickedButton) {
    const displayedProducts = document.querySelectorAll('.assortment__item');
    displayedProducts.forEach((product) => {
      product.remove();
    });

    document
      .querySelectorAll('.assortment__button')
      .forEach((button) =>
        button.classList.remove('assortment__button--current')
      );

    clickedButton.classList.add('assortment__button--current');
  }
};

buttonCoffee.addEventListener('click', (event) => {
  clearListProducts(event);
  renderProducts(coffee);
});

buttonTea.addEventListener('click', (event) => {
  clearListProducts(event);
  renderProducts(tea);
});

buttonDessert.addEventListener('click', (event) => {
  clearListProducts(event);
  renderProducts(dessert);
});
