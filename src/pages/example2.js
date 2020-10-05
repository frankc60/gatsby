import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

const example2 = ({ data }) => {
  const {
    site: {
      info: { author },
    },
  } = data

  console.log(`author:${author}`)
  return (
    <Layout>
      <p>hello</p>
      <h2>world</h2>
      <h5>author: {author} via a pageQuery</h5>
    </Layout>
  )
}

//must export the variable to be able to use in props of the main function
export const data = graphql`
  query MyQuery2 {
    site {
      info: siteMetadata {
        title
        author
        description
      }
    }
  }
`

export default example2
