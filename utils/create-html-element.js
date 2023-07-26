const createHtmlElement = (data) => {
  const li = document.createElement('li');
  li.classList.add('social__comment');
  const img = document.createElement('img');
  img.classList.add('social__picture');
  img.setAttribute('width', 35);
  img.setAttribute('height', 35);
  const p = document.createElement('p');
  p.classList.add('social__text');
  img.src = data.avatar;
  img.alt = data.name;
  p.textContent = data.message;
  li.append(img);
  li.append(p);

  return li;
};

export { createHtmlElement };
