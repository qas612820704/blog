import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import Post from '../components/Post';

const ColwHr = styled(Col)`
  margin-bottom: 2em;
  :not(:last-child) {
    border-bottom: solid 1px;
  }
`

export default ({ data }) => (
  <Container>
    <Row>
      { data.posts.edges.map(edge => (
      <ColwHr xs={12}>
        <Post post={edge.node} />
      </ColwHr>
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
