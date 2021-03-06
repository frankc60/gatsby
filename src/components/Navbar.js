import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav className="navTop">
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
          <Link to="/examples/">Examples</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/example2/">Example2</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/images/">Images</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/mainproducts/">Main Products</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar
