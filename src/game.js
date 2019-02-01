/* eslint-disable no-console */
import { chooseElement, getRandomElement } from './utilities';

const shapes = ['rock', 'paper', 'scissors'];

const players = {
  player: Symbol('player'),
  computer: Symbol('computer'),
};

const playRound = (playersShape, computersShape) => {
  if (playersShape === computersShape) {
    return null;
  }

  const computerCovering = shapes[(shapes.indexOf(computersShape) + 1) % shapes.length];
  return playersShape === computerCovering ? players.player : players.computer;
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

    const playerShape = chooseElement(shapes);
    const computerShape = getRandomElement(shapes);

    switch (playRound(playerShape, computerShape)) {
      case players.player:
        console.log(`You won! ${playerShape.toUpperCase()} beats ${computerShape.toUpperCase()}`);
        iter(currentRound + 1, playerScore + 1, computerScore);
        break;
      case players.computer:
        console.log(`You won! ${computerShape.toUpperCase()} beats ${playerShape.toUpperCase()}`);
        iter(currentRound + 1, playerScore, computerScore + 1);
        break;
      default:
        console.log('Draw!');
        iter(currentRound + 1, playerScore, computerScore);
    }
  };

  iter(1, 0, 0);
};

export { players, playRound, game };
