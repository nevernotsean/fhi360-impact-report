/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../styles/layout.css"

import Providers from "./Providers"
import GlobalStyles from "../styles/global"
import { Box } from "reflexbox"
import Footer from "./Footer"
import { SmoothScrollFull } from "../hooks/useSmoothScrollbar"
import { LocomotiveScrollFull } from "../hooks/useLocomotiveScroll"

import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Providers>
      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/cua6unr.css" />
      </Helmet>
      <GlobalStyles />
      {/* <SmoothScrollFull /> */}
      <LocomotiveScrollFull>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <Footer></Footer>
      </LocomotiveScrollFull>
    </Providers>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
