const showAlert = (message) => {
  const showAlertElement = document.createElement('div');
  showAlertElement.classList.add('show-alert-element-styles');
  showAlertElement.textContent = message;
  document.body.append(showAlertElement);

  setTimeout(() => {
    showAlertElement.parentNode.removeChild(showAlertElement);
  }, 5000);
};

function hideMessage() {
  document.removeEventListener('keydown', onDocumentKeydown);
}
function onDocumentKeydown(event) {
  const message =
    document.querySelector('.success') || document.querySelector('.error');
  if (event.key === 'Escape') {
    event.preventDefault();
    hideMessage();
    message.remove();
  }
}

const showFormSubmissionErrorMessage = () => {
  document.addEventListener('keydown', onDocumentKeydown);
  const template = document
    .querySelector('#error')
    .content.querySelector('.error');
  const container = template.cloneNode(true);
  container.querySelector('.error__button').addEventListener('click', () => {
    container.remove();
  });
  container.addEventListener('click', (event) => {
    if (event.target.classList.contains('error')) {
      container.remove();
    }
  });
  return document.body.append(container);
};

const showFormSubmissionSuccessMessage = () => {
  document.addEventListener('keydown', onDocumentKeydown);
  const template = document
    .querySelector('#success')
    .content.querySelector('.success');
  const container = template.cloneNode(true);
  container.querySelector('.success__button').addEventListener('click', () => {
    container.remove();
  });
  container.addEventListener('click', (event) => {
    if (event.target.classList.contains('success')) {
      container.remove();
    }
  });
  return document.body.append(container);
};

export {
  showAlert,
  showFormSubmissionErrorMessage,
  showFormSubmissionSuccessMessage,
};
