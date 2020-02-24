module.exports = {
  siteMetadata: {
    title: `Headless WP Rocks`,
    description: `Learn how to use WordPress as a headless CMS.`,
    author: `Headless WP Rocks`,
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
        name: `headless-wp-rocks`,
        short_name: `headless-wp-rocks`,
        start_url: `/`,
        background_color: `#F0F4F8`,
        theme_color: `#243B53`,
        display: `minimal-ui`,
        icon: `src/images/hwpr-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [`Montserrat\:400,400i,600,900`],
    //     display: "swap",
    //   },
    // },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`400`, `400i`, `600`, `900`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint: `https://rocks.us4.list-manage.com/subscribe/post?u=ab4dd7cba39cf695fe29fa1f3&amp;id=48f46c5b48`,
      },
    },
  ],
}
