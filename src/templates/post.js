import React from 'react';
import { Container, Row, Col } from 'reactstrap'
import Post from '../components/Post'

export default ({ pathContext, data }) => (
  <Container>
    <Row>
      <Col xs={12}>
        <Post post={data.post } />
      </Col>
    </Row>
  </Container>
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
