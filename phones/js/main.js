
(function() {

  //burger

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {
      
        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return

        if (document.documentElement.clientWidth > 900) return

        if (burgerIcon) {
          e.preventDefault()
        }

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
          document.body.classList.remove('body--opened-menu')
        }

        

    }


// slider
new Swiper('.hero__slider', {
  spaceBetween: 100,
  slidesPerView: 1,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },             

  // Navigation arrows
  navigation: {
    nextEl: '.hero__next',
    prevEl: '.hero__prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },

});

document.addEventListener('DOMContentLoaded', function() {
  const toggleLinks = document.querySelectorAll('.footer__toggle');

  function handleToggle() {
    if (window.matchMedia('(max-width: 600px)').matches) {
      toggleLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation(); // Предотвращаем всплытие, чтобы клик не закрыл список сразу
          const list = this.closest('.footer__col').querySelector('.footer__col-list');
          
          // Закрываем все открытые списки перед открытием нового
          document.querySelectorAll('.footer__col-list.active').forEach(openList => {
            if (openList !== list) {
              openList.classList.remove('active');
            }
          });
          
          list.classList.toggle('active');
        });
      });

      // Закрываем список при клике вне его области
      document.addEventListener('click', function(e) {
        if (!e.target.closest('.footer__col-list') && !e.target.closest('.footer__toggle')) {
          document.querySelectorAll('.footer__col-list.active').forEach(list => {
            list.classList.remove('active');
          });
        }
      });
    } else {
      toggleLinks.forEach(link => {
        link.removeEventListener('click', handleToggle);
      });
    }
  }

  handleToggle();
  window.addEventListener('resize', handleToggle);
});

// product

const container = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.slide');

let offset = 0;
let slideID = 0;

setInterval (() => {
  offset = slides[0].offsetWidth;

  container.style.transition = "left ease-in-out 500ms";
  container.style.left = -offset + 'px';

  setTimeout (() => {
    container.style.transition = "none";
    slides[slideID].style.order = slides.length - 1;
    container.style.left = 0;
    slideID++;

    if(slideID === slides.length) {
      slideID = 0;
      slides.forEach(slide => {
        slide.style.order = "initial";
      });
    }
  }, 500);
}, 3000);

//  keybord

const searchInput = document.getElementById('searchInput');
const suggestionButtons = document.querySelectorAll('.keyboard__search-item');


suggestionButtons.forEach(button => {
  button.addEventListener('click', () => {
    searchInput.value = button.textContent;
  });
});

})()