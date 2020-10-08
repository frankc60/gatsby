exports.onCreateNode = ({ node, getNode }) => {
  console.log(`Node created of type "${node.internal.type}"`)
  const fileNode = getNode(node)
  console.log(`\ndd `, JSON.stringify(fileNode))
}

const path = require("path")
//const productTemplate2 = require("./src/templates/product-template.js")

// create pages dynamically

exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  const { createPage } = actions
  const productTemplate2 = path.resolve(`./src/templates/product-template.js`)
  const result = await graphql(`
    query {
      products: allContentfulProduct {
        nodes {
          slug
        }
      }
    }
  `)
  console.log(`******************************\n${JSON.stringify(result)}`)
  console.log(``)
  result.data.products.nodes.forEach(item => {
    createPage({
      path: `/products/${item.slug}`,
      component: productTemplate2,
      context: { slug: item.slug },
    })
  })
}
