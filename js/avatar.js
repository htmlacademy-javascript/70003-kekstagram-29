const inputUpload = document.querySelector('.img-upload__input');
const preview = document.querySelector('.img-upload__preview > img');
const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const effectsPreviews = document
  .querySelector('.effects__list')
  .querySelectorAll('.effects__preview');

inputUpload.addEventListener('change', () => {
  const file = inputUpload.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    preview.src = URL.createObjectURL(file);

    effectsPreviews.forEach((element) => {
      element.style.backgroundImage = `url('${preview.src}')`;
    });
  }
});

