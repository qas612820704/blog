module.exports = {
  pathPrefix: '/blog/',
  siteMetadata: {
    siteUrl: `http://qas612820704.github.io/blog/`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/data/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
          `gatsby-remark-katex`,
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ]
};
