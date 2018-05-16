import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Post from '../components/Post';

export default ({ data }) => (
  <Container>
    <Row>
      <Col xs={12}>
      { data.posts.edges.map(edge => (
        <Post post={edge.node} />
      ))}
      </Col>
    </Row>
  </Container>
)

export const query = graphql`
  query IndexQuery {
    posts: allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          id
          excerpt(pruneLength: 500)
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            tags
            cover
            date(formatString: "MM/DD/YYYY")
          }
        }
      }
      categories: group(field: frontmatter___category) {
        category: fieldValue
        totalCount
      }
      tags: group(field: frontmatter___tags) {
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
