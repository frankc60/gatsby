import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/image-1.jpeg"
import Image from "gatsby-image"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "image-3.jpeg" }) {
      childImageSharp {
        fixed(width: 300, height: 280) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "image-2.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
//

const Images = () => {
  const data = useStaticQuery(getImages)
  console.log(data)
  return (
    <section className="images">
      <article className="single-image">
        <h4>basic image</h4>
        <img src={img} alt="sss" width="100%" />
      </article>
      <article className="single-image">
        <h4>fixed blur image</h4>
        <Image fixed={data.fixed.childImageSharp.fixed} />
      </article>
      <article className="single-image">
        <h4>fluid SVG image</h4>
        <Image fluid={data.fluid.childImageSharp.fluid} />
      </article>
      hellon from Images
    </section>
  )
}

export default Images
