import React from 'react';
import styled from 'styled-components';

import { Box, Typography } from '@mui/material';

const Counter: React.FC = () => {
  return (
    <>
      <Box sx={{ textAlign: 'center' }}>
        <Typography sx={{ fontWeight: 700 }} variant="h3" component="span">
          0
        </Typography>
      </Box>
    </>
  );
};

export default Counter;
