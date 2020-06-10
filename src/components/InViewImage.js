import React, { useState } from "react"
import { useInView } from "react-intersection-observer"
import styled from "styled-components"
import { animated } from "react-spring"
import useDimensions from "react-use-dimensions"
import { Box } from "reflexbox"

const InViewImage = ({
  src,
  alt,
  scrollSpeed = 1,
  imageSpeed = 1,
  revealSpeed = 0.75,
  imageCredits = "C 2020 IMAGE CREDITS",
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

  return (
    <Container
      ref={parentRef}
      data-scroll
      data-scroll-speed={scrollSpeed}
      h={inView ? height : 0}
      w={width}
      revealSpeed={revealSpeed}
    >
      <div className="mask">
        <img
          ref={ref}
          src={src}
          alt={alt}
          data-scroll
          data-scroll-speed={-imageSpeed}
          onLoad={() => setLoaded(true)}
          {...props}
        ></img>
      </div>
      {/* <small className="image-credits">{imageCredits}</small> */}
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
