import React, { useState } from "react"
import { useInView } from "react-intersection-observer"
import styled from "styled-components"
import { animated } from "react-spring"
import useDimensions from "react-use-dimensions"
import { Box, Image } from "rebass/styled-components"
import Pattern from "../images/pattern.png"
import { useMediaQuery } from "react-responsive"
import theme from "./../styles/index"

const InViewImage = ({
  src,
  alt,
  scrollSpeed = 1,
  imageSpeed = 1,
  revealSpeed = 0.75,
  usePattern,
  pattern = Pattern,
  sx,
  maxHeight,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false)
  const [ref, { height, width }] = useDimensions()

  const [parentRef, inView] = useInView({
    rootMargin: "20% 0px -20% 0px",
    threshold: 1,
    triggerOnce: true,
  })

  React.useEffect(() => {
    if (loaded && height === 0) window.dispatchEvent(new Event("resize"))
  }, [height, inView, loaded])

  const isMobile = useMediaQuery({
    query: `(max-width: ${theme.breakpoints[0]})`,
  })

  const patternMove = isMobile ? 15 : 30

  return (
    <Container
      ref={parentRef}
      data-scroll
      data-scroll-speed={scrollSpeed}
      h={inView ? height : 0}
      w={width}
      sx={sx}
      revealSpeed={revealSpeed}
      style={{ position: usePattern && "relative" }}
    >
      <div className="mask">
        <Image
          ref={ref}
          src={src}
          alt={alt}
          data-scroll
          data-scroll-speed={-imageSpeed}
          onLoad={() => setLoaded(true)}
          maxHeight={maxHeight}
          {...props}
        ></Image>
      </div>
      {usePattern && (
        <Box
          style={{
            position: "absolute",
            zIndex: -1,
            top: "0",
            left: 0,
            width: width + "px",
            height: height + "px",
            background: `url(${pattern})`,
            transition: `transform 0.25s ease-out ${
              revealSpeed + 0.01
            }s, opacity 1ms linear ${revealSpeed}s`,
            transform:
              inView && `translate(${patternMove}px, -${patternMove}px)`,
            opacity: inView ? 1 : 0,
          }}
        ></Box>
      )}
    </Container>
  )
}

const Container = styled(Box)`
  .mask {
    width: 100%;
    height: 100%;
    overflow: hidden;
    ${({ revealSpeed }) =>
      revealSpeed !== 0 && `transition: height ${revealSpeed}s ease`};

    img {
      width: 100%;
      object-fit: cover;
      object-position: center center;
    }
  }

  ${({ h, w }) =>
    h !== undefined &&
    `
      height: ${h}px;
      
      .mask {
        max-height: ${h}px;
        height: ${h}px;
      }
    `}
`
export default InViewImage
