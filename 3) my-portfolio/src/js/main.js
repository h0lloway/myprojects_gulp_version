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


const toggleThemeBtn = document.getElementById('theme-btn');
const toggleThemeImg = document.getElementById('theme-img');


function setDarkTheme() {
  document.body.classList.add('dark')
  toggleThemeImg.src = 'img/sun.png'
  localStorage.theme = 'dark'
}

function setLightTheme() {
  document.body.classList.remove('dark')
  toggleThemeImg.src = 'img/moon.png'
  localStorage.theme = 'light'
}

toggleThemeBtn.addEventListener('click', () => {

  if (document.body.classList.contains('dark')) setLightTheme()
  else setDarkTheme()
})

if (localStorage.theme === 'dark') setDarkTheme()


// РАСКРЫТЬ КАРТОЧКИ

// const hifgRatingItems = gsap.timeline({ paused: true })

// hifgRatingItems
// 	.to(".hidden", { duration: .2, opacity: 1, visibility: "visible", display: "inline-flex" })

// document.querySelector(".more-item-btn").addEventListener("click", function () {
// 	document.querySelector(".close-item-btn").classList.add("visible")
// 	document.querySelector(".more-item-btn").classList.add("hidden")
// 	hifgRatingItems.timeScale(1).play()
// })
// document.querySelector(".close-item-btn").addEventListener("click", function () {
// 	document.querySelector(".close-item-btn").classList.remove("visible")
// 	document.querySelector(".more-item-btn").classList.remove("hidden")
// 	hifgRatingItems.timeScale(2).reverse()
// })


const showMore = document.querySelector('.more-item-btn');
const productsLength = document.querySelectorAll('.item-portf').length;
let items = 6;

showMore.addEventListener('click', () => {
  items += 3
  const array = Array.from(document.querySelector('.portfolio__list').children);
  const visItems = array.slice(0, items);

  visItems.forEach(el => el.classList.add('is-visible'));


  if (visItems.length === productsLength) {
    showMore.style.display = 'none';
  }
});



jQuery(document).ready(function () {
  var btn = $('#up-arrow');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });
});