const trainersSwiper = document.querySelector('.trainers__slider');
const commentsSwiper = document.querySelector('.reviews__slider');

const initTrainersSlider = () => {
  if (trainersSwiper) {
    const swiper = new Swiper(trainersSwiper, {
      simulateTouch: false,
      grabCursor: false,
      watchOverflow: true,
      speed: 500,
      loop: true,
      navigation: {
        nextEl: '.trainers__arrow--next',
        prevEl: '.trainers__arrow--prev',
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          initialSlide: 3,
          spaceBetween: 10,
        },

        767: {
          slidesPerView: 2,
          spaceBetween: 30,
          initialSlide: 2,
        },

        1365: {
          slidesPerView: 4,
          spaceBetween: 40,
        }
      },
    });
  }
}

const initReviewsSlider = () => {
  if (commentsSwiper) {
    const swiper = new Swiper(commentsSwiper, {

      loop: false,
      spaceBetween: 40,

      navigation: {
        nextEl: '.reviews__arrow--next',
        prevEl: '.reviews__arrow--prev',
      },
    });
  }
}

export { initTrainersSlider, initReviewsSlider }
