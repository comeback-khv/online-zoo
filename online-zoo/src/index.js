// Import
import './sass/main.scss';
const headerNavList = document.querySelector('.header__nav-list');
const headerTitle = document.querySelector('.header__title');
const headerCopyright = document.querySelector('.header-copyright');
const burger = document.querySelector('.burger');
const xIconBurger = document.querySelector('.header__x-icon');
const body = document.querySelector('.body');
const arrowLeft = document.querySelector('.arrows__container-left');
const arrowRight = document.querySelector('.arrows__container-right');
const cardsList = document.querySelector('.pets__list');
const petsContainer = document.querySelector('.pets__container');

// Menu
function openMenu() {
  headerNavList.classList.add('header__nav-list--active');
  headerTitle.classList.add('header__title--active');
  headerCopyright.classList.add('header-copyright--active');
  xIconBurger.classList.add('x-icon--active');
  body.classList.add('body--active');
}

function closeMenu() {
  headerNavList.classList.remove('header__nav-list--active');
  headerTitle.classList.remove('header__title--active');
  headerCopyright.classList.remove('header-copyright--active');
  xIconBurger.classList.remove('x-icon--active');
  body.classList.remove('body--active');
}
burger.addEventListener('click', openMenu);
xIconBurger.addEventListener('click', closeMenu);

document.addEventListener('click', (event => {
  if (event.target.classList.contains('body--active')) {
    closeMenu();
    closeTestimonial();
  }
}))

//Pets slider

let cards = [
  { name: 'Giant pandas', location: 'Native to Southwest China', picture: './assets/images/pets-giant-pandas.jpg', class: 'pets__item--herbivore' },
  { name: 'Eagles', location: 'Native to South America', picture: './assets/images/pets-eagles.jpg', class: 'pets__item--carnivore' },
  { name: 'Gorillas', location: 'Native to Congo', picture: './assets/images/pets-gorillas.jpg', class: 'pets__item--herbivore' },
  { name: 'Two-toed Sloth', location: 'Mesoamerica, South America', picture: './assets/images/pets-two-toed-sloth.jpg', class: 'pets__item--herbivore' },
  { name: 'Cheetahs', location: 'Native to Africa', picture: './assets/images/pets-cheetahs.jpg', class: 'pets__item--carnivore' },
  { name: 'Penguins', location: 'Native to South America', picture: './assets/images/pets-penguins.jpg', class: 'pets__item--carnivore' },
  { name: 'Alligators', location: 'Native to Southwest China', picture: './assets/images/pets-alligators.jpg', class: 'pets__item--carnivore' },
  { name: 'Gorillas', location: 'Native to Congo', picture: './assets/images/pets-gorillas2.jpg', class: 'pets__item--herbivore' },
]

function randomCards() {
  return cards.sort(() => Math.random() - 0.5)
}

function createNewCards() {
  for (let i = 0; i <= cards.length; i++) {
    let card = document.createElement('li');
    let name = document.createElement('p');
    let location = document.createElement('p');
    let picture = document.createElement('img');
    name.innerHTML = cards[i].name;
    location.innerHTML = cards[i].location;
    picture.setAttribute('src', `${cards[i].picture}`)
    picture.setAttribute('width', 364);
    picture.setAttribute('height', 366);
    card.classList.add('pets__item');
    card.classList.add(cards[i].class)
    name.classList.add('pets__name')
    location.classList.add('pets__text')
    picture.classList.add('pets__img')
    card.appendChild(picture);
    card.appendChild(name);
    card.appendChild(location);
    cardsList.appendChild(card);
  }
}

function createNewCardList(animSide, tranformSide) {
  let cardsListNew = document.createElement('ul');
  cardsListNew.classList.add('pets__list');
  cardsListNew.classList.add(animSide);
  cardsListNew.classList.add(tranformSide);
  petsContainer.appendChild(cardsListNew);
  for (let i = 0; i <= cards.length; i++) {
    let card = document.createElement('li');
    let name = document.createElement('p');
    let location = document.createElement('p');
    let picture = document.createElement('img')
    name.innerHTML = cards[i].name;
    location.innerHTML = cards[i].location;
    picture.setAttribute('src', `${cards[i].picture}`);
    picture.setAttribute('width', 364);
    picture.setAttribute('height', 366);
    card.classList.add('pets__item');
    card.classList.add(cards[i].class);
    name.classList.add('pets__name')
    location.classList.add('pets__text')
    picture.classList.add('pets__img')
    card.appendChild(picture);
    card.appendChild(name);
    card.appendChild(location);
    cardsListNew.appendChild(card);
    setTimeout(function () {
      cardsListNew.remove();
    }, 2000)
  }
}
function deleteOldCardList() {
  for (let i = 0; i <= 7; i++) {
    cardsList.removeChild(cardsList.firstChild);
  }
}
function moveRight() {
  arrowRight.removeEventListener('click', moveRight)
  arrowLeft.removeEventListener('click', moveLeft)
  randomCards();
  cardsList.classList.add('animRight');
  createNewCardList('animRight', 'transformRight');
}

function moveLeft() {
  arrowRight.removeEventListener('click', moveRight)
  arrowLeft.removeEventListener('click', moveLeft)
  randomCards()
  cardsList.classList.add('animLeft');
  createNewCardList('animLeft', 'transformLeft');
}
if (arrowRight && arrowLeft) {
  arrowRight.addEventListener('click', moveRight);
  arrowLeft.addEventListener('click', moveLeft)
  cardsList.addEventListener('animationend', () => {
    arrowRight.addEventListener('click', moveRight)
    arrowLeft.addEventListener('click', moveLeft)
    cardsList.classList.remove('animLeft');
    cardsList.classList.remove('animRight');
    deleteOldCardList();
    createNewCards();
  })
}
// Testimonials popup
const testimonialItem = document.querySelectorAll('.testimonials__item');
const testimonialText = document.querySelectorAll('.testimonials__item-text');
const xIconTestimonial = document.querySelectorAll('.testimonials__item-x-icon')

let isTestimonial = false;
function openTestimonial() {
  for (let i = 0; i < testimonialItem.length; i++) {
    testimonialItem[i].addEventListener('click', () => {
      if (isTestimonial == false) {
        isTestimonial = true
        testimonialItem[i].classList.add('testimonials__item--active')
        testimonialText[i].classList.add('testimonials__item-text--active');
        xIconTestimonial[i].style.opacity = '1';
        body.classList.add('body--active');
        console.log('Кликаем на итем')
      }
    })
  }
}
openTestimonial();
function closeTestimonial() {
  for (let i = 0; i < testimonialItem.length; i++) {
    testimonialItem[i].classList.remove('testimonials__item--active')
    testimonialText[i].classList.remove('testimonials__item-text--active');
    xIconTestimonial[i].style.opacity = '0';
    body.classList.remove('body--active');
    setTimeout(function () {
      isTestimonial = false;
    }, 1)
  }
  console.log('Закрываем')
}
if (xIconTestimonial) {
  if (xIconTestimonial) {
    for (let i = 0; i < xIconTestimonial.length; i++) {
      xIconTestimonial[i].addEventListener('click', closeTestimonial);
    }
  }

  //Testimonials slider
  const testimonialRange = document.querySelector('.testimonials__input-range');
  if (testimonialRange) {
    testimonialRange.oninput = function () {
      let sliderValue = this.value;
      for (let i = 0; i < testimonialItem.length; i++) {
        let width = (window.getComputedStyle(testimonialItem[i]).width).slice(0, 3)
        testimonialItem[i].style.transform = 'translateX(' + `${(-width - 30) * sliderValue}px`;
        testimonialItem[i].style.transition = '1s';
      }
    }
    let isEvent = false;
    window.onresize = () => {
      if (document.documentElement.clientWidth < 1224 && isEvent == true) {
        testimonialRange.value = 0;
        for (let i = 0; i < testimonialItem.length; i++) {
          testimonialItem[i].style.removeProperty('transform');
        }
        isEvent = false;
      }
      if (document.documentElement.clientWidth > 1224 && isEvent == false) {
        testimonialRange.value = 0;
        for (let i = 0; i < testimonialItem.length; i++) {
          testimonialItem[i].style.removeProperty('transform');
        }
        isEvent = true;
      }
      if (document.documentElement.clientWidth < 999) {
        testimonialRange.value = 0;
        for (let i = 0; i < testimonialItem.length; i++) {
          testimonialItem[i].style.removeProperty('transform');
        }
      }
    }
  }
}