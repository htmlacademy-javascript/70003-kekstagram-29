import { VISUAL_CONFIG } from './constants.js';

const sliderContainerElement = document.querySelector(
  '.img-upload__effect-level'
);
const sliderElement = document.querySelector('.effect-level__slider');
const hideInputValueElement = document.querySelector('.effect-level__value');
const uploadImgElement = document.querySelector('.img-upload__preview img');
const filterListElement = document.querySelector('.effects__list');

const defaultEffect = VISUAL_CONFIG.none;

noUiSlider.create(sliderElement, {
  range: {
    min: defaultEffect.min,
    max: defaultEffect.max,
  },
  start: defaultEffect.max,
  step: defaultEffect.step,
  connect: 'lower',
});

const hideSlider = () => sliderContainerElement.classList.add('hidden');
const showSlider = () => sliderContainerElement.classList.remove('hidden');

export const resetVisual = () => {
  uploadImgElement.style.filter = '';
  hideSlider();
};

hideSlider();

const updateSliderOptions = (style) => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: VISUAL_CONFIG[style].min,
      max: VISUAL_CONFIG[style].max,
    },
    start: VISUAL_CONFIG[style].max,
    step: VISUAL_CONFIG[style].step,
  });

  if (VISUAL_CONFIG[style] === defaultEffect) {
    resetVisual();
  } else {
    showSlider();
  }
};

const onEffectChange = (effectName, filterName) => {
  hideInputValueElement.value = sliderElement.noUiSlider.get();
  uploadImgElement.style.filter = `${effectName}(${hideInputValueElement.value}${VISUAL_CONFIG[filterName].unit})`;
};

filterListElement.addEventListener('change', (evt) => {
  const targetInput = evt.target.closest('input[type="radio"]');
  if (!targetInput) {
    return false;
  } else {
    const filterName = targetInput.getAttribute('id').split('-')[1];
    const effectName = VISUAL_CONFIG[filterName].effect;
    sliderElement.noUiSlider.on('update', () => onEffectChange(effectName, filterName));
    updateSliderOptions(filterName);
  }
});
