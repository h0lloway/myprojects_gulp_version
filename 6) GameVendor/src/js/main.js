document.addEventListener('DOMContentLoaded', () => {

  // swiper // swiper // swiper // swiper // swiper // swiper // swiper // swiper // swiper // swiper // swiper // swiper // swiper // swiper // swiper // swiper 

  const headerSwiper = new Swiper('.header__swiper', {
    slidesPerGroup: 1,
    slidesPerView: "auto",
    speed: 1300,
    spaceBetween: 10,


    navigation: {
      nextEl: '.header__swiper-button-next',
      prevEl: '.header__swiper-button-prev',
    },
  });

  // select   // select   // select   // select   // select   // select   // select   // select   // select   // select   // select   // select   // select   // select   // select 

  const multiDefault = () => {
    const elements = document.querySelectorAll('.multi-default');
    elements.forEach(el => {
      const choices = new Choices(el, {
        searchEnabled: false,

      });
    });
  }

  multiDefault();

  // accordion // accordion // accordion // accordion // accordion // accordion // accordion // accordion // accordion // accordion // accordion // accordion // accordion // accordion 

  $(document).ready(function () {
    $('.accordion__wrap').click(function (event) {
      if ($('.accordion__list').hasClass('one')) {
        $('.accordion__wrap').not($(this)).removeClass('active');
        $('.accordion__text').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300);
    });
  });

  // if ($(window).width() < 550) {
  //   console.log()
  // }

  // NEW CARD BUTTON // NEW CARD BUTTON // NEW CARD BUTTON // NEW CARD BUTTON // NEW CARD BUTTON // NEW CARD BUTTON // NEW CARD BUTTON // NEW CARD BUTTON // NEW CARD BUTTON 

  $(".new-product__btn").click(function () {
    let title = 0;
    let img = 0;
    let cost = 0;
    let descr = 0;
    let genre = 0;
    let star = 0;
    let lngth = $(".grid-list-item").length;
    let items = document.querySelectorAll(".grid-list-item");
    console.log(items[2]);
    let parentSelector = document.querySelector('.grid-cards__list');
    let random = Math.floor(1 + Math.random() * lngth);

    if (random == 1) random += 1;

    child = items[random - 1];
    console.log(random);
    if (child) {
      let childNodes = child.childNodes;
      console.log(childNodes[1]["childNodes"][3]["childNodes"][1]["childNodes"][3]["childNodes"]);
      title = childNodes[1]["childNodes"][3]["childNodes"][1]["childNodes"][3]["childNodes"][1];
      let costPth = childNodes[1]["childNodes"][3]["childNodes"][3]["childNodes"][1]["childNodes"];
      if (costPth.length > 3) {
        cost = costPth[3].textContent
      }
      else {
        cost = "Free";
      }
      title = title.textContent;
      img = childNodes[1]["childNodes"][1]["childNodes"][1];
      star = childNodes[1]["childNodes"][3]["childNodes"][1]["childNodes"][5];
    }
    random = Math.floor(1 + Math.random() * lngth);

    if (random == 1) random += 1;
    console.log(document.querySelectorAll(".grid-list-item"));
    child = items[random - 1];

    if (child) {
      let childNodes = child.childNodes;
      console.log(childNodes[1]["childNodes"][3]["childNodes"][1]["childNodes"]);
      descr = childNodes[1]["childNodes"][3]["childNodes"][1]["childNodes"][7].textContent;
    }
    random = Math.floor(1 + Math.random() * lngth);
    if (random == 1) random += 1;

    child = items[random - 1];
    if (child) {
      let childNodes = child.childNodes;
      console.log(childNodes[1]["childNodes"][3]["childNodes"][1]["childNodes"][1]);
      genre = childNodes[1]["childNodes"][3]["childNodes"][1]["childNodes"][1];
    }
    let newItem = document.createElement("li");
    newItem.innerHTML = `<article class="grid-list-item__product product">
      <div class="product__image">
        `+ img.innerHTML + `
      </div>
      <div class="product__info">
        <div class="product__info-top">
          `+ genre.outerHTML + `
          <h2 class="product__title">
            <a class="product__link" href="#">`+ title + `</a>
          </h2>
          <div class="product__star">
          `+ star.innerHTML + `
          </div>
          <div class="product__descr">
            `+ descr + `
          </div>
        </div>
        <div class="product__info-bottom">
          <div class="product__prices">
            <div class="product__new-price">`+ cost + `</div>
          </div>
        </div>
      </div>
    </article>`;
    newItem.classList.add("grid-cards__list-item");
    $(".new-product").after(newItem);
  });


  // SWIPER ON LOW RESOLUTIONS // SWIPER ON LOW RESOLUTIONS // SWIPER ON LOW RESOLUTIONS // SWIPER ON LOW RESOLUTIONS // SWIPER ON LOW RESOLUTIONS // SWIPER ON LOW RESOLUTIONS // SWIPER ON LOW RESOLUTIONS 

  $(window).on('load resize', (function () {
    var windowsize = $(window).width();

    if (windowsize > 550) {
      $('.filters__list').show();
      $(".filters__list-swiper").hide();
    }
    else if (windowsize <= 550) {
      $('.filters__list').hide();
      $(".filters__list-swiper").show();

      const filtersSwiper = new Swiper('.filters__list-swiper', {
        slidesPerGroup: 1,
        slidesPerView: 2,
        spaceBetween: 7,
        // navigation: {
        //   nextEl: '.filters__swiper-button-next',
        //   prevEl: '.filters__swiper-button-prev',
        // },
      })

    }
  }));
});
