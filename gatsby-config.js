/** @format */

module.exports = {
  siteMetadata: {
    title: "My blogs",
    description:
      "A site built using gatsby and react along with graphql and styled with emotion",
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js"),
        },
      },
    },
  ],
};
