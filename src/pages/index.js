import React from 'react';
import { graphql } from 'gatsby';
import { Container, Row, Col } from 'reactstrap';
import SEO, { postListToSEO } from '../components/SEO';
import { withLayout } from '../layouts';
import Post from '../components/Post';

const Index = ({ data }) => (
  <Container>
    <SEO seo={postListToSEO(data.posts)}/>
    <Row>
      { data.posts.edges.map(edge => (
      <Col xs={12}>
        <Post post={edge.node} />
      </Col>
      ))}
    </Row>
  </Container>
)

export default withLayout(Index);

export const query = graphql`
  query IndexQuery {
    posts: allMarkdownRemark(
      filter: {frontmatter: {draft: { eq: false }}}
      sort: {fields: [frontmatter___date], order: DESC}
    ) {
      edges {
        node {
          id
          timeToRead
          excerpt(pruneLength: 300)
          fields {
            slug
          }
          frontmatter {
            title
            tags
            cover
            date(formatString: "MMM D, YYYY")
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
