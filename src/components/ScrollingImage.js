import React from "react"
import styled from "styled-components"
import { Box } from "rebass/styled-components"
import Image from "./image.js"

const ScrollingImage = ({ src, alt = "", ...props }) => {
  return (
    <Container className="hero-image">
      <div className="mask">
        <Box data-scroll data-scroll-speed={-1.5}>
          <Image
            src={src}
            alt={alt}
            lazyload={false}
            debug={true}
            mt={[0, 50]}
            {...props}
          ></Image>
        </Box>
      </div>
    </Container>
  )
}

const Container = styled(Box)`
  .mask {
    width: 100%;
    height: 0;
    padding-bottom: 50vw;
    overflow: hidden;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
      padding-bottom: 840px;
    }

    img {
      width: 100%;
      object-fit: cover;
      object-position: center center;
    }
  }
`
export default ScrollingImage
