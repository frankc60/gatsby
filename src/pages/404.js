import React from "react"
import Layout from "../components/Layout"

export default function error() {
  return (
    <Layout>
      <h3 style={{ color: "red", textTransform: "uppercase" }}>
        this is our 404 error page
      </h3>
    </Layout>
  )
}
