import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

export default ({ data }) => {
  const {
    product: {
      info: { info },
      title,
      price: cost,
      image: { fixed },
    },
  } = data
  return (
    <Layout>
      <section style={{ textAlign: "center" }}>
        <p>
          <Link to="/mainproducts/">Main Products..</Link>
        </p>
        <h1>Product Template</h1>

        <article className="single-product">
          <Img fixed={fixed} alt={title} />
          <article>
            {" "}
            <h3>
              {title}
              <span id="single-product-cost"> £{cost}</span>
            </h3>
            {info}
          </article>
        </article>
      </section>
      <pre>{JSON.stringify(data)}</pre>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    product: contentfulProduct(slug: { eq: $slug }) {
      title
      price
      info {
        info
      }
      image {
        fixed(width: 500) {
          ...GatsbyContentfulFixed
        }
      }
    }
  }
`
