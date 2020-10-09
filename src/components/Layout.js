import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import SEO from "./seo"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
