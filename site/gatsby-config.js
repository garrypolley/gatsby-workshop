/*eslint no-template-curly-in-string:0*/
module.exports = {
  siteMetadata: {
    title: `Garry Conf 2020`,
    description: `A cool conference app for testing Gatsby`,
    author: `@garrypolley`,
    siteUrl: `https://garry-gatsbyworkshop.netlify.app/`,
    codeUrl: `https://github.com/garrypolley/gatsby-workshop`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-custom-tailwind`,
        short_name: `gct`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/pencil-icon.png`,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data`,
      },
    },
  ],
};
