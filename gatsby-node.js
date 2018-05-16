const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'posts' });

    createNodeField({ node, name: 'slug', value: slug });
  }
}

exports.createPages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  const { errors, data } = await graphql(`
    {
      posts: allMarkdownRemark {
        edges {
          node {
            frontmatter {
              tags
              category
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (errors) throw `Error on query allMarkdownRemark in createPages`;

  data.posts.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/templates/post.js'),
      context: {
        slug: node.fields.slug,
      }
    })
  })
}
