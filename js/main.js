import { renderGellary } from './gallary.js';
import './form.js';
import { getData } from './api.js';
import { showAlert } from '../utils/show-alert.js';
import { initFilters } from './sorting.js';

getData()
  .then((picture) => {
    initFilters(picture);
    renderGellary(picture);
  })
  .catch((err) => {
    showAlert(err);
  });
