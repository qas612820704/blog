import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import _ from '../variables';

const Post = styled.div`
  padding: 1em;
`

const Hr = styled.hr`
  border-top-color: ${_.gray};
`

const Head = styled.div`
  padding-top: 2em;
`

export default ({ post, active }) => (
  <Post>
    <Link to={post.fields.slug}>
      <Head>
        <h2>{ post.frontmatter.title }</h2>
      </Head>
      <Hr />
    </Link>
  </Post>
)
