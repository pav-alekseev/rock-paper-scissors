/* eslint-disable no-console */
import { chooseElement, getRandomElement } from './utilities';

const shapes = ['rock', 'paper', 'scissors'];

const playRound = (player, computer) => {
  if (player === computer) {
    return 0;
  }

  const computerCovering = shapes[(shapes.indexOf(computer) + 1) % shapes.length];
  return player === computerCovering ? 1 : -1;
};

const game = (numberOfRounds) => {
  const iter = (currentRound, playerScore, computerScore) => {
    console.log('--------------------------------');
    if (currentRound > numberOfRounds) {
      if (playerScore > computerScore) {
        console.log('Congratulations! You are the winner!');
      } else if (playerScore < computerScore) {
        console.log('Oh no! Computer is the winner! It looks like rise of the machines!');
      } else {
        console.log('Draw! No one is the winner');
      }
      return;
    }

    console.log(`Round ${currentRound}`);
    console.log(`Player: ${playerScore}`);
    console.log(`Computer: ${computerScore}`);

    const player = chooseElement(shapes);
    const computer = getRandomElement(shapes);

    switch (playRound(player, computer)) {
      case 1:
        console.log(`You won! ${player.toUpperCase()} beats ${computer.toUpperCase()}`);
        iter(currentRound + 1, playerScore + 1, computerScore);
        break;
      case -1:
        console.log(`You won! ${computer.toUpperCase()} beats ${player.toUpperCase()}`);
        iter(currentRound + 1, playerScore, computerScore + 1);
        break;
      default:
        console.log('Draw!');
        iter(currentRound + 1, playerScore, computerScore);
    }
  };

  iter(1, 0, 0);
};

export { playRound, game };
