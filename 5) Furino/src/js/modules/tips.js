import Swiper, { Navigation, Pagination } from 'swiper';

export function tipsSwiper() {
  Swiper.use([Navigation, Pagination]);
  const swiper = new Swiper('.tips__swiper', {
    loop: true,
    loopAdditionalSlides: 3,
    observer: true,
    observeParents: true,
    watchOverflow: true,
    speed: 500,
    slidesPerView: "auto",
    direction: 'horizontal',
    pagination: {
      el: '.tips__pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.tips__button-next',
      prevEl: '.tips__button-prev',
    },
  });
}