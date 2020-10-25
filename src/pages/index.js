import React, { Link } from "react"
import Layout from "../components/Layout"
import { ExampleButton } from "../components/button"
import styles from "../components/index.module.css"

export default function Home() {
  return (
    <Layout>
      <div className={styles.page}>
        <h2>Hello world!!</h2>
        <ExampleButton>click me</ExampleButton>
        <Link to="https://github.com/frankc60/gatsby">Github page</Link>
        <Link to="https://app.contentful.com/">Contentful data (products)</Link>

        <p className={styles.text}>peace out</p>
      </div>
    </Layout>
  )
}
