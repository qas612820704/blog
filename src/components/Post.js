import React, { Fragment } from 'react';
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

const Content = ({ content }) => {
  if (React.isValidElement(content)) {
    return <article children={content} />
  }
  return <article dangerouslySetInnerHTML={{ __html: content }} />
}

export default ({ post, active, isNetlifyCMS }) => (
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
    <Content content={active
      ? post.html
      : <Fragment>{post.excerpt} <Link to={post.fields.slug}>read more</Link></Fragment>
    }/>
    <Info>
      <p>
        <small>
          Category
          {' '}
          <span style={{ color: _.secondary }}>{post.frontmatter.category}</span>
        </small>
      </p>
      <p>
        <small>
          Tags
          {' '}
          <span style={{ color: _.secondary }}>{post.frontmatter.tags.join(', ')}</span>
        </small>
      </p>
    </Info>
    { active && !isNetlifyCMS && (
      <div>
        <h2>Comments</h2>
        <Disqus post={post}/>
      </div>
    )}
  </div>
);
