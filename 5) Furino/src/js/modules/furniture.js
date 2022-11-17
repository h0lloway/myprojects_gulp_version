"use strict"

export function fur() {
    const furniture = document.querySelector(".furniture__body");
    const body = document.querySelector("body");
   if (body.offsetWidth > 1024) {
    const furnitureItems = document.querySelector(".furniture__items");
    const furnitureColumn = document.querySelectorAll(".furniture__column");
    // Скорость анимации
    const speed = furniture.dataset.speed;

    // Объявление переменных
    let postitionX = 0;
    let coordXprocent = 0;

    function setMouseGalleryStyle() {
      let furnitureItemsWidth = 0;
      furnitureColumn.forEach(element => {
        furnitureItemsWidth += element.offsetWidth;
      });

      const furnitureDifferent = furnitureItemsWidth - furniture.offsetWidth;
      const distX = Math.floor(coordXprocent - postitionX);

      postitionX = postitionX + (distX * speed);
      let position = furnitureDifferent / 200 * postitionX;

      furnitureItems.style.cssText = `transform: translate3d(${-position}px,0,0);`;

      if (Math.abs(distX) > 0) {
        requestAnimationFrame(setMouseGalleryStyle);
      } else {
        furniture.classList.remove("_init");
      }
    }
    furniture.addEventListener("mousemove", function (e) {
      // Получение ширины
      const furnitureWidth = furniture.offsetWidth;

      // Ноль по середине
      const coordX = e.pageX - furnitureWidth / 2;

      // Получаем проценты
      coordXprocent = coordX / furnitureWidth * 200;

      if (!furniture.classList.contains("_init")) {
        requestAnimationFrame(setMouseGalleryStyle);
        furniture.classList.add("_init")
      }
    });
   }

}