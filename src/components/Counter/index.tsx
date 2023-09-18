import React from 'react';

import { Box, Typography } from '@mui/material';

import { useAppSelector } from '../../redux/store';
import { selectTimer } from '../../redux/slices/game-slice';

const Counter: React.FC = () => {
  const timer = useAppSelector(selectTimer);

  return (
    <>
      <Box sx={{ textAlign: 'center' }}>
        <Typography sx={{ fontWeight: 700 }} variant="h3" component="span">
          {timer}
        </Typography>
      </Box>
    </>
  );
};

export default Counter;
