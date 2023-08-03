import { debounce } from '../utils/debounce.js';

const container = document.querySelector('.pictures');

const creatingThumbnails = (item) => {
  const template = document
    .querySelector('#picture')
    .content.querySelector('.picture');
  const img = template.cloneNode(true);
  img.querySelector('.picture__img').src = item.url;
  img.querySelector('.picture__img').alt = item.description;
  img.querySelector('.picture__likes').textContent = item.likes;
  img.querySelector('.picture__comments').textContent = item.comments.length;
  img.dataset.thumbnailId = item.id;
  return img;
};

const renderThumbnailsOriginal = (picturesData) => {
  const documentFragment = document.createDocumentFragment();
  picturesData.forEach((item) => {
    documentFragment.append(creatingThumbnails(item));
  });
  container.querySelectorAll('.picture').forEach((elem) => elem.remove());
  container.append(documentFragment);
};

const renderThumbnails = debounce(renderThumbnailsOriginal, 500);
export { renderThumbnailsOriginal, renderThumbnails };
