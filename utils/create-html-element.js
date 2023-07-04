const createHtmlElement = ({ element, htmlClass, text, attr }) => {
  const newElement = document.createElement(element);
  newElement.classList.add(htmlClass);

  if (text) {
    newElement.textContent = text;
  }
  if (attr) {
    for (const key in attr) {
      newElement.setAttribute(key, attr[key]);
    }
  }
  return newElement;
};

export { createHtmlElement };
