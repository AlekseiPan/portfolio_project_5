const arrowLeft = document.querySelector('.slider__arrow--left');
const arrowRight = document.querySelector('.slider__arrow--right');
const listItems = document.querySelectorAll('.slider__item');
const listItemsProgress = document.querySelectorAll(
  '.slider__progress-bar-loading'
);
const lastSlideIndex = listItems.length - 1;
let continueLoading = true;

const findCurrentSlide = () => {
  for (let i = 0; i < listItems.length; i++) {
    if (listItems[i].classList.contains('slider__item--current')) {
      return i;
    }
  }
};

const addCurrentClass = (index) => {
  listItems[index].classList.add('slider__item--current');
  listItemsProgress[index].classList.add(
    'slider__progress-bar-loading--current'
  );
};

const removeCurrentClass = (index) => {
  listItems[index].classList.remove('slider__item--current');
  listItemsProgress[index].classList.remove(
    'slider__progress-bar-loading--current'
  );
};

const fillLoading = () => {
  const loadingString = document.querySelector(
    '.slider__progress-bar-loading--current'
  );
  let width = 0;

  const loading = setInterval(() => {
    if (!continueLoading) {
      clearInterval(loading);
      loadingString.style.width = '0';
    } else if (width >= 100) {
      clearInterval(loading);
      loadingString.style.width = '0';
    } else {
      width++;
      loadingString.style.width = `${width}%`;
    }
  }, 50);
};

const stopLoading = () => {
  continueLoading = false;
};

let autoscrollInterval;

const autoscroll = () => {
  fillLoading();
  autoscrollInterval = setInterval(() => {
    const currentSlide = findCurrentSlide();

    listItems[currentSlide].classList.add('slider__item--move-left');
    listItems[currentSlide].addEventListener(
      'transitionend',
      () => {
        let nextSlide;
        if (currentSlide < lastSlideIndex) {
          nextSlide = currentSlide + 1;
        } else {
          nextSlide = 0;
        }
        addCurrentClass(nextSlide);
        removeCurrentClass(currentSlide);
        listItems[currentSlide].classList.remove('slider__item--move-left');
        fillLoading();
      },
      { once: true }
    );
  }, 5000);
};

const stopAutoscroll = () => {
  clearInterval(autoscrollInterval);
};

const resumeAutoscroll = () => {
  continueLoading = true;
  autoscroll();
};

const rotateSlides = (direction) => {
  stopLoading();
  const currentSlide = findCurrentSlide();

  if (listItems.length > 0) {
    if (direction === 'left') {
      listItems[currentSlide].classList.add('slider__item--move-left');
      listItems[currentSlide].addEventListener(
        'transitionend',
        () => {
          let nextSlide;
          if (currentSlide < lastSlideIndex) {
            nextSlide = currentSlide + 1;
          } else {
            nextSlide = 0;
          }
          addCurrentClass(nextSlide);
          removeCurrentClass(currentSlide);
          stopAutoscroll();
          resumeAutoscroll();
          listItems[currentSlide].classList.remove('slider__item--move-left');
        },
        { once: true }
      );
    } else if (direction === 'right') {
      listItems[currentSlide].classList.add('slider__item--move-right');
      listItems[currentSlide].addEventListener(
        'transitionend',
        () => {
          if (currentSlide > 0) {
            addCurrentClass(currentSlide - 1);
          } else {
            addCurrentClass(lastSlideIndex);
          }
          removeCurrentClass(currentSlide);
          stopAutoscroll();
          resumeAutoscroll();
          listItems[currentSlide].classList.remove('slider__item--move-right');
        },
        { once: true }
      );
    }
  }
};

arrowLeft.addEventListener('click', () => {
  rotateSlides('right');
});

arrowRight.addEventListener('click', () => {
  rotateSlides('left');
});

autoscroll();

/* Перелистывание слайдера прикосновением */

const slider = document.querySelector('.slider__list');
let startX;
let endX;

slider.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  stopAutoscroll();
  stopLoading();
});

slider.addEventListener('touchmove', (e) => {
  endX = e.touches[0].clientX;
});

slider.addEventListener('touchend', () => {
  if (startX && endX) {
    const diffX = startX - endX;
    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        rotateSlides('left');
      } else {
        rotateSlides('right');
      }
    } else {
      startX = null;
      endX = null;
      resumeAutoscroll();
    }
  }
});

/* Приостановка автоматического скрола при наведении мыши */

slider.addEventListener('mouseover', () => {
  stopAutoscroll();
  stopLoading();
});
slider.addEventListener('mouseout', () => {
  resumeAutoscroll();
});
