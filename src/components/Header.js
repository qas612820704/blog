import React from 'react'
import HeadRoom from 'react-headroom';
import { Link, StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import { rhythm } from '../layouts/typography';
import cover from '../../static/cover.jpeg';
import logo from '../../static/logo.png';
import _, { media } from '../variables';

const Room = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1em 2em;
`;

const BedRoom = styled.div`
  img {
    margin: 0;
    height: 1em;
  }
`;

const Balcony = styled.div`
  a {
    margin-left: 1em;
  }
`;


const Header = styled.header`
  display: flex;
  height: 300px;
  margin-bottom: ${rhythm(2)};

  background: url(${cover});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`

const Wrapper = styled.div`
  margin: auto;
  padding: 2em;

  text-align: center;
  text-shadow: 2px 2px ${_.gray};
  color: ${_.white};
  background: ${_.light}5e;
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
  h1, h2 {
    margin: 0;
    margin-bottom: 0.5em;
    font-family: inherit;
    color: inherit;
  }
  *:last-child {
    margin-bottom: 0;
  }
`

const CoverImg = () => (
  <StaticQuery
    query={graphql`{
      cover: file(relativePath: { eq: "cover.jpeg" }) {
        childImageSharp {
          fixed(height: 300, cropFocus: CENTER) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }`}
    render={data => <Img style={{ width: '100%' }} fixed={data.cover.childImageSharp.fixed} />}
  />
)

export default () => (
  <div>
    <HeadRoom style={{ background: _.white, boxShadow: '0 0 8px #888888' }}>
      <Room>
        <BedRoom><Link to="/"><img src={logo} alt=""/></Link></BedRoom>
        <Balcony>
          <Link to="/about">About</Link>
        </Balcony>
      </Room>
    </HeadRoom>
    <Header>
      <Wrapper>
        <Link to="/">
          <h1>Blog</h1>
          <h2>{`< Lego />`}</h2>
        </Link>
      </Wrapper>
    </Header>
    <CoverImg />
  </div>
)
