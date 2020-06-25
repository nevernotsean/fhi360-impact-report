import React from "react"
import styled from "styled-components"
import { Flex, Box } from "rebass/styled-components"
import { Link } from "gatsby"
import { LocomotiveContext } from "./../hooks/useLocomotiveScroll"

const SideNav = ({ data, ...props }) => {
  const context = React.useContext(LocomotiveContext)
  const [loaded, setLoaded] = React.useState()

  React.useEffect(() => {
    if (context.scroll) {
      // console.log("LOADED")
      setLoaded(true)
    }
  }, [context, context.scroll])

  return (
    <Container
      id="sidenav"
      data-scroll
      data-scroll-sticky
      data-scroll-target="#sidebar-target"
    >
      <Flex flexDirection={"column"}>
        {data.map(({ label, id, component, ...props }, i) => (
          <ScrollToLink
            key={id + i}
            {...props}
            onClick={() => {
              if (context.scroll) context.scroll.scrollTo(`#${id}`)
            }}
          >
            {label}
          </ScrollToLink>
        ))}
      </Flex>
    </Container>
  )
}

const ScrollToLink = props => <a className="scrollToLink" {...props}></a>

const Container = styled(Box)`
  position: fixed;
  right: 0;
  max-width: 480px;
  width: 100%;
  height: 100vh;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  z-index: 9999;

  .scrollToLink {
    cursor: pointer;
  }
`

export default SideNav
