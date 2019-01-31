import { chooseElement, getRandomElement } from './utilities';

const shapes = ['rock', 'paper', 'scissors'];

const playRound = (player, computer) => {
  if (player === computer) {
    return 0;
  }

  const computerCovering = shapes[(shapes.indexOf(computer) + 1) % shapes.length];
  return player === computerCovering ? 1 : -1;
};

export default playRound;
