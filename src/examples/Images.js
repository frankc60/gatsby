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
    fluid2: file(relativePath: { eq: "image-4.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    fluid3: file(relativePath: { eq: "image-5.webp" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
        original {
          width
          height
        }
      }
      size
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
      <article className="single-image">
        <h4>fluid 2 image</h4>
        <Image fluid={data.fluid2.childImageSharp.fluid} />
      </article>
      <article className="single-image">
        <h4>fluid 3 webp image</h4>
        <Image fluid={data.fluid3.childImageSharp.fluid} />
        <p>Dims:{data.fluid3.childImageSharp.fluid.sizes}</p>
        <p>Size: {data.fluid3.size}</p>
        <p>Orig Width: {data.fluid3.childImageSharp.original.width}</p>
        <p>Orig Height: {data.fluid3.childImageSharp.original.height}</p>
      </article>
      hellon from Images
    </section>
  )
}

export default Images
