/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
    query allPages {
      allContentfulPages {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  data.allContentfulPages.edges.forEach(edge => {
    const slug = edge.node.slug
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/insurance-page.js`),
      context: { slug: slug },
    })
  })
}
