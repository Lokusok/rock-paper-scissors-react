import React from 'react';

import { IconButton, Zoom } from '@mui/material';
import { styled } from '@mui/system';

import { VscDebugRestart } from 'react-icons/vsc';

import { restartGame, selectIsFinished } from '../../redux/slices/game-slice';
import { useAppDispatch, useAppSelector } from '../../redux/store';

const RestartButton = styled(IconButton)`
  &:hover svg {
    transition: transform ease 0.5s;
    transform: rotate(-360deg);
  }
`;

const Restart: React.FC = () => {
  const dispatch = useAppDispatch();
  const isFinished = useAppSelector(selectIsFinished);

  const handleClick = () => {
    dispatch(restartGame());
  };

  return (
    <Zoom in={isFinished}>
      <RestartButton onClick={handleClick} color="primary">
        <VscDebugRestart size={42} />
      </RestartButton>
    </Zoom>
  );
};

export default Restart;
