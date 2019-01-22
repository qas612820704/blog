import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Disqus from './Disqus';
import _ from '../variables';
import { rhythm } from '../layouts/typography';

const Info = styled.div`
  margin: ${rhythm(0.75)} 0;
  text-align: right;

  > * {
    margin: ${rhythm(0.5)} 0;
  }

`;

export default ({ post, active }) => (
  <div active={active}>
    <h1 style={{ marginBottom: rhythm(0.25) }}>
      <b>
        <Link to={post.fields.slug}>
        { post.frontmatter.title }
        </Link>
      </b>
    </h1>
    <p>
      <small>
        {post.frontmatter.date}
        {', '}
        <span style={{ color: _.secondary }}>{post.timeToRead} min read</span>
      </small>
    </p>
    { !active && <article>{post.excerpt} <Link to={post.fields.slug}>read more</Link></article>}
    { active && <article dangerouslySetInnerHTML={{ __html: post.html }} />}
    <Info>
      <p>
        Category
        {' '}
        <span style={{ color: _.secondary }}>{post.frontmatter.category}</span>
      </p>
      <p>
        Tags
        {' '}
        <span style={{ color: _.secondary }}>{post.frontmatter.tags.join(', ')}</span>
      </p>
    </Info>
    { active && (
      <div>
        <h2>Comments</h2>
        <Disqus post={post}/>
      </div>
    )}
  </div>
);
