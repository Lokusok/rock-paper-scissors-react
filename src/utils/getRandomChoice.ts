import { ChoiceEnum } from '../types';

const choices = [ChoiceEnum.ROCK, ChoiceEnum.PAPER, ChoiceEnum.SCISSORS];

const getRandomChoice = (): ChoiceEnum => {
  return choices[Math.floor(Math.random() * choices.length)];
};

export default getRandomChoice;
