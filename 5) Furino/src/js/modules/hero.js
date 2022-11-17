import Swiper, { Navigation, Pagination } from 'swiper';

export function heroSwiper() {
  Swiper.use([Navigation, Pagination]);
  const swiper = new Swiper('.hero__swiper', {
    loop: true,
    loopAdditionalSlides: 3,
    observer: true,
    observeParents: true,
    watchOverflow: true,
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 32,
    direction: 'horizontal',
    pagination: {
      el: '.hero__pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.hero__button-next',
      prevEl: '.hero__button-prev',
    },
  });
}