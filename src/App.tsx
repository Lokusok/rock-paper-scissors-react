import React from 'react';

import GlobalStyle from './GlobalStyle';
import './reset.css';

import { Container, Box, Grid } from '@mui/material';

import Counter from './components/Counter';
import Competitors from './components/Competitors';
import Choices from './components/Choices';
import Restart from './components/Restart';
import Notification from './components/Notification';

import { useAppDispatch, useAppSelector } from './redux/store';
import {
  decreaseTimerAndCheckStatus,
  selectIsFinished,
} from './redux/slices/game-slice';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const isFinished = useAppSelector(selectIsFinished);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (isFinished) {
        clearInterval(interval);
        return;
      }

      dispatch(decreaseTimerAndCheckStatus());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isFinished]);

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
              top: { xs: '-45px', md: '50%' },
              right: { xs: null, md: '-50px' },
              left: { xs: '50%', md: null },
              transform: {
                xs: 'translate(-50%, -50%)',
                md: 'translate(100%, -50%)',
              },
            }}
          >
            <Restart />
          </Box>
        </Box>
      </Container>

      <Notification />
      <GlobalStyle />
    </>
  );
};

export default App;
