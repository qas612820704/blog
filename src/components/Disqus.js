import React from 'react';
import ReactDisqusComments from 'react-disqus-comments';
import { siteMetadata } from '../../gatsby-config';

const name = 'https-qas612820704-github-io-blog';

export default ({ post }) => (
  <ReactDisqusComments
    shortname={name}
    identifier={post.fields.slug}
    title={post.frontmatter.title}
    url={`${siteMetadata.siteUrl}${post.fields.slug}`}
    category_id={post.category_id}
  />
)
