import React from 'react';

import { getIcon, getText } from '../../../utils/getDescription';

import { Button, Popover, Typography, Zoom } from '@mui/material';
import { styled } from '@mui/system';

import { ChoiceEnum } from '../../../types';

import { useAppDispatch, useAppSelector } from '../../../redux/store';
import {
  setChoicePlayer1,
  setChoicePlayer2,
} from '../../../redux/slices/game-slice';
import { getRandomChoice } from '../../../utils/getRandomChoice';

const ChoiceButton = styled(Button)`
  background: transparent;
  font-size: 40px;
  cursor: pointer;
  transition: opacity ease 0.2s;
  border: 1px dashed #ccc;
  padding: 0.3em;

  &:hover {
    opacity: 0.5;
    border-style: solid;
  }
`;

interface IChoiceProps {
  value: ChoiceEnum;
}

const Choice: React.FC<IChoiceProps> = ({ value = ChoiceEnum.ROCK }) => {
  const dispatch = useAppDispatch();
  const player1Val = useAppSelector((state) => state.game.player1.choice);
  const player2Val = useAppSelector((state) => state.game.player2.choice);
  const disabled = Boolean(player1Val && player2Val);

  const Icon = getIcon(value);
  const popoverText = getText(value);

  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleClick = () => {
    dispatch(setChoicePlayer1(value));
    dispatch(setChoicePlayer2(getRandomChoice()));
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Zoom in={!disabled}>
        <ChoiceButton
          onClick={handleClick}
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
          variant="text"
          color="primary"
        >
          <Icon />
          <Popover
            sx={{
              pointerEvents: 'none',
            }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
          >
            <Typography sx={{ p: 1 }}>{popoverText}</Typography>
          </Popover>
        </ChoiceButton>
      </Zoom>
    </>
  );
};

export default Choice;
