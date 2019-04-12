import React from "react"
import { FaBeer } from 'react-icons/fa';

import Header from '../components/header/header'
import * as layout from '../styles/Layout.module.scss'
import SEO from "../components/seo"

export default () => (
  <div className={layout.Gridcontainer}>
    <SEO title="Home" />
    <div className={layout.Gridcontainer__header}>
      <Header />
    </div>
    <div className={layout.Gridcontainer__hero}>
      hero
    </div>
  </div>
);