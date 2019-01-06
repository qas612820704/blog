import React from 'react';
import { graphql } from 'gatsby';
import { withLayout } from '../layouts';
import SEO, { postToSEO } from '../components/SEO';
import Post from '../components/Post';
import FadeIn from '../layouts/FadeIn';

const PostTemplate = ({ data }) => (
  <FadeIn>
    <SEO seo={postToSEO(data.post)} />
    <Post post={data.post} active />
  </FadeIn>
);

export default withLayout(PostTemplate);

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt(pruneLength: 300)
      frontmatter {
        title
        cover
        date(formatString: "MMM D, YYYY")
        category
        tags
      }
      fields {
        slug
      }
    }
  }
`;
