import { RootState } from '../redux/store';
import { ChoiceEnum, WinnerEnum } from '../types';

const getWinner = (state: RootState): WinnerEnum => {
  if (
    state.game.player1.choice === ChoiceEnum.ROCK &&
    state.game.player2.choice === ChoiceEnum.PAPER
  ) {
    return WinnerEnum.PLAYER2;
  } else if (
    state.game.player1.choice === ChoiceEnum.PAPER &&
    state.game.player2.choice === ChoiceEnum.ROCK
  ) {
    return WinnerEnum.PLAYER1;
  } else if (
    state.game.player1.choice === ChoiceEnum.ROCK &&
    state.game.player2.choice === ChoiceEnum.SCISSORS
  ) {
    return WinnerEnum.PLAYER1;
  } else if (
    state.game.player1.choice === ChoiceEnum.SCISSORS &&
    state.game.player2.choice === ChoiceEnum.ROCK
  ) {
    return WinnerEnum.PLAYER2;
  } else if (
    state.game.player1.choice === ChoiceEnum.SCISSORS &&
    state.game.player2.choice === ChoiceEnum.PAPER
  ) {
    return WinnerEnum.PLAYER1;
  } else if (
    state.game.player1.choice === ChoiceEnum.PAPER &&
    state.game.player2.choice === ChoiceEnum.SCISSORS
  ) {
    return WinnerEnum.PLAYER2;
  } else {
    return WinnerEnum.DRAW;
  }
};

export default getWinner;
