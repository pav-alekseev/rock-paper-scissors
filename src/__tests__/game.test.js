import { play } from '../bin/game';

test('Check the condition of the game', () => {
  const playerWin = 1;
  const draw = 0;
  const computerWin = -1;

  expect(play('rock', 'scissors')).toBe(playerWin);
  expect(play('rock', 'rock')).toBe(draw);
  expect(play('rock', 'paper')).toBe(computerWin);
  expect(play('scissors', 'scissors')).toBe(draw);
  expect(play('scissors', 'rock')).toBe(computerWin);
  expect(play('scissors', 'paper')).toBe(playerWin);
  expect(play('paper', 'scissors')).toBe(computerWin);
  expect(play('paper', 'rock')).toBe(playerWin);
  expect(play('paper', 'paper')).toBe(draw);
});
