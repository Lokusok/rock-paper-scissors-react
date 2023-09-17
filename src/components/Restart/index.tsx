import React from 'react';

import { IconButton } from '@mui/material';
import { styled } from '@mui/system';

import { VscDebugRestart } from 'react-icons/vsc';

const RestartButton = styled(IconButton)`
  &:hover svg {
    transition: transform ease 0.5s;
    transform: rotate(-360deg);
  }
`;

const Restart: React.FC = () => {
  return (
    <RestartButton color="primary">
      <VscDebugRestart size={42} />
    </RestartButton>
  );
};

export default Restart;
