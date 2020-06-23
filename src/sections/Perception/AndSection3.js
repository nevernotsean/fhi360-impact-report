import React, { useContext, useEffect } from "react"

import { Flex, Box } from "rebass/styled-components"
import styled from "styled-components"

import SectionDividerDark from "../../components/SectionDividerDark"
import HandDrawnSVG from "../../components/HandDrawnSVG"

import { useTrail, useSpring, animated } from "react-spring"

// SVG

import And from "../../assets/svg/and.svg"
import Streak from "../../assets/svg/streak2.svg"
import { Lead, H2, H3 } from "../../elements/Type"
import FlexSectionContainer from "../../components/FlexSectionContainer"
import { useInView } from "react-intersection-observer"

const config = { mass: 5, tension: 2000, friction: 200 }

const AndSection3 = () => {
  const [ref, isInView] = useInView({
    rootMargin: "20% 0px -20% 0px",
    threshold: 0.8,
    triggerOnce: true,
  })

  const fadeInProps = useTrail(3, {
    config,
    opacity: isInView ? 1 : 0,
  })

  React.useEffect(() => {
    if (isInView) console.log("hit3")
  }, [isInView])
  return (
    <FlexSectionContainer
      minHeight={"200vh"}
      className="section3"
      sx={{ position: "relative" }}
      py={0}
    >
      <Box data-scroll data-scroll-sticky data-scroll-target=".section3">
        <FlexColumn
          width={[1, 1 / 2]}
          maxWidth={500}
          mr={"auto"}
          height={"100vh"}
          justifyContent={"center"}
        >
          <Lead>Let's change perception</Lead>
          <H2 className="section-title">
            FHI 360 has been a longtime partner
            <br />
            <span className="serif">of U.S. federal and local governments</span>
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
          <animated.div style={fadeInProps[0]}>
            <H2 className="section-title">
              FHI 360 collaborates
              <br />
              <span className="serif">
                with the private sector, foundations,{" "}
              </span>
            </H2>
          </animated.div>
          <animated.div style={fadeInProps[1]}>
            <Box maxWidth={480}>
              <span className="section-body">
                educational institutions, faith-based organizations, local
                communities, governments and{" "}
                <span style={{ position: "relative" }}>
                  more.
                  <Box
                    sx={{
                      left: "50%",
                      width: "100px",
                      position: "absolute",
                      transform: "translate(-50%, -50%) scaleX(0.5)",
                      zIndex: -1,
                    }}
                  >
                    <HandDrawnSVG
                      svg={Streak}
                      duration={0.3}
                      delay={0.5}
                    ></HandDrawnSVG>
                  </Box>
                </span>
              </span>
              <span className="section-body">
                We are{" "}
                <span style={{ position: "relative" }}>
                  constantly
                  <Box
                    sx={{
                      left: "50%",
                      width: "150px",
                      position: "absolute",
                      transform: "translate(-50%, -30%)",
                      zIndex: -1,
                    }}
                  >
                    <HandDrawnSVG
                      svg={Streak}
                      duration={0.3}
                      delay={1.5}
                    ></HandDrawnSVG>
                  </Box>
                </span>{" "}
                developing new partnerships, new funding relationships and
                customized solutions that we apply to solving some of the
                world’s most intractable problems.
              </span>
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

export default AndSection3
