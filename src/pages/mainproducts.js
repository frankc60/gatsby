import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "../components/products.module.css"
import Image from "gatsby-image"
import { Link } from "gatsby"

const ComponentName = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data

  console.log(products)
  return (
    <Layout>
      <h1>Main Products Paged</h1>
      <section className={styles.page}>
        {products.map(item => {
          return (
            <article key={item.id}>
              <h3>
                Title: {item.title} <span>£{item.price}</span>
              </h3>
              <Image fluid={item.image.fluid} alt={products.title} />

              <Link to={`/products/${item.slug}`}>More Info...</Link>
            </article>
          )
        })}
      </section>
      <pre>json-- {JSON.stringify(data, null, 4)} --json</pre>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        slug
        price
        title
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default ComponentName
