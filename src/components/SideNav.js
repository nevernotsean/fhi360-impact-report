import React from "react"
import styled from "styled-components"
import { Flex, Box } from "rebass/styled-components"
import { Link } from "gatsby"
import { LocomotiveContext } from "./../hooks/useLocomotiveScroll"
import CloseSVG from "../assets/svg/close-button.svg"

const SideNav = ({ data, isOpen, closeSidenav, ...props }) => {
  const context = React.useContext(LocomotiveContext)
  const [loaded, setLoaded] = React.useState()

  React.useEffect(() => {
    if (context.scroll) {
      // console.log("LOADED")
      setLoaded(true)
    }
  }, [context, context.scroll])

  if (!data) return null

  return (
    <Container
      data-scroll
      data-scroll-sticky
      data-scroll-target="#sidebar-target"
      isOpen={isOpen}
    >
      <div className="background" onClick={() => closeSidenav()}></div>
      <Flex flexDirection={"column"} alignItems={"flex-end"} id="sidenav">
        <Box
          className={"closeButton"}
          width={32}
          pt={35}
          pb={80}
          onClick={() => closeSidenav()}
        >
          <CloseSVG></CloseSVG>
        </Box>
        {data.map(({ label, id, component, url, ...props }, i) =>
          url ? (
            <Link key={id + i} to={url} {...props}>
              {label}
              <div className="hr"></div>
            </Link>
          ) : (
            <ScrollToLink
              key={id + i}
              {...props}
              onClick={() => {
                if (context.scroll) {
                  closeSidenav()
                  context.scroll.scrollTo(`#${id}`)
                }
              }}
            >
              {label}
              <div className="hr"></div>
            </ScrollToLink>
          )
        )}
      </Flex>
    </Container>
  )
}

const ScrollToLink = props => <a className="scrollToLink sans" {...props}></a>

const Container = styled(Box)`
  position: relative;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;

  z-index: 9997;

  ${({ isOpen }) => !isOpen && `opacity: 0; pointer-events: none;`}

  transition: opacity 300ms linear;

  .background {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    z-index: 9998;
    background: rgba(0, 0, 0, 0.2);
  }

  .closeButton {
    cursor: pointer;
  }

  #sidenav {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    max-width: 320px;
    width: 100%;
    height: 100vh;
    padding-right: 60px;
    background: rgba(255, 255, 255, 1);
    z-index: 9999;
  }

  .scrollToLink {
    cursor: pointer;

    font-size: 18px;
    line-height: 44px;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 2px;
    text-align: right;

    position: relative;

    .hr {
      border-bottom: 2px solid black;
      transition: transform 500ms ease;
      transform: scaleX(0);
      transform-origin: right center;
      position: absolute;
      width: 100%;
      bottom: 5px;
      right: 0;
    }

    &:hover,
    &:active {
      .hr {
        transform: scaleX(1);
      }
    }
  }
`

export default SideNav
