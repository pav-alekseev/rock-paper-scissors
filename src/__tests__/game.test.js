import { players, playRound } from '../game';

test('Check the condition of the game', () => {
  expect(playRound('rock', 'scissors')).toBe(players.player);
  expect(playRound('rock', 'rock')).toBeNull();
  expect(playRound('rock', 'paper')).toBe(players.computer);
  expect(playRound('scissors', 'scissors')).toBeNull();
  expect(playRound('scissors', 'rock')).toBe(players.computer);
  expect(playRound('scissors', 'paper')).toBe(players.player);
  expect(playRound('paper', 'scissors')).toBe(players.computer);
  expect(playRound('paper', 'rock')).toBe(players.player);
  expect(playRound('paper', 'paper')).toBeNull();
});
