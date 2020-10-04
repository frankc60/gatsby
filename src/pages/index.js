import React from "react"
import { Link } from "gatsby"
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <div>
      <Navbar />
      Hello pedople! navbar component above!!
      <div>
        <Link to="/blog/">internal blog page</Link>
        <br />
        <a href="https://www.google.com">external google page</a>
      </div>
    </div>
  )
}
