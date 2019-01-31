import readlineSync from 'readline-sync';

const generateNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

const chooseElement = (array) => {
  const indexOfChoice = readlineSync.keyInSelect(array, 'Your choice?');
  return array[indexOfChoice];
};

const getRandomElement = array => array[generateNumber(0, array.length)];

module.exports = { chooseElement, getRandomElement };
