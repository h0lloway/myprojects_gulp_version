import Swiper, { Navigation, Pagination } from 'swiper';

export function roomsSwiper() {
  Swiper.use([Navigation, Pagination]);
  const swiper = new Swiper('.rooms__swiper', {
    loop: true,
    loopAdditionalSlides: 3,
    observer: true,
    observeParents: true,
    watchOverflow: true,
    speed: 500,
    slidesPerView: "auto",
    spaceBetween: 24,
    direction: 'horizontal',
    pagination: {
      el: '.rooms__pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.rooms__button-next',
      prevEl: '.rooms__button-prev',
    },
  });
}