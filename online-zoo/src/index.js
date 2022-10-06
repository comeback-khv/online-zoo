// Импорт
import './sass/main.scss';

const headerNavList = document.querySelector('.header__nav-list');
const headerTitle = document.querySelector('.header__title');
const headerCopyright = document.querySelector('.header-copyright');
const burger = document.querySelector('.burger');
const xIcon = document.querySelector('.x-icon');
const body = document.querySelector('.body');
const bodyActive = document.querySelector('.body--active');

function openMenu() {
    headerNavList.classList.add('header__nav-list--active');
    headerTitle.classList.add('header__title--active');
    headerCopyright.classList.add('header-copyright--active');
    xIcon.classList.add('x-icon--active');
    body.classList.add('body--active');
}

function closeMenu() {
    headerNavList.classList.remove('header__nav-list--active');
    headerTitle.classList.remove('header__title--active');
    headerCopyright.classList.remove('header-copyright--active');
    xIcon.classList.remove('x-icon--active');
    body.classList.remove('body--active');
}
burger.addEventListener('click', openMenu);
xIcon.addEventListener('click', closeMenu);
document.addEventListener('click', (event => {
    if (event.target.classList.contains('body--active')) {
        closeMenu();
    }
}))

