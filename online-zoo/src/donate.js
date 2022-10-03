import './sass/main-page2.scss';

const donateOption = document.querySelectorAll('.donate__amount-range-container');
const donatePrice = document.querySelectorAll('.donate__price')
const donateRangeContainer = document.querySelector('.donate__amount-range');

for (let i = 0; i < donateOption.length; i++) {
    donateOption[i].addEventListener('click', () => {
        for (let i = 0; i < donateOption.length; i++) {
            donatePrice[i].classList.remove('donate__price--active');
        }
        donatePrice[i].classList.add('donate__price--active');
    })
  //  if (!donatePrice[i].classList.contains('donate__price--active')) {
  //      donatePrice[5].classList.add('donate__price--active')
  //  }
}
