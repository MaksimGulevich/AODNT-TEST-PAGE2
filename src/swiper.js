const swiper1 = new Swiper('.swiper1', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 2,          // сколько слайдов видно за раз
  spaceBetween: 18,          // отступы между слайдами (px)

  // And if we need scrollbar
   scrollbar: {
    draggable: true,   
    dragSize: 20,    
  },
});


const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 2,          // сколько слайдов видно за раз
  spaceBetween: 30,          // отступы между слайдами (px)

  // And if we need scrollbar
   scrollbar: {
    draggable: true,   
    dragSize: 20, 
  },

});


const swiper3 = new Swiper('.swiper3', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',          // сколько слайдов видно за раз
  spaceBetween: 0,  
  // And if we need scrollbar
   scrollbar: {
    el: '.swiper3-scrollbar',
    draggable: true,   
    dragSize: 20, 
  }, 
});

const swiper7 = new Swiper('.swiper7', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',          // сколько слайдов видно за раз
  spaceBetween: 0,  
  // And if we need scrollbar
   scrollbar: {
    el: '.swiper7-scrollbar',
    draggable: true,   
    dragSize: 20, 
  }, 
});



const swiper4 = new Swiper('.swiper4', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',          // сколько слайдов видно за раз
  spaceBetween: 20, 
  
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

  // Breakpoints
  breakpoints: {
    300: {
      spaceBetween: 0,
      slidesPerView: 2,
      grid: { rows: 2, fill: 'row'},
    },
    1200: {
      spaceBetween: 20,
      slidesPerView: 4,
      grid: {rows:1, fill: 'row'},
    },
  },
});



const swiper5 = new Swiper('.swiper5', {
  // Optional parameters
  direction: 'vertical',
  loop: false,
  slidesPerView: 'auto',          // сколько слайдов видно за раз
  spaceBetween: 0,          // отступы между слайдами (px)

  // And if we need scrollbar
   scrollbar: {
    el: '.swiper5-scrollbar',
    draggable: true,   
    dragSize: 20, 
  },

});


const swiper6 = new Swiper('.swiper6', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  slidesPerView: 1,          // сколько слайдов видно за раз
  spaceBetween: 0,  

  // autoplay: {
  //   delay: 3000, // Интервал в миллисекундах (3 секунды)
  //   disableOnInteraction: false, // Продолжать после взаимодействия пользователя
  // },

   pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});