import React, { useState, useEffect, useRef, useCallback } from "react"
import styled from "styled-components"

// import InViewMonitor from "react-inview-monitor"
import { useInView } from "react-intersection-observer"

const HandDrawnSVG = ({
  svg: SvgComponent,
  duration = 1,
  delay = 0,
  useInview = true,
  animated = false,
  triggerOnce,
  threshold,
  rootMargin = "20% 0px -20% 0px",
  ...props
}) => {
  const ref = useRef()
  const [inViewRef, inView, entry] = useInView({
    rootMargin,
    threshold: 0.8,
    threshold,
    triggerOnce,
  })

  const setRefs = useCallback(
    node => {
      ref.current = node
      inViewRef(node)
    },
    [inViewRef]
  )

  const [pathLength, setPathLength] = useState(0)

  useEffect(() => {
    if (!ref.current) return

    const path = ref.current.querySelector(".animate")
    if (path) setPathLength(path.getTotalLength())
  }, [])

  return (
    <MaskOuter
      {...props}
      ref={setRefs}
      length={pathLength}
      animated={useInview ? inView : animated}
      duration={duration}
      delay={delay}
    >
      <SvgComponent></SvgComponent>
    </MaskOuter>
  )
}

const MaskOuter = styled.div`
  .animate {
    opacity: ${({ length }) => (length == 0 ? 0 : 1)};
    stroke-dasharray: ${({ length }) => `${length}px ${length}px`};
    stroke-dashoffset: ${({ length }) => `${length}px`};

    ${({ animated, duration, delay }) =>
      animated &&
      `
      stroke-dashoffset: 0; 
      transition: stroke-dashoffset ${duration}s ease ${delay}s;

      `};
  }

  .animate2 {
    opacity: ${({ length }) => (length > 0 ? 1 : 0)};
    stroke-dasharray: ${({ length }) => `${length}px ${length}px`};
    stroke-dashoffset: ${({ length }) => `${length}px`};

    ${({ animated, duration, delay }) =>
      animated &&
      `
      stroke-dashoffset: 0; 
      transition: stroke-dashoffset ${duration}s ease ${duration * 2 + delay}s;
      `};
  }
`

export default HandDrawnSVG
