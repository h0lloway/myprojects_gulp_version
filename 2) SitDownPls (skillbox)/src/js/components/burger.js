// burger

$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__bot-nav').toggleClass('active');
    $('body').toggleClass('lock');
  });
});