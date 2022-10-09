import './sass/main-page2.scss';
import './index.js';

const donateOption = document.querySelectorAll('.donate__amount-range-input');
const donatePrice = document.querySelectorAll('.donate__price')
const donateInput = document.querySelector('.donate__amount-input');
const donateLabel = document.querySelectorAll('.donate__amount-range-label')

function setOption() {
    for (let i = 0; i < donateOption.length; i++) {
        donateOption[i].addEventListener('click', () => {
            for (let i = 0; i < donateOption.length; i++) {
                donatePrice[i].classList.remove('donate__price--active');
                donateLabel[i].classList.remove('donate__amount-range-label--active');
            }
            donatePrice[i].classList.add('donate__price--active');
            donateLabel[i].classList.add('donate__amount-range-label--active');
            donateInput.value = donateOption[i].id;
        })
    }
}
setOption()
if (donateInput) {
    donateInput.oninput = function () {
        this.value = this.value.substr(0, 4);
        let inputValue = this.value;
        for (let i = 0; i < donateOption.length; i++) {
            if (inputValue == donateOption[i].id) {
                for (let i = 0; i < donateOption.length; i++) {
                    donatePrice[i].classList.remove('donate__price--active');
                    donateLabel[i].classList.remove('donate__amount-range-label--active');
                }
                donatePrice[i].classList.add('donate__price--active');
                donateLabel[i].classList.add('donate__amount-range-label--active');
            }
        }
    }
}