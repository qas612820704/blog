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
          {
            resolve: `gatsby-remark-embed-snippet`,
            options: {
              classPrefix: `language-`,
              directory: `${__dirname}/leetcode.js/`,
            },
          },
          `gatsby-remark-prismjs`,
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              ignoreFileExtensions: [],
            },
          },
          `gatsby-remark-katex`,
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ]
};
