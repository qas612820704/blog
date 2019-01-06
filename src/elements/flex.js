import React from 'react';
import styled, { css } from 'styled-components';

const modifier = (mod) => (...args) => props => props[mod] && css(...args)

export const Flex = styled.div`
  display: flex;

  ${modifier('__center')( css`
    align-items: center;
  `)}
`;

export const Box = styled.div`
  width: ${({ w = 1 }) => `${w * 100}%`};
`;

export default {
  Flex,
  Box,
};
