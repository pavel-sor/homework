(function() {

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

    })()



// (function() {

//   document.addEventListener('click', burgerInit)

//   function burgerInit(e) {

//         const burgerIcon = e.target.closest('.burger-icon')
//         const burgerNavLink = e.target.closest('.nav__link')

//         if (!burgerIcon && !burgerNavLink) return

//         document.body.classList.add('body--opened-menu')

//   }

// })()




// document.addEventListener('DOMContentLoaded', function () {
//   const burgerIcon = document.querySelector('.burger-icon'); // Иконка бургера
//   const nav = document.querySelector('.nav'); // Навигационное меню

//   // Обработчик клика по иконке бургера
//   burgerIcon.addEventListener('click', function (event) {
//     event.preventDefault(); // Предотвращаем стандартное поведение ссылки

//     // Переключаем классы для меню и иконки
//     nav.classList.toggle('nav--active');
//     burgerIcon.classList.toggle('burger-icon--active');
//   });

//   // Закрытие меню при клике вне его области
//   document.addEventListener('click', function (event) {
//     if (!nav.contains(event.target) && !burgerIcon.contains(event.target)) {
//       nav.classList.remove('nav--active');
//       burgerIcon.classList.remove('burger-icon--active');
//     }
//   });
// });