import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ChoiceEnum } from '../../types';

type Player = {
  choice: ChoiceEnum | null;
};

interface IGameSlice {
  player1: Player;
  player2: Player;
}

const initialState: IGameSlice = {
  player1: {
    choice: null,
  },

  player2: {
    choice: null,
  },
};

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
  },
});

export const { setChoicePlayer1, setChoicePlayer2 } = gameSlice.actions;

export default gameSlice.reducer;
