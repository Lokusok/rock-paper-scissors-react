import React from 'react';

import { BsQuestionLg } from 'react-icons/bs';

import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { ChoiceEnum } from '../../../types';
import { getIcon } from '../../../utils/getDescription';

const CompetitorBox = styled(Box)`
  font-size: 70px;
  border: 1px solid #ccc;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 115px;
  height: 125px;
`;

interface ICompetitorProps {
  value: ChoiceEnum | null;
}

const Competitor: React.FC<ICompetitorProps> = ({ value }) => {
  const Icon = value ? getIcon(value) : BsQuestionLg;

  return (
    <CompetitorBox>
      <Icon />
    </CompetitorBox>
  );
};

export default Competitor;
