import React from 'react';
import Link from 'gatsby-link';
import { Row, Col, Button } from 'reactstrap';
import GoCalendar from 'react-icons/lib/go/calendar';
import GoPackage from 'react-icons/lib/go/package';
import GoCommentDiscussion from 'react-icons/lib/go/comment-discussion';
import styled, { css } from 'styled-components';
import Disqus from './Disqus';
import { Hr } from './Components.styled';
import _ from '../variables';

const Post = styled.div`
  position: relative;
  max-height:  650px;
  overflow: hidden;

  margin-bottom: 2em;

  ${props => props.active && css`
    max-height: initial;
  `};
`;

const Info = styled(Row)`
  margin-top: 1em;
  margin-bottom: 0.5em;

  *:last-child {
    margin-bottom: 0;
  }
`;

const Text = styled.article`
  margin-bottom: 2em;
  p:first-child::first-letter {
    font-size: 200%;
  }

  & :not(pre) > code[class*="language-"] {
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    color: black;
    background-color: rgba(27,31,35,0.05);
    text-shadow: none;
  }
`;

const Shadow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 40%;
  width: 100%;

  background: linear-gradient(rgba(255,255,255,0),rgba(255,255,255,1));
`;

const ReadMoreBtn = styled(Button)`
  margin: 1em;
  border-radius: 2em !important;
`;

export default ({ post, active }) => (
  <Post active={active}>
    <h1>
      <Link to={post.fields.slug}>
      { post.frontmatter.title }
      </Link>
    </h1>
    <Info>
      <Col xs={12} sm={6}>
        <b>Publish on</b> {post.frontmatter.date}
        <p style={{ color: _.secondary }}>{post.timeToRead} min read</p>
      </Col>
      <Col xs={12} sm={6}>
        <b>In Category</b>
        <p style={{ color: _.secondary }}>{post.frontmatter.category}</p>
      </Col>
    </Info>
    <Text dangerouslySetInnerHTML={{ __html: post.html }} />
    { active !== true &&
        <Shadow>
          <Link to={post.fields.slug}>
            <ReadMoreBtn>Read More</ReadMoreBtn>
          </Link>
        </Shadow>
    }
    { active && (
      <div>
        <Hr />
        <h2>Comments</h2>
        <Disqus post={post}/>
      </div>
    )}
  </Post>
);
