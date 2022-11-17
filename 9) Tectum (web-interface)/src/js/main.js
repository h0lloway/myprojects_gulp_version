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


// BURGER

$(document).ready(function () {
  $('.content-right__burger').click(function (event) {
    $('.content-right__burger,.nav__list').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

// SWICH THEME

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



// placeholder
if ($(window).width() <= 600) {
  $(".mid-search__input").attr("placeholder", "Search");
}
else { $(".mid-search__input").attr("placeholder", "Хэш, Нода ID, Блокчейн ID, Транзакция или Кошелек"); }