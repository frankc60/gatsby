import React from "react"
import Header from "../examples/Header"
import Layout from "../components/Layout"
import StaticQuery from "../examples/oldStaticExample"

const examples = () => {
  return (
    <Layout>
      <h2>hello from examples page</h2>
      <Header />
      <StaticQuery />
    </Layout>
  )
}

export default examples
