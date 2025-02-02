// Получаем элементы DOM
const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.querySelector(".close");

// Открываем модальное окно при нажатии на кнопку
openModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

// Закрываем модальное окно при нажатии на крестик
closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Закрываем модальное окно при клике вне его области
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Закрываем модальное окно при нажатии на Escape
window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.style.display === "block") {
        modal.style.display = "none";
    }
});
