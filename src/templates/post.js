import React from 'react';

export default ({ pathContext, data }) => (
  <div>{pathContext.slug}</div>
);

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date(formatString: "MM/DD/YYYY")
        category
        tags
      }
      fields {
        slug
      }
    }
  }
`;
