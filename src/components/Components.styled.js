import styled, { css } from 'styled-components';
import _ from '../variables';

export const Hr = styled.hr`
  margin-top: 0;
  margin-bottom: 2rem;
  border-top-color: ${_.gray};
`

export const inlineCodeCss = css`
  padding: 0.2em 0.4em;
  margin: 0;
  font-size: 85%;
  color: black;
  background-color: rgba(27,31,35,0.05);
  text-shadow: none;
`

export const Article = styled.article`
  h1, h2, h3, h4, h5, h6 {
    margin-top: 2em;
    margin-bottom: 1em;
  }
  pre {
    margin-bottom: 2em;
  }
`
