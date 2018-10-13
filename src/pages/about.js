import React from 'react';
// eslint-disable-next-line no-unused-vars
import Prism from 'prismjs';
import PrismCode from 'react-prism';
import { Container, Row, Col }from 'reactstrap';
import FaFacebook from 'react-icons/lib/fa/facebook-square';
import FaGithub from 'react-icons/lib/fa/github';
import FaEvelope from 'react-icons/lib/fa/envelope';
import styled from 'styled-components';
import { withLayout } from '../layouts';
import avatar from '../../static/avatar.jpg';

const Avatar = styled.img`
  width: 80%;
`

const MarginRow = styled(Row)`
  margin-top: 2em;
`

const AvatarCol = styled(Col)`
  text-align: center;
  justify-content: center;
`;

const CentralCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
  * {
    width: 100%;
  }
`;

const MediaCol = styled(Col)`
  svg {
    font-size: 1.3em;
  }
`;

const FaEvelopeX = styled(FaEvelope)`
  margin-left: 0.1em;
  font-size: 1.15em !important;
`;

const introJsx = `\
  <Author
    name=Lego
    from=Taiwan
    love=javascript
  />
`

const About = () => (
  <Container>
    <MarginRow>
      <AvatarCol xs={12} sm={5}>
        <Avatar className="rounded-circle" src={avatar} />
      </AvatarCol>
      <CentralCol xs={12} sm={7}>
          <PrismCode component="pre" className="language-html">
          {introJsx}
          </PrismCode>
      </CentralCol>
    </MarginRow>
    <MarginRow>
      <Col>
        <h2>Information</h2>
        <p>江柏廷</p>
        <p>交通大學, 網路工程所</p>
        <p>中興大學, 應用數學系</p>
        <p></p>
      </Col>
      <MediaCol>
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
            <FaEvelopeX /> qas612820704@gmail.com
          </a>
        </p>
      </MediaCol>
    </MarginRow>
  </Container>
)

export default withLayout(About);
