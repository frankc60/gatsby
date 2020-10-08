import React from "react"
import { graphql } from "gatsby"

const ComponentName = ({ data }) => {
  return (
    <div>
      <h2>{data.product.title}</h2>
      <h2>{data.product.price}</h2>
      <span>{data.product.id}</span>
    </div>
  )
}

export const query = graphql`
  {
    product: contentfulProduct(slug: { eq: "sectional-sofa" }) {
      slug
      price
      id
      title
    }
  }
`

export default ComponentName
