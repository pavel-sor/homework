
(function() {

  //Бургер

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


// Слайдер
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
})()