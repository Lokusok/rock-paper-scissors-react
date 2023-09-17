import React from 'react';

import GlobalStyle from './GlobalStyle';
import './reset.css';

import { Container, Box, Grid } from '@mui/material';

import Counter from './components/Counter';
import Competitors from './components/Competitors';
import Choices from './components/Choices';
import Restart from './components/Restart';

const App = () => {
  return (
    <>
      <Container sx={{ flexGrow: 1, display: 'flex', height: '100%' }}>
        <Box
          sx={{
            width: 300,
            margin: 'auto',
            position: 'relative',
          }}
        >
          <Grid container rowSpacing="50">
            <Grid item xs={12}>
              <Counter />
            </Grid>

            <Grid item xs={12} sx={{ flexGrow: 1 }}>
              <Competitors />
            </Grid>

            <Grid item sx={{ flexGrow: 1 }}>
              <Choices />
            </Grid>
          </Grid>

          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              right: '-50px',
              transform: 'translate(100%, -50%)',
            }}
          >
            <Restart />
          </Box>
        </Box>
      </Container>

      <GlobalStyle />
    </>
  );
};

export default App;
