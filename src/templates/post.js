import React from 'react';
import { Container, Row, Col } from 'reactstrap'
import Post from '../components/Post'

export default ({ pathContext, data }) => (
  <Container>
    <Row>
      <Col xs={12}>
        <Post post={data.post } active />
      </Col>
    </Row>
  </Container>
);

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
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
