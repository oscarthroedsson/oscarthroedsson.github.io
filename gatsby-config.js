module.exports = {
  siteMetadata: {
    title: `Oscar Throedsson - Personlig Tränare & Coach`,
    description: `En start med små steg är början på en större förändring`,
    author: `@devbymadde`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Oscar Throedsson - Personlig Tränare & Coach`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#00587C`,
        theme_color: `#00587C`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
