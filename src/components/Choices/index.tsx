import React from 'react';

import { Grid, Button } from '@mui/material';

import Choice from './Choice';

import { ChoiceEnum } from '../../types';

const Choices: React.FC = () => {
  return (
    <Grid container justifyContent="space-between">
      <Grid item>
        <Choice value={ChoiceEnum.ROCK} />
      </Grid>

      <Grid item>
        <Choice value={ChoiceEnum.SCISSORS} />
      </Grid>

      <Grid item>
        <Choice value={ChoiceEnum.PAPER} />
      </Grid>
    </Grid>
  );
};

export default Choices;
