import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default ({ data }) => (
  <Container>
    <Row>
      <Col xs={12}>
        hi
      </Col>
    </Row>
  </Container>
)

export const query = graphql`
  query IndexQuery {
    posts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date(formatString: "MM/DD/YYYY")
          }
        }
      }
      categories: group( field: frontmatter___category ) {
        category: fieldValue
        totalCount
      }
      tags: group( field: frontmatter___tags ) {
        tag: fieldValue
        edges {
          node {
            frontmatter {
              title
            }
          }
        }
        totalCount
      }
    }
  }
`;
