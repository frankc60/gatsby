import React from "react"
import Layout from "../components/Layout"
import styles from "../components/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>this is my blog page</h1>
        <p className={styles.text}>
          lorem ipsum, blad blahadfsf fsf sdaf sadf saf sdf asfsadf.
        </p>
      </div>
    </Layout>
  )
}

export default blog
