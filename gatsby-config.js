/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Gatsby Tutorial",
    description: "random dies",
    author: "frankc60",
    data: ["item1", "item2"],
    person: { name: "pete", age: 43 },
  },
  plugins: [`gatsby-plugin-styled-components`],
}
