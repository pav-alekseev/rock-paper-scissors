import readlineSync from 'readline-sync';
import { generateRandomNumber } from '../utilities';

const shapes = ['rock', 'paper', 'scissors'];

const playersTurn = (choices) => {
  const indexOfChoice = readlineSync.keyInSelect(choices, 'Your choice?');
  return choices[indexOfChoice];
};

const computersTurn = choices => choices[generateRandomNumber(0, choices.length)];

const playRound = (player, computer) => {
  if (player === computer) {
    return 0;
  }

  const computerCovering = shapes[(shapes.indexOf(computer) + 1) % shapes.length];
  return player === computerCovering ? 1 : -1;
};

export default playRound;
