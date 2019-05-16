/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"
import Header from './global/header'
import Footer from './global/Footer';
import "./layout.css"

const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
