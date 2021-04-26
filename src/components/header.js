import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from "../assets/svg/fhi-logo-dark.svg"
import Logo2020 from "../assets/svg/fhi-logo-2020.svg"
import MenuButton from "../assets/svg/menu-button.svg"
import { Flex, Box, Image } from "rebass/styled-components"
import styled from "styled-components"
import theme from "../styles/index"
import { LocomotiveContext } from "../hooks/useLocomotiveScroll"
import ShareButton from "../assets/svg/share-icon.svg"
import Media from "./Media"
import BackToTop from "./BackToTop"
import Tagline from "../assets/svg/tagline.svg"
import { isMobile } from "react-device-detect"

import FbIcon from "../assets/svg/fb-icon.svg"
import TwitterIcon from "../assets/svg/twitter-icon.svg"
import LinkedinIcon from "../assets/svg/linkedin-icon.svg"

const Header = ({
  siteTitle,
  pageTitle,
  setSideNavOpen,
  sideNavOpen,
  hideMenuButton = false,
  headerStyle,
  hasIntro,
  altLogo,
  ...props
}) => {
  const [loaded, setLoaded] = React.useState()
  const [scrolledPast, setScrolledPast] = React.useState()
  const context = React.useContext(LocomotiveContext)

  React.useEffect(() => {
    setLoaded(true)

    if (context.scroll) {
      context.scroll.on("scroll", props => {
        setScrolledPast(props.scroll.y >= 50)
      })
    }
  }, [loaded])

  const headerHeight = scrolledPast ? 75 : 100

  return (
    <Container
      style={{ ...headerStyle }}
      scrolledPast={scrolledPast}
      className={hasIntro && "hasIntro"}
    >
      <Flex
        height={[50, headerHeight]}
        p={["0 20px", "0 60px 0 20px"]}
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{ transition: "height .5s ease" }}
      >
        <h1
          className="allow-pointer-events"
          style={{
            margin: 0,
            color: theme.colors.black,
            textDecoration: `none`,
            textTransform: "uppercase",
            fontSize: "12px",
            display: "flex",
            alignItems: "center",
            zIndex: 1,
            position: "relative",
          }}
        >
        {altLogo ? (
          <><a
            href={"https://www.fhi360.org/"}
            style={{
              zIndex: 995,
              color: theme.colors.black,
              textDecoration: `none`,
            }}
          >
            <Box width={[200, 260]} mr={20}>
             <Logo2020 className="fill-detect"></Logo2020> 
            </Box>
          </a></>
        ): (
          <><a
            href={"https://www.fhi360.org/"}
            style={{
              zIndex: 995,
              color: theme.colors.black,
              textDecoration: `none`,
            }}
          >
            <Box width={[60, 100]} mr={20}>
             <Logo className="fill-detect"></Logo> 
            </Box>
          </a>
          <Media greaterThanOrEqual="md">
            <a href={"https://www.fhi360.org/"}>
              <Tagline style={{ height: "10px" }}></Tagline>
            </a>
          </Media></>
        )
}
          
        </h1>
        <Flex alignItems="center">
          <BackToTop
            sx={{
              color: "white",
              cursor: "pointer",
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: [12, 16],
            }}
            mr={20}
          >
            <a>{pageTitle}</a>
          </BackToTop>
          <ShareComponent></ShareComponent>
          {hideMenuButton !== true && (
            <Box
              ml={20}
              height={26.66}
              width={32}
              sx={{ cursor: "pointer", opacity: sideNavOpen ? 0 : 1 }}
            >
              <MenuButton
                onClick={() => setSideNavOpen(true)}
                className="allow-pointer-events stroke-detect"
              ></MenuButton>
            </Box>
          )}
        </Flex>
      </Flex>
    </Container>
  )
}

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0%;
  width: 100%;
  max-width: 100vw;

  z-index: 99;

  background: ${({ theme }) => theme.colors.black};

  .color-detect {
    transition: color 0.7s ease;
    color: ${({ theme }) => theme.colors.white} !important;
  }
  .fill-detect path {
    transition: fill 0.7s ease;
    fill: ${({ theme }) => theme.colors.white} !important;
  }
  .stroke-detect {
    line {
      transition: stroke 0.7s ease;
      stroke: ${({ theme }) => theme.colors.white} !important;
    }
  }
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const ShareComponent = props => {
  const [isHover, setHover] = React.useState(false)

  return (
    <ShareStyled
      sx={{ opacity: props.sideNavOpen ? 0 : 1 }}
      onClick={() => setHover(!isHover)}
      isHover={isHover}
    >
      <ShareButton
        width="26"
        height="30"
        className="allow-pointer-events fill-detect stroke-detect share-button"
        // onClick={() => {
        //   isMobile &&
        //     navigator.clipboard
        //       .writeText(window.location)
        //       .then(() => alert(`Link copied: ${window.location}`))
        // }}
      ></ShareButton>
      <a
        className="share-icon"
        data-fb-share=""
        href="https://www.facebook.com/sharer/sharer.php?u=https://www.fhi360.org/annual-report-2020"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FbIcon width="30" height="30" alt="share on facebook" />
      </a>
      <a
        className="share-icon"
        data-tw-share=""
        href="https://twitter.com/intent/tweet?text=When people have the chance to improve their lives and build their communities, they will seize the opportunity. Learn more about how FHI 360 partners with communities and nations to support people in addressing the major forces that affect their lives. https://www.fhi360.org/annual-report-2020"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TwitterIcon width="30" height="30" alt="retweet" />
      </a>
      <a
        className="share-icon"
        data-li-share=""
        href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://www.fhi360.org/annual-report-2020&amp;title=When people have the chance to improve their lives and build their communities, they will seize the opportunity. Learn more about how FHI 360 partners with communities and nations to support people in addressing the major forces that affect their lives. &amp;source=LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedinIcon width="30" height="30" alt="share on linkedin" />
      </a>
    </ShareStyled>
  )
}

const ShareStyled = styled(Flex)`
  cursor: pointer;

  .share-icon {
    display: none;
    margin-left: 10px;
    svg path {
      fill: #fff;
    }
  }

  ${({ isHover }) =>
    isHover &&
    `
      .share-icon {
        display: block;
      }
      .share-button {
        display: none;
      }
    `}
`

export default Header
