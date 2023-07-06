const pictures = document.querySelector('.pictures');

const creatingThumbnails = ({ url, description, likes, comments }) => {
  const template = document
    .querySelector('#picture')
    .content.querySelector('.picture');
  const container = template.cloneNode(true);
  container.querySelector('.picture__img').src = url;
  container.querySelector('.picture__img').alt = description;
  container.querySelector('.picture__likes').textContent = likes;
  container.querySelector('.picture__comments').textContent = comments.length;

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
