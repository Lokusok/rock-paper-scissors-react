import React from 'react';

import { Grid } from '@mui/material';

import Competitor from './Competitor';

import { useAppSelector } from '../../redux/store';
import {
  selectPlayer1Choice,
  selectPlayer2Choice,
} from '../../redux/slices/game-slice';

const Competitors: React.FC = () => {
  const player1Val = useAppSelector(selectPlayer1Choice);
  const player2Val = useAppSelector(selectPlayer2Choice);

  return (
    <>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Competitor value={player1Val} />
        </Grid>

        <Grid item>
          <Competitor value={player2Val} />
        </Grid>
      </Grid>
    </>
  );
};

export default Competitors;
