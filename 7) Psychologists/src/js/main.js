// HEADER // HEADER // HEADER // HEADER // HEADER // HEADER 

let lastScroll = 0;
const defaultOffset = 100;
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

// $('a[href*="#"]').on('click', function () {
//   $('html, body').animate({
//     scrollTop: $($.attr(this, 'href')).offset().top
//   }, 600);
//   return false;
// });


// BURGER

$(document).ready(function () {
  $('.mid__burger').click(function (event) {
    $('.mid__burger,.mid__list').toggleClass('active');
    $('body').toggleClass('lock');
  });
});



// range slider 

const rangeSlider = document.getElementById('range-slider');

if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [556, 10000],
    connect: true,
    step: 1,
    range: {
      'min': [0],
      'max': [15000]
    }
  });

  const input0 = document.getElementById('input-0');
  const input1 = document.getElementById('input-1');
  const inputs = [input0, input1];

  rangeSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = Math.round(values[handle]);
  });

  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;

    console.log(arr);

    rangeSlider.noUiSlider.set(arr)
  };

  inputs.forEach((el, index) => {
    el.addEventListener('change', (e) => {
      console.log(index);
      setRangeSlider(index, e.currentTarget.value);
    });
  })
}




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



// tabs

document.querySelectorAll('.tabs__btn').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.tabs__btn').forEach(function (btn) {
      btn.classList.remove('tabs__btn--active')
    });
    e.currentTarget.classList.add('tabs__btn--active');
    document.querySelectorAll('.content__item').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('content__item--active')
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('content__item--active');
  });
});


// swiper on low res

$(window).on('load resize', (function () {
  var windowsize = $(window).width();

  if (windowsize > 800) {
    $('.tabs__list').show();
    $(".tabs__list-swiper").hide();
  }
  else if (windowsize <= 800) {
    $('.tabs__list').hide();
    $(".tabs__list-swiper").show();

    const tabsSwiper = new Swiper('.tabs__list-swiper', {
      slidesPerGroup: 1,
      slidesPerView: "auto",
      spaceBetween: 39,
      // observer: true,
      // observeParents: true
    })

  }
}));
