import { renderThumbnails } from './creating-thumbnails.js';
import { showBigPicture } from './show-big-picture.js';

const container = document.querySelector('.pictures');

const renderGellary = (pictures) => {
  container.addEventListener('click', (event) => {
    const thumbnail = event.target.closest('[data-thumbnail-id]');
    if (!thumbnail) {
      return;
    }
    event.preventDefault();
    const picture = pictures.find(
      (item) => item.id === +thumbnail.dataset.thumbnailId
    );
    showBigPicture(picture);
  });
  renderThumbnails(pictures, container);
};

export { renderGellary };
