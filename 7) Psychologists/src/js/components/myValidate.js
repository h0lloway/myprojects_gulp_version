let selector = document.querySelector("input[type='tel']");
let im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

new JustValidate('.content__form', {
  colorWrong: '#de6161',

  rules: {
    name: {
      required: true,
      minLength: 2,
      strength: {
        custom: '[а-яА-Я\d]',
      },
    },
    date: {
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
      required: '',
      minLength: '',
      strength: '',
    },
    tel: {
      required: '',
    },
    date: {
      required: '',
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
      document.querySelector(".modal--1").classList.remove("modal--visible")
      document.querySelector(".modal-overlay").classList.add("modal-overlay--visible")
      document.querySelector(".modal__thanks").classList.add("modal--visible")

      form.reset();
    })
      .catch(() => console.log('Ошибка'))
  }
});
