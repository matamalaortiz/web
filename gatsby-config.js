module.exports = {
  siteMetadata: {
    title: 'Alejandro Matamala Ortiz',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-favicon`,
    `gatsby-plugin-sass`, 
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Alejandro Matamala Ortiz',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-62878348-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
      }
    },
    'gatsby-plugin-offline',
  ],
}
