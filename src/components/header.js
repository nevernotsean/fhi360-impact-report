import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from "../assets/svg/fhi-logo-dark.svg"
import MenuButton from "../assets/svg/menu-button.svg"
import { Flex, Box, Text } from "rebass/styled-components"
import styled from "styled-components"
import theme from "../styles/index"
import { LocomotiveContext } from "../hooks/useLocomotiveScroll"
import ShareButton from "../assets/svg/share-icon.svg"
import { useMediaQuery } from "react-responsive"

const Header = ({
  siteTitle,
  setSideNavOpen,
  sideNavOpen,
  hideMenuButton = false,
  headerStyle,
  ...props
}) => {
  const [loaded, setLoaded] = React.useState()
  const [scrolledPast, setScrolledPast] = React.useState()
  const context = React.useContext(LocomotiveContext)

  const isMobile = useMediaQuery(...theme.isMobileQuery)

  React.useEffect(() => {
    setLoaded(true)

    if (context.scroll) {
      context.scroll.on("scroll", props => {
        setScrolledPast(props.scroll.y >= 50)
      })
    }
  }, [loaded])

  React.useEffect(() => {
    console.log("isMobile: ", isMobile)
  }, [isMobile])

  const headerHeight = isMobile ? 50 : scrolledPast ? 75 : 100

  return (
    <Container style={{ ...headerStyle }} scrolledPast={scrolledPast}>
      <Flex
        height={headerHeight}
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
          <Link
            to="/"
            fontSize={[8, 12]}
            style={{
              zIndex: 995,
              color: theme.colors.black,
              textDecoration: `none`,
            }}
          >
            <Box width={[60, 100]} mr={20}>
              <Logo className="fill-detect"></Logo>
            </Box>
          </Link>
          <Text
            as={"span"}
            className="color-detect header-title"
            style={{
              marginBottom: !isMobile && "-6px",
              fontWeight: 700,
              letterSpacing: "1px",
              fontSize: isMobile && 10,
              display: isMobile && "none",
            }}
          >
            The science of improving lives
          </Text>
        </h1>
        <Flex>
          <Box
            width={26}
            sx={{ cursor: "pointer", opacity: sideNavOpen ? 0 : 1 }}
          >
            <ShareButton
              className="allow-pointer-events fill-detect stroke-detect"
              onClick={() => {
                navigator.clipboard
                  .writeText(window.location)
                  .then(() => alert(`Link copied: ${window.location}`))
              }}
            ></ShareButton>
          </Box>
          {hideMenuButton != true && (
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
  pointer-events: none;

  position: fixed;
  top: 0;
  left: 0%;
  width: 100%;
  max-width: 100vw;

  z-index: 99;

  background: ${({ theme }) => theme.colors.black};

  .allow-pointer-events {
    pointer-events: all;
  }

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

export default Header
