import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Post from '../components/Post';
import { Hr } from '../components/Components.styled';

export default ({ data }) => (
  <Container>
    <Row>
      { data.posts.edges.map(edge => (
      <Col xs={12}>
        <Post post={edge.node} />
        <Hr />
      </Col>
      ))}
    </Row>
  </Container>
)

export const query = graphql`
  query IndexQuery {
    posts: allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          id
          html
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            tags
            cover
            date(fromNow: true)
            category
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
