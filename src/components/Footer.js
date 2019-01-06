import React from 'react';
import styled from 'styled-components';
import { rhythm } from '../layouts/typography';
import _ from '../variables';

const Footer = styled.footer`
  padding: 1em;
  padding-top: 3em;

  text-align: right;
  font-size: 70%;
  color: ${_.white};
  background: ${_.grayDark};
`;

export default () => (
  <Footer style={{ marginTop: rhythm(2) }}>
    <p>Lego's Site Since 2017</p>
    <p>
      Logo made with
      {' '}
      <a href="https://www.designevo.com/" title="Free Online Logo Maker">
        DesignEvo
      </a>
    </p>
  </Footer>
);
