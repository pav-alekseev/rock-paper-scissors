import { playRound } from '../game';

test('Check the condition of the game', () => {
  const playerWin = 1;
  const draw = 0;
  const computerWin = -1;

  expect(playRound('rock', 'scissors')).toBe(playerWin);
  expect(playRound('rock', 'rock')).toBe(draw);
  expect(playRound('rock', 'paper')).toBe(computerWin);
  expect(playRound('scissors', 'scissors')).toBe(draw);
  expect(playRound('scissors', 'rock')).toBe(computerWin);
  expect(playRound('scissors', 'paper')).toBe(playerWin);
  expect(playRound('paper', 'scissors')).toBe(computerWin);
  expect(playRound('paper', 'rock')).toBe(playerWin);
  expect(playRound('paper', 'paper')).toBe(draw);
});
