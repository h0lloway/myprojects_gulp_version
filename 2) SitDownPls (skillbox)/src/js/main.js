// swiper // swiper // swiper // swiper // swiper // swiper // swiper // swiper // swiper // swiper 

const HeroSwiper = new Swiper('.hero__swiper', {
  // autoplay: {
  //   delay: 4000,
  // },
  speed: 1300,
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.hero__swiper-pagination',
  },

});


const SpecialSwiper = new Swiper('.special-price__swiper', {
  slidesPerGroup: 3,
  slidesPerView: "auto",
  breakpoints: {
    210: {
      slidesPerGroup: 1,
    },
    720: {
      slidesPerGroup: 2,
    },
    980: {
      slidesPerGroup: 3,
    }
  },

  navigation: {
    nextEl: '.special-price__swiper-button-next',
    prevEl: '.special-price__swiper-button-prev',
  },

  a11y: false,
  keyboard: true,

});


const UsefulSwiper = new Swiper('.useful__swiper', {
  slidesPerGroup: 1,
  slidesPerView: "auto",
  lazy: {
    loadPrevNext: true,
  },


  // Navigation arrows
  navigation: {
    nextEl: '.useful__swiper-button-next',
    prevEl: '.useful__swiper-button-prev',
  },

  a11y: false,
  keyboard: true, // можно управлять с клавиатуры стрелками влево/вправо

  // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
  watchSlidesProgress: true,
  slideVisibleClass: 'slide-visible',

  on: {
    init: function () {
      this.slides.forEach(slide => {
        if (!slide.classList.contains('slide-visible')) {
          slide.tabIndex = '-1';
        } else {
          slide.tabIndex = '';
        }
      });
    },
    slideChange: function () {
      this.slides.forEach(slide => {
        if (!slide.classList.contains('slide-visible')) {
          slide.tabIndex = '-1';
        } else {
          slide.tabIndex = '';
        }
      });
    }
  }
});


// more-button // more-button // more-button // more-button // more-button // more-button 

let OpenBtn = document.querySelector(".more-item-btn");
let CloseBtn = document.querySelector(".close-item-btn");
let hideitems = document.querySelectorAll(".hide");

OpenBtn.addEventListener("click", function () {
  hideitems.forEach(item => {
    item.style.display = "block";
  });

  this.style.display = "none";
  CloseBtn.style.display = "block";

  CloseBtn.addEventListener("click", function () {
    hideitems.forEach(item => {
      item.style.display = "none";
    });

    this.style.display = "none";
    OpenBtn.style.display = "block";
  });
});

// just validate // just validate // just validate // just validate// just validate// just validate

let selector = document.querySelector("input[type='tel']");
let im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

new JustValidate('.contacts__form', {
  colorWrong: '#FF6972',
  rules: {
    name: {
      required: true,
      minLength: 2,
      strength: {
        custom: '[а-яА-Я\d]',
      },
    },
    mail: {
      required: true,
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
  },
  messages: {
    name: {
      required: 'Введите ваше имя',
      minLength: 'Минимальное количество букв - 2',
      strength: 'Недопустимый формат',
    },
    tel: {
      required: 'Введите ваш телефон',
    },
    mail: {
      required: 'Введите ваш email',
    },
  },

  submitHandler: function (form) {
    // form.preventDefault();
    let formData = new FormData(form);

    fetch('mail.php', {
      method: 'POST',
      body: formData
    }).then(() => {
      console.log('Отправлено');
      document.querySelector(".modal").classList.add("modal--visible")
      document.querySelector(".modal-overlay").classList.add("modal-overlay--visible")

      form.reset();
    })
      .catch(() => console.log('Ошибка'))
  }
});

