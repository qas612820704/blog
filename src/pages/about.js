import React from 'react';
// eslint-disable-next-line no-unused-vars
import Prism from 'prismjs';
import PrismCode from 'react-prism';
import FaFacebook from 'react-icons/lib/fa/facebook-square';
import FaGithub from 'react-icons/lib/fa/github';
import FaEvelope from 'react-icons/lib/fa/envelope';
import styled from 'styled-components';
import { Flex, Box } from '../elements/flex';
import avatar from '../../static/avatar.jpg';
import { withLayout } from '../layouts';
import FadeIn from '../layouts/FadeIn';

const Avatar = styled.img`
  width: 80%;
  border-radius: 50%;
`;

const introJsx = `\
  <Author
    name=Lego
    from=Taiwan
    love=javascript
  />
`;

const About = () => (
  <FadeIn>
    <Flex __center>
      <Box w={1/2}><Avatar src={avatar} alt='Lego' /></Box>
      <Box w={1/2}>
        <PrismCode component="pre" className="language-html">
          {introJsx}
        </PrismCode>
      </Box>
    </Flex>
    <Flex>
      <Box w={1/2}>
        <h2>Information</h2>
        <p>江柏廷</p>
        <p>交通大學, 網路工程所</p>
        <p>中興大學, 應用數學系</p>
        <p></p>
      </Box>
      <Box w={1/2}>
        <h2>Contact</h2>
        <p>
          <a href="https://github.com/qas612820704" target="_blank" rel="noopener noreferrer">
            <FaGithub /> qas612820704
          </a>
        </p>
        <p>
          <a href="https://www.facebook.com/leegochiang" target="_blank" rel="noopener noreferrer">
            <FaFacebook /> leegochiang
          </a>
        </p>
        <p>
          <a href="mailto:qas612820704@gmail.com">
            <FaEvelope /> qas612820704@gmail.com
          </a>
        </p>
      </Box>
    </Flex>
  </FadeIn>
)

export default withLayout(About);
