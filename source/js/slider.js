const MAX_WIDTH = 100;
const MIN_WIDTH = 0;

const range = document.querySelector('.range');
const rangeElement = range.querySelector('.range__scale');
const rangeInput = range.querySelector('.range__input');
const beforeButton = range.querySelector('.range__button--before');
const afterButton = range.querySelector('.range__button--after');
const imgBefore = document.querySelector('.example__cat-before');
const imgAfter = document.querySelector('.example__cat-after');

noUiSlider.create(rangeElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 50,
  step: 1,
});

rangeElement.noUiSlider.on('update', () => {
  rangeInput.value = rangeElement.noUiSlider.get();
  imgAfter.style.width = `${rangeInput.value}%`;
  imgBefore.style.width = `${MAX_WIDTH - rangeInput.value}%`;
});

if (window.innerWidth < 768) {
  rangeElement.noUiSlider.updateOptions((rangeElement, {
    range: {
      min: 0,
      max: 100,
    },
    start: 0,
    step: 1,
  }));
}

beforeButton.addEventListener('click', () => {
  imgBefore.style.width = `${MAX_WIDTH}%`;
  imgAfter.style.width = `${MIN_WIDTH}%`;
});

afterButton.addEventListener('click', () => {
  imgAfter.style.width = `${MAX_WIDTH}%`;
  imgBefore.style.width = `${MIN_WIDTH}%`;
});
