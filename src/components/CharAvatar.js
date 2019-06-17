import React from 'react';
import styled from '@emotion/styled';

const Avatar = styled.div`
  display: inline-block;
  border-radius: 50%;
  font-size: 0.8em;
  width: 1.6em;
  height: 1.6em;
  color: ${props => props.color};
  background: ${props => props.bgColor};
  text-align: center;
  vertical-align: middle;

  span {
    display: flex;
    span {
      margin: auto;
    }
  }
`;

const CharAvatar = ({
  color = 'white',
  bgColor = '#39b4a7',
  char = 'A',
  ...restProps,
}) => {
  return (
    <Avatar color={color} bgColor={bgColor} {...restProps}>
      <span><span>{char}</span></span>
    </Avatar>
  )
}

export default CharAvatar;
