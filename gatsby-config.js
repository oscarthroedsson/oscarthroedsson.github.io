const config = require("./config");

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.pathPrefix || config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleTagManager: {
          trackingId: "GTM-M7PWCZ2",
          cookieName: "acceptCookie",
          dataLayerName: "dataLayer",
        },
        facebookPixel: {
          pixelId: "873502146782253",
          cookieName: "acceptCookie",
        },
        environments: ["production"],
      },
    },
    "gatsby-plugin-sass",
  ],
};
