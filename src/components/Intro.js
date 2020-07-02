import React from "react"
import { Image } from "rebass"
import welcome from "../images/welcome-fpo.gif"
import { Box } from "rebass/styled-components"
import styled, { createGlobalStyle } from "styled-components"
import { useMediaQuery } from "react-responsive"
import theme from "./../styles/index"

const Intro = props => {
  const [loaded, setLoaded] = React.useState(false)

  React.useEffect(() => {
    setLoaded(true)
  }, [])

  const isMobile = useMediaQuery({
    query: `(max-width: ${theme.breakpoints[0]})`,
  })

  if (isMobile) return null

  return (
    <>
      <GlobalStyle loaded={loaded}></GlobalStyle>
      <Container loaded={loaded}>
        <Box id={"loading-screen"}>
          <Image src={welcome}></Image>
        </Box>
      </Container>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  #sections  {
    opacity: 0;
    ${({ loaded }) => loaded && `opacity: 1;`}
  }
`

const Container = styled(Box)`
  position: fixed;
  z-index: 99999;
  pointer-events: none;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  #loading-screen {
    position: relative;
    width: 100vw;
    height: 100vh;
    transition: all 800ms ease 2s;
    transform-origin: right center;

    ${({ loaded }) =>
      loaded &&
      `
      /* opacity: 0; */
      transform: translateY(-100vh);
  `}

    img {
      position: absolute;
      width: 100vw;
      height: 100vh;
      left: 0;
      top: 0;

      object-fit: cover;
      object-position: center center;
      display: block;
    }
  }
`

export default Intro
