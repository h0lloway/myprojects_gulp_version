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
  $('.btns__burger').click(function (event) {
    $('.btns__burger,.nav__list').toggleClass('active');
    $('body').toggleClass('lock');
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

// tabs // tabs // tabs // tabs

document.querySelectorAll('.tabs__btn-switch').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.tabs__btn-switch').forEach(function (btn) {
      btn.classList.remove('tab-btn-active')
    });
    e.currentTarget.classList.add('tab-btn-active');
    document.querySelectorAll('.tabs__list').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('tab-active')
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('tab-active');
  });
});


// swiper // swiper // swiper // swiper // swiper // swiper 

const benefitsSwiper = new Swiper('.benefits__swiper', {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    720: {
      slidesPerGroup: 1,
      slidesPerView: 2,
    },
    1200: {
      slidesPerGroup: 1,
      slidesPerView: 3,
    }
  },
  // loop: true,

  // If we need pagination
  pagination: {
    el: '.benefits__swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.benefits__swiper-button-next',
    prevEl: '.benefits__swiper-button-prev',
  },
});



const reviewsSwiper = new Swiper('.reviews__swiper', {
  // Optional parameters
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 20,
  // loop: true,
  breakpoints: {
    210: {
      slidesPerGroup: 1,
      slidesPerView: 1,
    },
    720: {
      slidesPerGroup: 1,
      slidesPerView: 2,
    },
    1200: {
      slidesPerGroup: 1,
      slidesPerView: 3,
    }
  },

  // If we need pagination
  pagination: {
    el: '.reviews__swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.reviews__swiper-button-next',
    prevEl: '.reviews__swiper-button-prev',
  },
});



  // SWICH THEME


  // let lightTheme = document.querySelector(".swich-theme-btn-light");
  // let darkTheme = document.querySelector(".swich-theme-btn-dark");


  // lightTheme.addEventListener("click", function () {
  //   this.style.display = "none";
  //   darkTheme.style.display = "block";


  //   darkTheme.addEventListener("click", function () {
  //     this.style.display = "none";
  //     lightTheme.style.display = "block";
  //   });
  // });


  // const toggleThemeBtn = document.getElementById('theme-btn');
  // const toggleThemeImg = document.getElementById('theme-img');


  // function setDarkTheme() {
  //   document.body.classList.add('dark')
  //   toggleThemeImg.src = 'img/sun.png'
  //   localStorage.theme = 'dark'
  // }

  // function setLightTheme() {
  //   document.body.classList.remove('dark')
  //   toggleThemeImg.src = 'img/moon.png'
  //   localStorage.theme = 'light'
  // }

  // toggleThemeBtn.addEventListener('click', () => {

  //   if (document.body.classList.contains('dark')) setLightTheme()
  //   else setDarkTheme()
  // })

  // if (localStorage.theme === 'dark') setDarkTheme()


  // TOOLTIPS

  // tippy('.js-tooltip', {
  //   theme: 'projects-tooltip',
  //   animation: 'fade',
  //   delay: 300,
  //   placement: "top",
  //   allowHTML: !0,
  //   role: "tooltip",
  //   trigger: "mouseenter focus click",
  //   hideOnClick: !0,
  //   maxWidth: 250
  // });




  // РАСКРЫТЬ КАРТОЧКИ

  // const hifgRatingItems = gsap.timeline({ paused: true })

  // hifgRatingItems
  //   .to(".hidden", { duration: .2, opacity: 1, visibility: "visible", display: "inline-flex" })

  // document.querySelector(".more-item-btn").addEventListener("click", function () {
  //   document.querySelector(".close-item-btn").classList.add("visible")
  //   document.querySelector(".more-item-btn").classList.add("hidden")
  //   hifgRatingItems.timeScale(1).play()
  // })
  // document.querySelector(".close-item-btn").addEventListener("click", function () {
  //   document.querySelector(".close-item-btn").classList.remove("visible")
  //   document.querySelector(".more-item-btn").classList.remove("hidden")
  //   hifgRatingItems.timeScale(2).reverse()
  // })
