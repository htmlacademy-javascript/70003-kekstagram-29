import { getRandomInteger } from './get-random-integer.js';
import { messageData, descriptionData, nameData } from '../data/rendom-data.js';

const createComments = () => ({
  id: Math.random(),
  avatar: `../img/avatar-${getRandomInteger(1, 6)}.svg`,
  message:
    getRandomInteger(0, 1) === 1
      ? `true ${messageData[getRandomInteger(0, messageData.length - 1)]}`
      : `false ${messageData[getRandomInteger(0, messageData.length - 1)]} ${
        messageData[getRandomInteger(0, messageData.length - 1)]
      }`,
  name: nameData[(0, getRandomInteger(0, nameData.length - 1))],
});

const createObject = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: descriptionData[getRandomInteger(0, descriptionData.length - 1)],
  likes: getRandomInteger(15, 200),
  comments: Array.from({ length: getRandomInteger(0, 30) }, createComments),
});
const generateObjects = () =>
  Array.from({ length: getRandomInteger(1, 25) }, (_, index) =>
    createObject(index + 1)
  );

export { generateObjects };
