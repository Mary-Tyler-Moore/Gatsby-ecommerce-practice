import React from "react"
import * as styles from '../styles/Index.module.scss'
import SEO from "../components/seo"

export default () => (
  <div className={styles.Container}>
    <SEO title="Home" />
    <h1>Hello world!</h1>
    <p>CSS preprocessors are pretty great.</p>
  </div>
);