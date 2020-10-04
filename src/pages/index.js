import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div>
      Hello people!d
      <div>
        <Link to="/blog/">internal blog page</Link>
        <br />
        <a href="https://www.google.com">external google page</a>
      </div>
    </div>
  )
}
