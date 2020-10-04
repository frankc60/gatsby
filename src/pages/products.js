import React, { Component } from "react"
import Layout from "../components/Layout"
import styles from "../components/products.module.css"
console.log(styles)

export default class products extends Component {
  render() {
    return (
      <Layout>
        <div className={styles.page}>
          <h2>my products page!! x</h2>
          <p className={styles.text}>hello world from products</p>
        </div>
      </Layout>
    )
  }
}
