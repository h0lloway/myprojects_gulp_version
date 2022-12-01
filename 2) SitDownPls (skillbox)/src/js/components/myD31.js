var swiper = new Swiper(".small-swiper", {
  spaceBetween: 38,
  slidesPerView: 'auto',
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    320: {
      direction: "horizontal",
      slidesPerView: 'auto',
      spaceBetween: 38,
    },
    740: {
      direction: "vertical",
      // slidesPerGroup: 5,
      slidesPerView: 4,
      spaceBetween: 14,
    },
    1010: {
      direction: "horizontal",
      slidesPerView: 'auto',
    }
  },
});
var swiper2 = new Swiper(".big-swiper", {
  spaceBetween: 10,
  navigation: {
  },
  thumbs: {
    swiper: swiper,
  },
});



const bottomSwiper = new Swiper('.sofa-sample__bottom-swiper', {
  slidesPerGroup: 1,
  slidesPerView: "auto",
  speed: 900,

  grid: {
    rows: 1,
    fill: "row"
  },
  // Optional parameters

  // Navigation arrows
  navigation: {
    nextEl: '.sofa-sample__swiper-button-next',
    prevEl: '.sofa-sample__swiper-button-prev',
  },
});


const modalSwiper = new Swiper('.modal-swiper', {
  // Optional parameters

  slidesPerGroup: 1,
  slidesPerView: "auto",
  lazy: {
    loadPrevNext: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiper = new Swiper(".modal-d31-swiper-small", {
  spaceBetween: 55,
  slidesPerView: 4,
  slidesPerGroup: 4,
  navigation: {
    nextEl: ".swiper-modal-button-next",
    prevEl: ".swiper-modal-button-prev",
  },
  freeMode: true,
  watchSlidesProgress: true,

  breakpoints: {
    320: {
      spaceBetween: 63,
      slidesPerGroup: 1,
      slidesPerView: 1,
    },
    500: {
      slidesPerGroup: 1,
      slidesPerView: 2,
    },
    768: {
      slidesPerGroup: 1,
      slidesPerView: 2,
    },
    1024: {
      spaceBetween: 70,
      slidesPerView: 3,
    }

  },

});
var swiper2 = new Swiper(".modal-d31-swiper-big", {
  spaceBetween: 10,

  thumbs: {
    swiper: swiper,
  },
});