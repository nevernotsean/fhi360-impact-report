import React from "react"
import { Flex, Box } from "rebass/styled-components"
import HandDrawnSVG from "../../components/HandDrawnSVG"
import { useSpring, animated } from "react-spring"

// SVG

import And from "../../assets/svg/and.svg"
import { Lead, H2, H3 } from "../../elements/Type"
import FlexSectionContainer from "../../components/FlexSectionContainer"
import { useInView } from "react-intersection-observer"

const AndSection = ({ children, ...props }) => {
  const [ref, isInView] = useInView({
    rootMargin: "50% 0px -50% 0px",
    threshold: 1,
    triggerOnce: true,
  })

  const fadeInProps = useSpring({
    opacity: isInView ? 1 : 0,
    // delay: 1,
  })

  // React.useEffect(() => {
  //   if (isInView) console.log("hit1")
  // }, [isInView])

  return (
    <FlexSectionContainer minHeight={"100vh"} className="section1" centered>
      <Flex justifyContent={"space-between"}>
        {/* Left */}
        <AndSectionSide>{children[0]}</AndSectionSide>
        {/* Middle */}
        <Flex justifyContent={"center"} alignItems={"center"} width={1 / 5}>
          <Box width={200} ml={0}>
            <HandDrawnSVG svg={And}></HandDrawnSVG>
          </Box>
        </Flex>
        {/* Right */}
        <div ref={ref}></div>
        <AndSectionSide>
          <Lead opacity={0}>_</Lead>
          <animated.div style={fadeInProps}>{children[1]}</animated.div>
        </AndSectionSide>
      </Flex>
    </FlexSectionContainer>
  )
}

const AndSectionSide = ({ children, ...props }) => {
  return (
    <Flex
      width={[1, 2 / 5]}
      maxWidth={500}
      style={{ position: "relative" }}
      flexDirection={"column"}
    >
      <Box>{children}</Box>
    </Flex>
  )
}

export default AndSection
