const creatingThumbnails = (item) => {
  const template = document
    .querySelector('#picture')
    .content.querySelector('.picture');
  const container = template.cloneNode(true);
  container.querySelector('.picture__img').src = item.url;
  container.querySelector('.picture__img').alt = item.description;
  container.querySelector('.picture__likes').textContent = item.likes;
  container.querySelector('.picture__comments').textContent = item.comments.length;
  container.dataset.thumbnailId = item.id;
  return container;
};

const renderThumbnails = (picturesData, container) => {
  const documentFragment = document.createDocumentFragment();
  picturesData.forEach((item) => {
    documentFragment.append(creatingThumbnails(item));
  });
  return container.append(documentFragment);
};

export { renderThumbnails };
