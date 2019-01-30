import readlineSync from 'readline-sync';
import { generateRandomNumber } from '../utilities';

const gameObjects = ['rock', 'paper', 'scissors'];

const playersTurn = (choices) => {
  const indexOfChoice = readlineSync.keyInSelect(choices, 'Your choice?');
  return choices[indexOfChoice];
};
