import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import Disqus from './Disqus';
import { Hr, inlineCodeCss, Article as d4Article } from './Components.styled';
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

const Text = styled(d4Article)`
  margin-top: 1.5em;
  margin-bottom: 1.5em;

  & > *:first-child {
    margin-top: 2em;
  }

  &::first-letter, & > p:first-child::first-letter {
    font-size: 200%;
  }

  & :not(pre) > code[class*="language-"] {
    ${inlineCodeCss}
  }

  .gatsby-highlight {
    margin-top: 1em;
    margin-bottom: 1em;
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
