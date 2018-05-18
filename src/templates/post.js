import React from 'react';
import { Container, Row, Col } from 'reactstrap'
import SEO, { postToSEO } from '../components/SEO';
import Post from '../components/Post'

export default ({ pathContext, data }) => (
  <Container>
    <SEO seo={postToSEO(data.post)} />
    <Row>
      <Col xs={12}>
        <Post post={data.post} active />
      </Col>
    </Row>
  </Container>
);

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
