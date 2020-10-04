import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          person {
            name
            age
          }
          title
          description
          author
          data
        }
      }
    }
  `)
  return (
    <div>
      <h3>{data.site.siteMetadata.person.name}</h3>
      <h3>{data.site.siteMetadata.person.age}</h3>
    </div>
  )
}

export default ComponentName
