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

    // Модалка

    const modal = document.querySelector('.modal');
    const modalButton = document.querySelector('.about__img-button');
    
    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(e) {
      e.preventDefault()
      document.body.classList.toggle('body--opened-modal')
    }

    function closeModal(e) {
      e.preventDefault()

      const target = e.target

      if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
        document.body.classList.remove('body--opened-modal')
      }
    }

    // Табы
// создаем переменную tabControls с помощью document.querySelector
// прописываем класс .tab-controls
///    const tabControls = document.querySelector('.tab-controls')
// далее делегирование событий по элементу tabControls
// чтобы обработать клики на нем, добавляем слушателей событий
// .addEventListener 'click' и добавляем функцию переключить
// вкладку toggleTab
///    tabControls.addEventListener('click', toggleTab)
// обьявляем функцию toggleTab через event
///  function toggleTab(e) {
// далее добовляем кнопку переключения по вкладке tabControls
// далее через e.target.closest проверяем есть ли родитель с 
// клссом tab-controls__link
///        const tabControl = e.target.closest('.tab-controls__link')
//далее проверяе если у нас нет этого элемента tabControls
// то функция прекращает действие return
///        if (!tabControl) return
        // если мы всетаки тыкнули на эту ссылку, то отменяем 
// preventDefault дефолтное поведение ссылки
///        e.preventDefault()
///        if (tabControl.classList.contains('tab-controls__link--active')) return
// при клике обращаемся к tabControls и обращаемся к атрибут
// href для проверки console.log(tabControls.href);
// видим что ссылка показывает весь путь http://127.0.0.1:5500/index.html#tab1
//чтобы корректно показывал прописываем 
// console.log(tabControl.getAttribute('href'));
// и получаем селектор этого класса #tab2
// далее выводим этотт селетор в отдельную строчку
///        const tabContentID = tabControl.getAttribute('href')
// далее навесим класс show на вкладку на которую нажимаем
//document.querySelector(tabContentID).classList.add('tab-content--show')
// при этом у нас повторяются классы при нажатии
// перед тем как установить этот класс куда либо,
// нужно проверить есть ли он на коком элементе
///        document.querySelector('.tab-content--show').classList.remove('tab-content--show')
///        document.querySelector(tabContentID).classList.add('tab-content--show')
// а теперь сделаем переключение модификатора по элементам Недели
///       document.querySelector('.tab-controls__link--active').classList.remove('tab-controls__link--active')
///        tabControl.classList.add('tab-controls__link--active')
// далее сделаем так чтобы скрип не повторялся на нажатой вкладке
// нужно чтобы он срабатывал только по нажатию, для этого в if добавим
// if (tabControl.classList.contains('tab-controls__link--active')) return
// далее немного сократим и обьявим переменные

const tabControls = document.querySelector('.tab-controls')

tabControls.addEventListener('click', toggleTab)

function toggleTab(e) {

      const tabControl = e.target.closest('.tab-controls__link')

      if (!tabControl) return
      e.preventDefault()
      if (tabControl.classList.contains('tab-controls__link--active')) return

      const tabContentID = tabControl.getAttribute('href')
      const tabContent = document.querySelector(tabContentID)
      const activeControl = document.querySelector('.tab-controls__link--active')
      const activeContent = document.querySelector('.tab-content--show')
      
      activeControl.classList.remove('tab-controls__link--active')
      activeContent.classList.remove('tab-content--show')

      tabControl.classList.add('tab-controls__link--active')
      tabContent.classList.add('tab-content--show')
      
}

// Аккордион

const accordionList = document.querySelectorAll('.accordion-list');

accordionList.forEach(el => {

  el.addEventListener('click', (e) => {

    const accordionList = e.currentTarget
    const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened');
    const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')
   
    const accordionControl = e.target.closest('.accordion-list__control');
    if (!accordionControl) return
    const accordionItem = accordionControl.parentElement;
    const accordionContent = accordionControl.nextElementSibling;

    if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
      accordionOpenedItem.classList.remove('accordion-list__item--opened');
      accordionOpenedContent.style.maxHeight = null;
    }

    accordionItem.classList.toggle('accordion-list__item--opened');

    if (accordionItem.classList.contains('accordion-list__item--opened')) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      } else {
        accordionContent.style.maxHeight = null;
      }

  });

});

// Слайдер глерея

const swiper = new Swiper('.gallery__slider', {
  spaceBetween: 15,
  slidesPerView: 1.5,



  pagination: {
    el: '.gallery__pagination',
    type: 'fraction'
  },

  // Navigation arrows
  navigation: {
    nextEl: '.gallery__next',
    prevEl: '.gallery__prev',
  },

  breakpoints: {
    321: {
      slidesPerView: 2,
    },
    601: {
      spaceBetween: 15,
      slidesPerView: 3,
    },
    801: {
      spaceBetween: 32,
    },
    1101: {
      slidesPerView: 4,
    }
  }

});

    })()
