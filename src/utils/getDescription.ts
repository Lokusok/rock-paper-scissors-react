import { Fragment } from 'react';
import { IconType } from 'react-icons';

import { FaHandBackFist } from 'react-icons/fa6';
import { FaHandPaper, FaHandScissors } from 'react-icons/fa';

import { ChoiceEnum } from '../types';

const icons = {
  [ChoiceEnum.ROCK]: FaHandBackFist,
  [ChoiceEnum.PAPER]: FaHandPaper,
  [ChoiceEnum.SCISSORS]: FaHandScissors,
};

const titles = {
  [ChoiceEnum.ROCK]: 'Камень',
  [ChoiceEnum.PAPER]: 'Бумага',
  [ChoiceEnum.SCISSORS]: 'Ножницы',
};

export const getIcon = (value: ChoiceEnum): IconType => {
  return icons[value] ?? Fragment;
};

export const getText = (value: ChoiceEnum): string => {
  return titles[value] ?? '';
};
