import React from "react"

import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      info: siteMetadata {
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
`

const Header = () => {
  const data = useStaticQuery(getData)

  //es6 destructoring!!!
  const {
    site: {
      info: {
        person: { name, age },
      },
    },
  } = data

  //console.log(data)
  return (
    <div>
      <h2>name : {data.site.info.person.name}</h2>
      <h2>age : {data.site.info.person.age}</h2>

      <h2>name : {name}</h2>
      <h2>age : {age}</h2>
    </div>
  )
}

export default Header
