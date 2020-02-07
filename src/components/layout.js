import React from "react"
import PropTypes from "prop-types"

import { GlobalStyles } from "./globalStyles"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header siteTitle="HWP" />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
