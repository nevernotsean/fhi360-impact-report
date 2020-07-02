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

import { Helmet } from "react-helmet"
import SideNav from "./SideNav"
import LightModeTrigger from "./LightModeTrigger"
import theme from "../styles/index"
import { Box } from "rebass/styled-components"
import Intro from "./Intro"
import { useMediaQuery } from "react-responsive"

const Layout = ({
  children,
  sidenavData,
  bg,
  hideMenuButton,
  headerStyle,
  showIntro,
  ...props
}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [sideNavOpen, setSideNavOpen] = React.useState(false)
  const isMobile = useMediaQuery({
    query: `(max-width: ${theme.breakpoints[0]})`,
  })

  return (
    <Providers>
      <Helmet></Helmet>
      <GlobalStyles bg={bg} />
      <SideNav
        data={sidenavData}
        isOpen={sideNavOpen}
        closeSidenav={() => setSideNavOpen(false)}
      ></SideNav>
      <Header
        siteTitle={data.site.siteMetadata.title}
        hideMenuButton={hideMenuButton}
        headerStyle={headerStyle}
        sideNavOpen={sideNavOpen}
        setSideNavOpen={setSideNavOpen}
      />
      {showIntro && <Intro></Intro>}
      <main id={"main-content"} style={{ paddingTop: isMobile ? 50 : 100 }}>
        {children}
        <Footer></Footer>
      </main>
    </Providers>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
