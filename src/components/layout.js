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
import Footer from "./Footer"
import { LocomotiveScrollFull } from "../hooks/useLocomotiveScroll"

import { Helmet } from "react-helmet"
import SideNav from "./SideNav"

const Layout = ({ children, sidenavData, ...props }) => {
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
      <Helmet></Helmet>
      <GlobalStyles />

      <LocomotiveScrollFull>
        <SideNav data={sidenavData}></SideNav>
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
