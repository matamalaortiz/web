module.exports = {
  siteMetadata: {
    title: 'Alejandro Matamala Ortiz',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
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
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
