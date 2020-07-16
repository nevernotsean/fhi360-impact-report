import React from "react"
import Image from "./image"
import welcome from "../images/welcome-fpo.gif"
import { Box } from "rebass/styled-components"
import styled, { createGlobalStyle } from "styled-components"
import Media from "./Media"

const Intro = props => {
  const [loaded, setLoaded] = React.useState(false)

  React.useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <>
      <GlobalStyle loaded={loaded}></GlobalStyle>

      <Media greaterThanOrEqual={"sm"}>
        <Container loaded={loaded}>
          <Box id={"loading-screen"}>
            <Image src={welcome}></Image>
          </Box>
        </Container>
      </Media>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  #sections  {
    opacity: 0;
    ${({ loaded }) => loaded && `opacity: 1;`}
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    #sections { opacity: 1; }
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
      object-position: center 40%;
      display: block;

      @media screen and (max-width: ${({ theme }) => theme.breakpoints[0]}) {
        object-fit: contain;
        background: #f37323;
      }
    }
  }
`

export default Intro
