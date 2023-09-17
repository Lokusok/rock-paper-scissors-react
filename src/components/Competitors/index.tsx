import React from 'react';

import { Grid } from '@mui/material';

import Competitor from './Competitor';

import { ChoiceEnum } from '../../types';

import { useAppSelector, useAppDispatch } from '../../redux/store';

const Competitors: React.FC = () => {
  const dispatch = useAppDispatch();
  const player1Val = useAppSelector((state) => state.game.player1.choice);
  const player2Val = useAppSelector((state) => state.game.player2.choice);

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
