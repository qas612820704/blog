import React from 'react'
import styled from 'styled-components';
import cover from '../../static/cover.jpeg';

const Header = styled.header`
  display: flex;
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
  color: var(--white);
  background: #343a409e;
  font-family: var(--font-family-monospace);
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
      <h1>Blog</h1>
      <h2>{`< Lego />`}</h2>
    </Wrapper>
  </Header>
)
