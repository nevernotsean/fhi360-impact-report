import React, { useState, useEffect, useRef, useCallback } from "react"
import styled from "styled-components"

// import InViewMonitor from "react-inview-monitor"
import { useInView } from "react-intersection-observer"

const HandDrawnSVG = ({
  svg: SvgComponent,
  duration = 1,
  duration2 = 1,
  delay = 0,
  useInview = true,
  animated = false,
  triggerOnce,
  threshold,
  rootMargin = "20% 0px -20% 0px",
  overrideLength1,
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
  const [pathLength1, setPathLength1] = useState(0)
  const [pathLength2, setPathLength2] = useState(0)
  const [pathLength3, setPathLength3] = useState(0)

  useEffect(() => {
    if (!ref.current) return

    const path = ref.current.querySelector(".animate")
    const path1 = ref.current.querySelector(".animate2")
    const path2 = ref.current.querySelector(".animate3")
    const path3 = ref.current.querySelector(".animate4")

    if (path) setPathLength(path.getTotalLength())
    if (path1) setPathLength1(path1.getTotalLength())
    if (path2) setPathLength2(path2.getTotalLength())
    if (path3) setPathLength3(path3.getTotalLength())
  }, [])

  return (
    <MaskOuter
      {...props}
      ref={setRefs}
      length={overrideLength1 || pathLength}
      length1={pathLength1}
      length2={pathLength2}
      length3={pathLength3}
      animated={useInview ? inView : animated}
      duration={duration}
      duration2={duration2}
      delay={delay}
    >
      <SvgComponent></SvgComponent>
    </MaskOuter>
  )
}

const animate = ({ animated, duration, duration2, delay }, i) => {
  duration = i == 1 ? duration : duration2
  delay = i == 1 ? delay : duration * i + delay

  return (
    animated &&
    ` stroke-dashoffset: 0; transition: stroke-dashoffset ${duration}s ease ${delay}s; `
  )
}

const MaskOuter = styled.div`
  .animate {
    opacity: ${({ length }) => (length == 0 ? 0 : 1)};
    stroke-dasharray: ${({ length }) => `${length}px ${length}px`};
    stroke-dashoffset: ${({ length }) => `${length}px`};

    ${props => animate(props, 1)};
  }

  .animate2 {
    opacity: ${({ length1 }) => (length1 > 0 ? 1 : 0)};
    stroke-dasharray: ${({ length1 }) => `${length1}px ${length1}px`};
    stroke-dashoffset: ${({ length1 }) => `${length1}px`};

    ${props => animate(props, 2)};
  }

  .animate3 {
    opacity: ${({ length2 }) => (length2 > 0 ? 1 : 0)};
    stroke-dasharray: ${({ length2 }) => `${length2}px ${length2}px`};
    stroke-dashoffset: ${({ length2 }) => `${length2}px`};

    ${props => animate(props, 3)};
  }

  .animate4 {
    opacity: ${({ length3 }) => (length3 > 0 ? 1 : 0)};
    stroke-dasharray: ${({ length3 }) => `${length3}px ${length3}px`};
    stroke-dashoffset: ${({ length3 }) => `${length3}px`};

    ${props => animate(props, 4)};
  }
`

export default HandDrawnSVG
