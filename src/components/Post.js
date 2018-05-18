import React from 'react';
import Link from 'gatsby-link';
import { Row, Col, Button } from 'reactstrap';
import GoCalendar from 'react-icons/lib/go/calendar';
import GoPackage from 'react-icons/lib/go/package';
import GoCommentDiscussion from 'react-icons/lib/go/comment-discussion';
import styled, { css } from 'styled-components';
import Disqus from './Disqus';
import { Hr, inlineCodeCss } from './Components.styled';
import _ from '../variables';

const Post = styled.div`
  margin-bottom: 2em;
`;

const Info = styled.p`
  margin-top: 1em;
  margin-bottom: 0.5em;

  *:last-child {
    margin-bottom: 0;
  }

  ${props => props.right && css`
    text-align: right;
  `}
`;

const Text = styled.article`
  margin-top: 1.5em;
  margin-bottom: 1.5em;

  &::first-letter, p:first-child::first-letter {
    font-size: 200%;
  }

  & :not(pre) > code[class*="language-"] {
    ${inlineCodeCss}
  }
`;

export default ({ post, active }) => (
  <Post active={active}>
    <h1>
      <b>
        <Link to={post.fields.slug}>
        { post.frontmatter.title }
        </Link>
      </b>
    </h1>
    <Info>
      {post.frontmatter.date}
      {', '}
      <span style={{ color: _.secondary }}>{post.timeToRead} min read</span>
    </Info>
    { !active && <Text>{post.excerpt} <Link to={post.fields.slug}>read more</Link></Text>}
    { active && <Text dangerouslySetInnerHTML={{ __html: post.html }} />}
    <Info right>
      Category
      {' '}
      <span style={{ color: _.secondary }}>{post.frontmatter.category}</span>
    </Info>
    <Info right>
      Tags
      {' '}
      <span style={{ color: _.secondary }}>{post.frontmatter.tags.join(', ')}</span>
    </Info>
    { active && (
      <div>
        <Hr />
        <h2>Comments</h2>
        <Disqus post={post}/>
      </div>
    )}
  </Post>
);
