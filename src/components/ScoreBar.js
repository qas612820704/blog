import React from 'react';
import styled from '@emotion/styled';
import { Flex, Box } from '../elements/flex';

const Bar = styled.div`
  position: relative;
  min-height: 1.7em;
  width: 100%;
  height: 100%;

  background: #ffdcd5;

`;

const Value = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${props => `${props.score * 10}%`};

  text-align: center;
  color: white;
  background: #db6044;

`;

const ScoreBar = ({
  title = 'Untitled',
  score = 5,
  scoreText = 'Untexted',
}) => (
  <Flex style={{ marginBottom: '1.5em' }}>
    <Box w={2/9}>{title}</Box>
    <Box w={7/9}>
      <Bar>
        <Value score={score}><small>{scoreText}</small></Value>
      </Bar>
    </Box>
  </Flex>
);

export default ScoreBar;
