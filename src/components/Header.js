import React from 'react'
import Link from 'gatsby-link';
import styled from 'styled-components';
import cover from '../../static/cover.jpeg';
import _, { media } from '../variables';

const Header = styled.header`
  display: flex;
  margin-bottom: 2em;
  height: 300px;

  background: url(${cover});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`

const Wrapper = styled.div`
  margin: auto;
  padding: 2em;

  text-align: center;
  color: ${_.white};
  background: #343a409e;
  font-family: ${_.fontFamilyMonospace};

  ${media(_.sm)} {
    padding: 1em;
  }

  a {
    color: inherit;
    &:hover, &:active {
      color: inherit;
      text-decoration: none;
    }
  }

  h1 {
    font-weight: 800;
  }
  *:last-child {
    margin-bottom: 0;
  }
`

export default () => (
  <Header>
    <Wrapper>
      <Link to="/">
        <h1>Blog</h1>
        <h2>{`< Lego />`}</h2>
      </Link>
    </Wrapper>
  </Header>
)
