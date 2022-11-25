// HEADER // HEADER // HEADER // HEADER // HEADER // HEADER 

let lastScroll = 0;
const defaultOffset = 200;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
  if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
    // scroll down
    header.classList.add('hide');
  }
  else if (scrollPosition() < lastScroll && containHide()) {
    // scroll up
    header.classList.remove('hide');
  }

  lastScroll = scrollPosition();
});

// ПЛАВНЫЕ ЯКОРЯ

$('a[href*="#"]').on('click', function () {
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 600);
  return false;
});

// BURGER

$(document).ready(function () {
  $('.nav__burger').click(function (event) {
    $('.nav__burger,.nav__list').toggleClass('active');
    $('body').toggleClass('lock');
  });
  $(".nav__list a").click(function(){
    $('.nav__burger').removeClass("active");
    $(".nav__list.active").removeClass("active");
    $('body').removeClass('lock');
  });
});

// accordion // accordion // accordion // accordion 

$(document).ready(function () {
  $('.accordion__wrap').click(function (event) {
    if ($('.accordion__list').hasClass('one')) {
      $('.accordion__wrap').not($(this)).removeClass('active');
      $('.accordion__text').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
  });
});

// swiper // swiper // swiper // swiper // swiper // swiper 

const heroSwiper = new Swiper('.hero__swiper', {
  // Optional parameters
  loop: true,
  spaceBetween: 30,
  speed: 800,
  // autoplay: {
  //   delay: 4500,
  //   disableOnInteraction: false,
  // },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    // dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// РАСКРЫТЬ КАРТОЧКИ // РАСКРЫТЬ КАРТОЧКИ // РАСКРЫТЬ КАРТОЧКИ // РАСКРЫТЬ КАРТОЧКИ

const showMore = document.querySelector('.more-item-btn');
const productsLength = document.querySelectorAll('.products-grid__item').length;
let items = 12;

showMore.addEventListener('click', () => {
  
  if(window.innerWidth > 1100){
    items += 4;
  } else if (window.innerWidth <= 1100 && window.innerWidth > 920){
    items += 3;
  } else{
    console.log(window.innerWidth);
    items += 2;
  }
  
  const array = Array.from(document.querySelector('.products-grid').children);
  const visItems = array.slice(0, items);

  visItems.forEach(el => el.classList.add('is-visible'));


  if (visItems.length === productsLength) {
    showMore.style.display = 'none';
  }
});

