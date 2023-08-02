import { renderGellary } from './gallary.js';
import './form.js';
import { getData } from './api.js';
import { showAlert } from '../utils/show-alert.js';

getData()
  .then((picture) => {
    renderGellary(picture);
  })
  .catch((err) => {
    showAlert(err);
  });
