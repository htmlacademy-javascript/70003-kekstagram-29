import { createHtmlElement } from '../utils/create-html-element.js';

const createCommentBigPicture = (commentItem) => {
  const documentFragment = document.createDocumentFragment();
  commentItem.forEach((element) => {
    const li = createHtmlElement({
      element: 'li',
      htmlClass: 'social__comment',
    });
    const img = createHtmlElement({
      element: 'img',
      htmlClass: 'social__picture',
      attr: {
        width: '35',
        height: '35',
        src: element.avatar,
        alt: element.name,
      },
    });
    const p = createHtmlElement({
      element: 'p',
      htmlClass: 'social__text',
      text: element.message,
    });
    li.append(img);
    li.append(p);
    documentFragment.append(li);
  });
  return documentFragment;
};

const closeBigPicture = (event) => {
  const closeElement = document.querySelector('.big-picture');
  if (event.key === 'Escape') {
    closeElement.classList.add('hidden');
    deleteListener();
  }
  closeElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
};
function deleteListener() {
  document.removeEventListener('keydown', closeBigPicture);
}

const showBigPicture = (item) => {
  const bigPicture = document.querySelector('.big-picture');
  bigPicture.querySelector('.big-picture__img').firstElementChild.src =
    item.url;
  bigPicture.querySelector('.likes-count').textContent = item.likes;
  bigPicture.querySelector('.comments-count').textContent =
    item.comments.length;
  bigPicture.querySelector('.social__comments').innerHTML = '';
  bigPicture
    .querySelector('.social__comments')
    .append(createCommentBigPicture(item.comments));
  bigPicture.querySelector('.social__caption').textContent = item.description;
  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');
  bigPicture.classList.remove('hidden');
  bigPicture
    .querySelector('.big-picture__cancel')
    .addEventListener('click', closeBigPicture);
  document.addEventListener('keydown', closeBigPicture);
  document.body.classList.add('modal-open');
};

export { showBigPicture };
