import styled from '@emotion/styled';
import { css } from '@emotion/core';

const modifier = (mod) => (...args) => props => props[mod] && css(...args)

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${modifier('__center')( css`
    align-items: center;
  `)}
`;

export const Box = styled.div`
  width: ${({ w = 1 }) => `${w * 100}%`};

  @media only screen and (max-width: 48em) {
    width: ${({ s = 1 }) => `${s * 100}%`};
  }
`;

export default {
  Flex,
  Box,
};
