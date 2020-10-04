import React from "react"
import Layout from "../components/Layout"
import { ExampleButton } from "../components/button"
import styles from "../components/index.module.css"

export default function Home() {
  return (
    <Layout>
      <div className={styles.page}>
        <h2>Hello world!!</h2>
        <ExampleButton>click me</ExampleButton>
        <p className={styles.text}>peace out</p>
      </div>
    </Layout>
  )
}
