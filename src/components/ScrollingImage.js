import React, { useState } from "react"
import { useInView } from "react-intersection-observer"
import styled from "styled-components"
import useDimensions from "react-use-dimensions"
import { Box } from "rebass/styled-components"
import Pattern from "../images/pattern.png"
// import { useMediaQuery } from "react-responsive"
// import { LocomotiveContext } from "../hooks/useLocomotiveScroll"
import Image from "./image.js"

const ScrollingImage = ({
  src,
  alt = "",
  scrollSpeed = 1,
  imageSpeed = 1,
  sx,
  maxHeight,
  lazyload,
  pb = "114%",
  ...props
}) => {
  const [dims, setDims] = useState({})

  // React.useEffect(() => {
  //   console.log(dims)
  // }, [dims])

  return (
    <Container
      data-scroll
      data-scroll-speed={scrollSpeed}
      h={dims.height}
      pb={pb}
    >
      <div className="mask">
        <Box data-scroll data-scroll-speed={-imageSpeed}>
          <Image
            src={src}
            alt={alt}
            onLoad={d => setDims(d)}
            maxHeight={maxHeight}
            lazyload={lazyload}
            debug={true}
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
    height: 100%;
    overflow: hidden;
    padding-bottom: ${({ pb }) => pb};
    ${({ revealSpeed }) =>
      revealSpeed !== 0 && `transition: height ${revealSpeed}s ease 300ms`};

    img {
      width: 100%;
      object-fit: cover;
      object-position: center center;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    ${({ h }) =>
      `
      height: ${h !== undefined ? h + "px" : 0 + "px"};
      
      .mask {
        height: ${h !== undefined ? h + "px" : 0 + "px"};
      }
    `}
  }
`
export default ScrollingImage
