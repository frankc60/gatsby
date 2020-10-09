import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <section>
      ----------------------------------------------------
      <div className="navBottom">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/blog/">Blog</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/products/">Products</Link>
          </li>
        </ul>
        <ul>
          <li>
            <a href="https://www.google.com">Google</a>
          </li>
        </ul>
      </div>
    </section>
  )
}
export default Footer
