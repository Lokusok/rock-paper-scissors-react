import React from 'react';

import { Snackbar, Alert, AlertColor } from '@mui/material';

import { useAppSelector } from '../../redux/store';
import { WinnerEnum } from '../../types';
import { selectIsFinished, selectWinner } from '../../redux/slices/game-slice';

const severitiesObj = {
  [WinnerEnum.PLAYER1]: {
    type: 'success',
    text: 'Так держать, победа за тобой!',
  },
  [WinnerEnum.PLAYER2]: {
    type: 'error',
    text: 'Ты был в шаге от победы, но...',
  },
  [WinnerEnum.DRAW]: {
    type: 'info',
    text: 'Ничья, и это тоже хорошо!',
  },
};

const Notification = () => {
  const isFinished = useAppSelector(selectIsFinished);
  const winner = useAppSelector(selectWinner);

  const [isOpen, setIsOpen] = React.useState(false);
  const [severity, setSeverity] = React.useState<AlertColor>('info');
  const [innerText, setInnerText] = React.useState('');

  React.useEffect(() => {
    if (winner) {
      setSeverity(severitiesObj[winner].type as AlertColor);
      setInnerText(severitiesObj[winner].text);
    }

    if (isFinished) {
      setIsOpen(true);
    } else {
      setTimeout(() => {
        setIsOpen(false);
      }, 50);
    }
  }, [isFinished, winner]);

  return (
    <>
      <Snackbar open={isOpen} autoHideDuration={6000}>
        <Alert severity={severity} sx={{ width: '100%' }}>
          {innerText}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Notification;
