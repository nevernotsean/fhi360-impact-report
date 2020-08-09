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
import "../styles/locomotive-scroll.css"

import Providers from "./Providers"
import GlobalStyles from "../styles/global"
import Footer from "./Footer"

import { Helmet } from "react-helmet"
import SideNav from "./SideNav"
import Intro from "./Intro"
import styled from "styled-components"
import { mediaStyles } from "./Media"

import browserUpdate from "browser-update"
import { isBrowser } from "react-device-detect"
import HeroLetter from "./HeroLetter"

const Layout = ({
  children,
  sidenavData,
  bg,
  hideMenuButton,
  headerStyle,
  showIntro,
  pageTitle,
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

  // console.log(props.location)

  return (
    <Providers location={props.location}>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{mediaStyles}</style>
      </Helmet>
      <GlobalStyles bg={bg} />
      <SideNav
        data={sidenavData}
        isOpen={sideNavOpen}
        closeSidenav={() => setSideNavOpen(false)}
      ></SideNav>
      <Header
        siteTitle={data.site.siteMetadata.title}
        pageTitle={pageTitle}
        hideMenuButton={hideMenuButton}
        headerStyle={headerStyle}
        sideNavOpen={sideNavOpen}
        setSideNavOpen={setSideNavOpen}
        hasIntro={showIntro}
      />
      {showIntro && <Intro></Intro>}
      <StyledMain id={"main-content"} className={showIntro && "hasIntro"}>
        {children}
        <Footer showCredits={showIntro}></Footer>
      </StyledMain>
      {isBrowser && <BrowserUpdate></BrowserUpdate>}
      {showIntro && <HeroLetter></HeroLetter>}
    </Providers>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const StyledMain = styled.main`
  padding-top: 100px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    padding-top: 50px;
  }
`
const BrowserUpdate = props => {
  React.useEffect(() => {
    browserUpdate({
      required: {
        e: -2,
        f: -2,
        o: -2,
        s: -2,
        c: -2,
      },
      insecure: true,
      // test: true,
      style: "corner",
    })
  }, [])

  return null
}

export default Layout
