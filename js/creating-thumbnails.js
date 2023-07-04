import { showBigPicture } from './show-big-picture.js';

const pictures = document.querySelector('.pictures');

const creatingThumbnails = (item) => {
  const template = document
    .querySelector('#picture')
    .content.querySelector('.picture');
  const container = template.cloneNode(true);
  container.querySelector('.picture__img').src = item.url;
  container.querySelector('.picture__img').alt = item.description;
  container.querySelector('.picture__likes').textContent = item.likes;
  container.querySelector('.picture__comments').textContent = item.comments.length;
  container.addEventListener('click', () => showBigPicture(item));
  return container;
};

const renderThumbnails = (picturesData) => {
  const documentFragment = document.createDocumentFragment();
  picturesData.forEach((item) => {
    documentFragment.append(creatingThumbnails(item));
  });
  return pictures.append(documentFragment);
};

export { renderThumbnails };
