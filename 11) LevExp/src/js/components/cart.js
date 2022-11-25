document.addEventListener('DOMContentLoaded', () => {

  const productsBtn = document.querySelectorAll('.product__btn');
  const fillingList = document.querySelector('.filling__list');
  const cart = document.querySelector('.cart');
  const cartQuantity = cart.querySelector('.cart__quantity');
  const fullPrice = document.querySelector('.fullprice');

  const orderModalOpenProd = document.querySelector('.order-modal__btn'); // для модального окна
  const orderModalList = document.querySelector('.order-modal__list') // для модального окна

  let newItem = false;
  let randomId = 0;
  let price = 0;
  let productArray = [];


  // const randomId = () => {
  //   return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  // };

  const priceWithoutSpaces = (str) => {
    return str.replace(/\s/g, '');
  };

  const normalPrice = (str) => {
    return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
  };

  const plusFullPrice = (currentPrice) => {
    return price += currentPrice;
  };

  const minusFullPrice = (currentPrice) => {
    return price -= currentPrice;
  };

  const printFullPrice = () => {
    fullPrice.textContent = `${normalPrice(price)} ₽`;
  };

  const printQuantity = () => {
    let length = fillingList.querySelector('.simplebar-content').children.length;
    cartQuantity.textContent = length;
    length > 0 ? cart.classList.add('active') : cart.classList.remove('active');

  };

  const generateCartProduct = (img, title, price, id) => {
    return `
      <li class="filling__list-item">
        <article class="filling__product cart-product" data-id="${id}">
          <img src="${img}" alt="" class="cart-product__img">
          <div class="cart-product__text">
            <h3 class="cart-product__title">${title}</h3>
            <span class="cart-product__price">${normalPrice(price)} ₽</span>
          </div>
          <div class="number" data-step="1" data-min="1" data-max="5">
          <input disabled="disabled"class="number-text" type="text" name="count" value="1"> <br>
            <a href="#" class="number-minus">-</a>
            <a href="#" class="number-plus">+</a>
          </div>
          <button class="cart-product__delete my-btn" aria-label="Удалить товар">
              <svg class="trash cart-product__delete" width="30" height="30">
                <use class="thrash-icon cart-product__delete"xlink:href="img/sprite.svg#trash"></use>
              </svg>

          </button>
        </article>
      </li>
    `;
  };

  const deleteProducts = (productParent) => {

    let id = productParent.querySelector('.cart-product').dataset.id;
    document.querySelector(`.product[data-id="${id}"]`).querySelector('.product__btn').disabled = false;
    
    let productQuantity = productParent.querySelector(".number>.number-text").value;
    
    let currentPrice = parseInt(priceWithoutSpaces(productParent.querySelector('.cart-product__price').textContent));
    minusFullPrice(currentPrice * productQuantity);
    printFullPrice();
    productParent.remove();
    printQuantity();

    updateStorage();
  };

  productsBtn.forEach(el => {

    el.closest('.product').setAttribute('data-id', randomId++);

    el.addEventListener('click', (e) => {
      let self = e.currentTarget;
      let parent = self.closest('.product');
      let id = parent.dataset.id;
      let img = parent.querySelector('.product__img img').getAttribute('src');
      let title = parent.querySelector('.product__name').textContent;
      let priceString = priceWithoutSpaces(parent.querySelector('.product__price').textContent);
      let priceNumber = parseInt(priceWithoutSpaces(parent.querySelector('.product__price').textContent));
      
      plusFullPrice(priceNumber);
      printFullPrice();
      fillingList.querySelector('.simplebar-content').insertAdjacentHTML('afterbegin', generateCartProduct(img, title, priceNumber, id));
      printQuantity();

      updateStorage();

      self.disabled = true;
    });
  });
  fillingList.addEventListener('click', (e) => {
    // проверка есть ли у цели класс, если есть удалить продукт
    if(e.target.classList.contains("cart-product__delete")){ 
      deleteProducts(e.target.closest('.filling__list-item'));
    }
  });

  // для модального окна // для модального окна // для модального окна // для модального окна // для модального окна 

  let flag = 0;
  orderModalOpenProd.addEventListener('click', (e) => {
    if (flag == 0) {
      orderModalOpenProd.classList.add('open');
      orderModalList.style.display = "block";
      flag = 1;
    } else {
      orderModalOpenProd.classList.remove('open');
      orderModalList.style.display = 'none';
      flag = 0;
    }
  });


  const generateModalProduct = (img, title, price, id, quant) => {
    return `
      <li class="order-modal__item">
        <article class="order-modal__product order-product" data-id="${id}">
          <img class="order-product__img" src="${img}" alt="Картинка">
          <div class="order-product__text">
            <h3 class="order-product__title">${title}</h3>
            <span class="order-product__price">${normalPrice(price)}</span>
            <span class="order-product__quantity">${quant} шт.</span>
          </div>
          <button class="order-product__delete my-btn">Удалить</button>
        </article>
      </li>
    `;
  };



  // вызов модалки // вызов модалки // вызов модалки // вызов модалки // вызов модалки // вызов модалки 

  const modal = new GraphModal({
    isOpen: (modal) => {
      console.log('opened');

      let array = fillingList.querySelector('.simplebar-content').children;
      let fullprice = fullPrice.textContent;
      let length = array.length;
      let totalQuant = 0; // общее кол-во товаров в корзине
      document.querySelector('.order-modal__summ span').textContent = `${fullprice}`;

      
      for (item of array) {
        console.log(item)
        let productQuantity = item.querySelector(".number>.number-text").value;
        let img = item.querySelector('.cart-product__img').getAttribute('src');
        let title = item.querySelector('.cart-product__title').textContent;
        let priceString = priceWithoutSpaces(item.querySelector('.cart-product__price').textContent);
        let id = item.querySelector('.cart-product').dataset.id;
        console.log(id);
        orderModalList.insertAdjacentHTML('afterbegin', generateModalProduct(img, title, priceString, id, productQuantity));
        // Передача продукта в массив, в том числе его количество
        let obj = {};
        obj.title = title;
        obj.price = priceString;
        obj.quantity = productQuantity;
        console.log(obj);
        productArray.push(obj);
        // Добавление общего кол-ва продуктов в корзине
        totalQuant += parseInt(obj.quantity);
        
      }
      console.log(totalQuant);
      // вывод после подсчета общего количество продуктов из корзины
      document.querySelector('.order-modal__quantity span').textContent = `${parseInt(totalQuant)} шт`;
    },
    isClose: () => {
      productArray = []; // Очистка массива после закрытия модалки
      console.log('closed');
    }
  });


  // отправка формы // отправка формы // отправка формы // отправка формы // отправка формы // отправка формы 

  document.querySelector('.order').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(productArray);
    let self = e.currentTarget;
    let formData = new FormData(self);

    let name = self.querySelector('[name="Имя"]').value;
    let tel = self.querySelector('[name="Телефон"]').value;
    let mail = self.querySelector('[name="Email"]').value;
    formData.append('Товары', JSON.stringify(productArray));
    formData.append('Имя', name);
    formData.append('Телефон', tel);
    formData.append('Email', mail);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.stats === 200) {
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);
    console.log('Отправлено')
    document.querySelector(".thanks-modal").classList.add("modal-open")
    document.querySelector(".order-modal").classList.remove("modal-open")

    self.reset();
  });




  // локал сторадж   // локал сторадж   // локал сторадж   // локал сторадж   // локал сторадж 


  const countSumm = () => {
    document.querySelectorAll('.filling__list-item').forEach(el => {
      price += parseInt(priceWithoutSpaces(el.querySelector('.cart-product__price').textContent));
    });
  };

  const initialState = () => {
    if (localStorage.getItem('products') !== null) {
      fillingList.querySelector('.simplebar-content').innerHTML = localStorage.getItem('products');
      printQuantity();
      countSumm();
      printFullPrice();


      document.querySelectorAll('.filling__product').forEach(el => {
        let id = el.dataset.id;
        console.log(id)
        document.querySelector(`.product[data-id="${id}"]`).querySelector('.product__btn').disabled = true;
      });
    }
  };

  initialState();


  const updateStorage = () => {
    let parent = fillingList.querySelector('.simplebar-content');
    let html = parent.innerHTML;
    html = html.trim();
    console.log(html);
    console.log(html.length);

    if (html.length) {
      localStorage.setItem('products', html);
    } else {
      localStorage.removeItem('products');
    }
  };
  document.querySelector('.modal').addEventListener('click', (e) => {
    if (e.target.classList.contains('order-product__delete')) {
      let id = e.target.closest('.order-modal__product').dataset.id;
      let cartProduct = document.querySelector(`.filling__product[data-id="${id}"]`).closest('.filling__list-item');
      deleteProducts(cartProduct); // вызываем ф-ию удаления, удаляем текущий элемент
      // Переменные для правильного удаления продукта из массива
      let parentEl = e.target.parentElement;
      let textBlock = parentEl.querySelector(".order-product__text");
      let title = textBlock.children[0].textContent;
      let priceString = priceWithoutSpaces(textBlock.children[1].textContent);
      console.log(textBlock);
      let productQuantity = parseInt(textBlock.querySelector(".order-product__quantity").textContent);
      console.log(productQuantity);
      // Удаление продукта из массива
      let obj = {};
      obj.title = title;
      obj.price = priceString;
      productArray.splice(obj, 1);
      // Получение кол-ва штук одного продукта
      let totalQuant = 0;
      productArray.forEach(el => {
        totalQuant += parseInt(el.quantity);
      });
      // Обновление текущей цены после удаления 
      // получение старых показателей цен и кол-ва и вычисление новых данных
      let prevQnt = parseInt(document.querySelector('.order-modal__quantity span').textContent);
      let prevPrice = priceWithoutSpaces(document.querySelector('.order-modal__summ span').textContent);
      prevPrice = parseInt(prevPrice);
      let actualQuantity = prevQnt - productQuantity;
      let actualPrice = prevPrice -(parseInt(obj.price)*productQuantity);
      // Вывод новой цены и кол-ва
      document.querySelector('.order-modal__quantity span').textContent = `${actualQuantity} шт`;
      document.querySelector('.order-modal__summ span').textContent = `${actualPrice} ₽`;

      updateStorage();
      e.target.closest('.order-modal__product').remove();
      // Проверка остались ли товары в корзине, если нет - закрыть модалку
      if(actualPrice <= 0 || actualQuantity <= 0){
        document.querySelector(".order-modal__list").innerHTML = '';
        modal.close();
      }
    }
  });
  // КОД СТЕППЕРА // КОД СТЕППЕРА // КОД СТЕППЕРА // КОД СТЕППЕРА 
  $('body').on('click', '.number-minus, .number-plus', function(){
    var $row = $(this).closest('.number');
    var $input = $row.find('.number-text');
    var step = $row.data('step');
    var val = parseFloat($input.val());
    // получение цены продукта
    let priceNumber = parseInt(priceWithoutSpaces(this.parentElement.parentElement.querySelector('.cart-product__price').textContent));
    
    if ($(this).hasClass('number-minus')) {
      // Если значение степпера больше чем 1,
      // минусуем один продукт в общую цену 
      if(val > 1){
        minusFullPrice(priceNumber);
        printFullPrice();
      }
      val -= step;
      // Если значение степпера меньше чем 5,
      // суммируем один продукт его в общую цену
    } else {
      if(val < 5){
        plusFullPrice(priceNumber);
        printFullPrice();
      }
      val += step;

    }
    $input.val(val);
    console.log();

    $input.change();
    return false;
  });
  $('body').on('change', '.number-text', function(){
    var $input = $(this);
    var $row = $input.closest('.number');
    var step = $row.data('step');
    var min = parseInt($row.data('min'));
    var max = parseInt($row.data('max'));
    var val = parseFloat($input.val());
    if (isNaN(val)) {
        val = step;
    } else if (min && val < min) {
        val = min; 
    } else if (max && val > max) {
        val = max; 
    }
    $input.val(val);
  });
});
