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
});


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

const hifgRatingItems = gsap.timeline({ paused: true })

hifgRatingItems
  .to(".hidden", { duration: .2, opacity: 1, visibility: "visible", display: "inline-flex" })

document.querySelector(".more-item-btn").addEventListener("click", function () {
  document.querySelector(".close-item-btn").classList.add("visible")
  document.querySelector(".more-item-btn").classList.add("hidden")
  hifgRatingItems.timeScale(1).play()
})
document.querySelector(".close-item-btn").addEventListener("click", function () {
  document.querySelector(".close-item-btn").classList.remove("visible")
  document.querySelector(".more-item-btn").classList.remove("hidden")
  hifgRatingItems.timeScale(2).reverse()
})