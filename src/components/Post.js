import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Post = styled.div`

`

export default ({ post }) => (
  <Post>
    <Link to={post.fields.slug}>{ post.frontmatter.title }</Link>
  </Post>
)
