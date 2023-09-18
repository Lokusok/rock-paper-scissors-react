import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

import { ChoiceEnum, WinnerEnum } from '../../types';
import getRandomChoice from '../../utils/getRandomChoice';
import getWinner from '../../utils/getWinner';

import { RootState } from '../store';

type Player = {
  choice: ChoiceEnum | null;
};

interface IGameSlice {
  player1: Player;
  player2: Player;
  timer: number;
  isFinished: boolean;
  winner: WinnerEnum | null;
}

const initialState: IGameSlice = {
  player1: {
    choice: null,
  },

  player2: {
    choice: null,
  },
  timer: 10,
  isFinished: false,
  winner: null,
};

export const decreaseTimerAndCheckStatus = createAsyncThunk<
  Promise<void>,
  void,
  { state: RootState }
>('game/deacreaseTimerAndCheckStatus', async (_, { dispatch, getState }) => {
  await dispatch(decreaseTimer());

  if (getState().game.timer === 0) {
    await dispatch(setIsFinished(true));
    await dispatch(choiceBoth({ userValue: getRandomChoice() }));
  }
});

export const choiceBoth = createAsyncThunk<
  Promise<void>,
  { userValue: ChoiceEnum },
  { state: RootState }
>('game/choiceBoth', async ({ userValue }, { dispatch, getState }) => {
  await dispatch(setChoicePlayer1(userValue));
  await dispatch(setChoicePlayer2(getRandomChoice()));
  await dispatch(setIsFinished(true));
  await dispatch(defineWinner(getWinner(getState())));
});

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setChoicePlayer1(state, action: PayloadAction<ChoiceEnum>) {
      state.player1.choice = action.payload;
    },

    setChoicePlayer2(state, action: PayloadAction<ChoiceEnum>) {
      state.player2.choice = action.payload;
    },

    decreaseTimer(state) {
      state.timer -= 1;
    },

    setIsFinished(state, action: PayloadAction<boolean>) {
      state.isFinished = action.payload;
    },

    restartGame() {
      return {
        ...initialState,
      };
    },

    defineWinner(state, action: PayloadAction<WinnerEnum>) {
      state.winner = action.payload;
    },
  },
});

export const selectIsFinished = (state: RootState) => state.game.isFinished;
export const selectWinner = (state: RootState) => state.game.winner;
export const selectPlayer1Choice = (state: RootState) =>
  state.game.player1.choice;
export const selectPlayer2Choice = (state: RootState) =>
  state.game.player2.choice;
export const selectTimer = (state: RootState) => state.game.timer;

export const {
  setChoicePlayer1,
  setChoicePlayer2,
  decreaseTimer,
  setIsFinished,
  restartGame,
  defineWinner,
} = gameSlice.actions;

export default gameSlice.reducer;
