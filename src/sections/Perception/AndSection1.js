import React, { useContext, useEffect } from "react"

import { Flex, Box } from "rebass/styled-components"
import styled from "styled-components"

import SectionDividerDark from "../../components/SectionDividerDark"
import HandDrawnSVG from "../../components/HandDrawnSVG"

import { useTrail, useSpring, animated } from "react-spring"

// SVG

import PerceptionSVG from "../../assets/svg/perception.svg"
import Arrow from "../../assets/svg/arrow.svg"
import And from "../../assets/svg/and.svg"
import ZipZag from "../../assets/svg/zigzag.svg"
import { Lead, H2, H3 } from "../../elements/Type"
import OrderedListCard from "../../components/OrderedListCard"
import FlexSectionContainer from "../../components/FlexSectionContainer"
import { useInView } from "react-intersection-observer"
import { LocomotiveContext } from "../../hooks/useLocomotiveScroll"
import { FlexWrap } from "../../elements/Flex"

const AndSection1 = () => {
  const [ref, isInView] = useInView({
    rootMargin: "20% 0px -20% 0px",
    threshold: 0.8,
    triggerOnce: true,
  })

  const fadeInProps = useSpring({
    opacity: isInView ? 1 : 0,
  })

  React.useEffect(() => {
    if (isInView) console.log("hit1")
  }, [isInView])

  return (
    <FlexSectionContainer
      minHeight={"200vh"}
      className="section1"
      sx={{ position: "relative" }}
      py={0}
    >
      <Box data-scroll data-scroll-sticky data-scroll-target=".section1">
        <FlexColumn
          width={[1, 1 / 2]}
          maxWidth={500}
          mr={"auto"}
          height={"100vh"}
          justifyContent={"center"}
        >
          <Lead>Let's change perception</Lead>
          <H2 className="section-title">
            FHI 360 is an
            <br />
            international
            <br />
            <span className="serif">
              human
              <br />
              development
              <br />
              organization.
            </span>
          </H2>
        </FlexColumn>
      </Box>
      <Flex
        style={{ position: "absolute", height: "500px", zIndex: -1 }}
        justifyContent={"center"}
        alignItems={"center"}
        width={1}
        maxWidth={1200}
      >
        <Box width={200} ml={-100} data-scroll data-scroll-speed={1.5}>
          <HandDrawnSVG svg={And}></HandDrawnSVG>
        </Box>
      </Flex>
      <FlexColumn>
        <div ref={ref}></div>
        <Box width={[1, 1 / 2]} maxWidth={500} ml={"auto"}>
          <animated.div style={fadeInProps}>
            <H2 className="section-title">
              FHI 360
              <br />
              is a family
              <br />
              <span className="serif">of companies.</span>
            </H2>
            <Box maxWidth={480}>
              <p className="section-body">
                Each of our subsidiaries is designed to make us:
              </p>
              <ul>
                <li>nimble</li>
                <li>innovative</li>
                <li>responsive</li>
                <li>fit for purpose</li>
              </ul>
              <p className="section-body">
                All have a shared common goal:
                <br />
                Improving lives in a lasting way.
              </p>
            </Box>
            <Box mt={-30} ml={0} width={[2 / 3, 1 / 2]}>
              <HandDrawnSVG
                svg={ZipZag}
                alt="zigzag"
                duration={0.3}
                delay={1}
              ></HandDrawnSVG>
            </Box>
          </animated.div>
        </Box>
      </FlexColumn>
    </FlexSectionContainer>
  )
}

const FlexColumn = props => (
  <Flex
    width={1}
    style={{ position: "relative" }}
    flexDirection={"column"}
    {...props}
  ></Flex>
)

export default AndSection1
