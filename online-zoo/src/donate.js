import './sass/main-page2.scss';
import './index.js';

const donateOption = document.querySelectorAll('.donate__amount-range-input');
const donatePrice = document.querySelectorAll('.donate__price')
const donateInput = document.querySelector('.donate__amount-input');

function setOption() {
    for (let i = 0; i < donateOption.length; i++) {
        donateOption[i].addEventListener('click', () => {
            for (let i = 0; i < donateOption.length; i++) {
                donatePrice[i].classList.remove('donate__price--active');
            }
            donatePrice[i].classList.add('donate__price--active');
            donateInput.value = donateOption[i].id;
        })
    }
}
setOption()

donateInput.oninput = function () {
    this.value = this.value.substr(0, 4);
    let inputValue= this.value;
    for (let i = 0; i < donateOption.length; i++) {
        if (inputValue == donateOption[i].id) {
            for (let i = 0; i < donateOption.length; i++) {
                donatePrice[i].classList.remove('donate__price--active');
            }
            donatePrice[i].classList.add('donate__price--active');
        }
    }
}


