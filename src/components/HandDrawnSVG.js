import React, { useState, useEffect, useRef, useCallback } from "react"
import styled from "styled-components"

// import InViewMonitor from "react-inview-monitor"
import { useInView } from "react-intersection-observer"
import { Box } from "rebass/styled-components"

const HandDrawnSVG = ({
  svg: SvgComponent,
  duration = 1,
  duration2 = 1,
  delay = 0,
  delay2 = -1,
  useInviewTrigger = true,
  animated = false,
  triggerOnce,
  threshold = 0.8,
  rootMargin = "20% 0px -20% 0px",
  overrideLength = [],
  orange,
  scrollSpeed = -0.1,
  ease = "ease-in-out",
  debug,
  ...props
}) => {
  const ref = useRef()

  const [triggered, setTriggered] = useState(false)

  const [inViewRef, inView, entry] = useInView({
    rootMargin: rootMargin,
    threshold: threshold,
    triggerOnce: triggerOnce,
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
    if (inView) setTriggered(true)
    if (inView && debug) alert("triggered", ref)
  }, [inView])

  useEffect(() => {
    if (!ref.current) return

    const path = ref.current.querySelector(".animate")
    const path1 = ref.current.querySelector(".animate2")
    const path2 = ref.current.querySelector(".animate3")
    const path3 = ref.current.querySelector(".animate4")

    if (path && !overrideLength[0]) setPathLength(path.getTotalLength())
    if (path1 && !overrideLength[1]) setPathLength1(path1.getTotalLength())
    if (path2 && !overrideLength[2]) setPathLength2(path2.getTotalLength())
    if (path3 && !overrideLength[3]) setPathLength3(path3.getTotalLength())
  }, [])

  return (
    <MaskOuter
      {...props}
      ref={setRefs}
      length={overrideLength[0] || pathLength}
      length1={overrideLength[1] || pathLength1}
      length2={overrideLength[2] || pathLength2}
      length3={overrideLength[3] || pathLength3}
      animated={useInviewTrigger ? triggered : animated}
      duration={duration}
      duration2={duration2}
      delay={delay}
      delay2={delay2}
      ease={ease}
    >
      <Box
        data-scroll
        data-scroll-speed={scrollSpeed}
        className={orange && "orange"}
      >
        <SvgComponent orange={orange}></SvgComponent>
      </Box>
    </MaskOuter>
  )
}

const animate = ({ animated, duration, duration2, delay, delay2, ease }, i) => {
  duration = i === 1 ? duration : duration2
  delay = i === 1 ? delay : duration * (i - 1) + delay
  if (delay2 > -1 && i === 2) delay = delay2

  return (
    animated &&
    ` stroke-dashoffset: 0; transition: stroke-dashoffset ${duration}s ${ease} ${delay}s; `
  )
}

const MaskOuter = styled.div`
  svg {
    pointer-events: none;
  }

  .animate {
    opacity: ${({ length }) => (length === 0 ? 0 : 1)};
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

  .animate,
  .animate2,
  .animate3,
  .animate4 {
    ${({ animated }) => !animated && "opacity: 0;"}
  }
`

export default HandDrawnSVG
