// modal

// (() => {
//     const refs = {
//         openModalBtn: document.querySelector("[data-modal-open-sign]"),
//         closeModalBtn: document.querySelector("[data-modal-close-sign]"),
//         modal: document.querySelector("[data-modal-sign]"),
//     };

//     refs.openModalBtn.addEventListener("click", toggleModal);
//     refs.closeModalBtn.addEventListener("click", toggleModal);

//     function toggleModal() {
//         refs.modal.classList.toggle("is-hidden");
//     }
// })();

// scrol
// window.onload = () => {
//     const scrolbtn = document.querySelector('.isshowbtn');

//     window.onscroll = () => {
//         if (window.scrollY > 500) {
//             scrolbtn.classList.remove('isshowbtn__hide')
//         } else if (window.scrollY < 500) {
//             scrolbtn.classList.add('isshowbtn__hide')
//         }
//     };

//     scrolbtn.onclick = (evt) => {
//         window.scrollTo({
//             top: 0,
//             behavior: "smooth"
//         });
//     };
// }





// counter
// let x = 0;
// const counter = document.querySelector('.countBtn');
// const shopList = document.querySelector('#hide');

// const acum = document.querySelector('.acum');

// function count() {
// 	x++;

//     if (x > 0) {
//         shopList.classList.remove('is-hiden')
//         console.log('спрацювало')
//     }

//     console.log(x)

// 	acum.innerHTML = x;
// }

// counter.addEventListener('click', (evt) => {
// count();

// })









// при вході на сайт визивається функція яка перевіряє чи є щось в локал сторедж
// перевіряє значення {key: dark} і додає класси відповідно за результатами перевірки

const LOCAL_STORAGE_KEY = 'theme';

const refs = {
    btnChange: document.querySelector('.theme-switcher-input'),

    hBook: document.querySelector('.book-title'),
    aBook: document.querySelector('.author-name'),
    dBook: document.querySelector('.modal-book-description'),

    primary: document.querySelector('.sign-up-btn'),
    aBtn: document.querySelector('.current'),
    bgc: document.querySelector('body'),
}

const curentTheme = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

function changetheme() {
    refs.btnChange.classList.toggle(".dark")
    refs.hBook.classList.toggle(".dark")
    refs.aBook.classList.toggle(".dark")

    // refs.dBook.classList.toggle(".dark")
    // refs.aBtn.classList.toggle(".dark")
}

// if (curentTheme = 'dark') {
//     changetheme()
// }

// Декларуємо колбек для евента натискання на кнопку
const handleClick = () => {
    console.log("click event listener callback");
    // перевіряємо чи у чекбокса є класс темноє теми, так - передаємо в локал сторедж
    // записуємо обьєкт в локал сторедж з значенням дарк {key: dark}
    // перевіряємо чи є в локал сторедж темна тема, якщо є то додаємо класи на елементи розмітки, якщо ні то прибираємо
    changetheme()

};

// евент та визов колбека
refs.btnChange.addEventListener("click", handleClick);