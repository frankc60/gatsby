import React from "react"
import { StaticQuery, graphql } from "gatsby"

const ComponentName = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <pre>older StaticQuery: {JSON.stringify(data, null, 4)}</pre>
    )}
  ></StaticQuery>
)

export default ComponentName
