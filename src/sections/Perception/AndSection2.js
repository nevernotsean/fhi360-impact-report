import React, { useContext, useEffect, useState } from "react"

import { Flex, Box } from "rebass/styled-components"
import styled from "styled-components"

import SectionDividerDark from "../../components/SectionDividerDark"
import HandDrawnSVG from "../../components/HandDrawnSVG"

import { useTrail, useSpring, animated } from "react-spring"

// SVG

import Circle from "../../assets/svg/circle.svg"
import And from "../../assets/svg/and.svg"
import Streak from "../../assets/svg/streak2.svg"
import { Lead, H2, H3 } from "../../elements/Type"
import FlexSectionContainer from "../../components/FlexSectionContainer"
import { useInView } from "react-intersection-observer"

const config = { mass: 300, tension: 2000, friction: 20000 }

const AndSection2 = () => {
  const [isInView, setisInView] = useState(false)

  const [ref, triggered] = useInView({
    threshold: 1,
    triggerOnce: true,
  })

  useEffect(() => {
    if (triggered) setisInView(true)
  }, [triggered])

  return (
    <FlexSectionContainer
      minHeight={"200vh"}
      className="section2"
      sx={{ position: "relative" }}
      py={0}
    >
      <Box data-scroll data-scroll-sticky data-scroll-target=".section2">
        <FlexColumn
          width={[1, 1 / 2]}
          maxWidth={500}
          mr={"auto"}
          height={"100vh"}
          justifyContent={"center"}
        >
          <Lead>Let's change perception</Lead>

          <H2 className="section-title">
            FHI 360 has almost 50 years of experience
            <br />
            <span className="serif">
              solving some of the world’s most complex challenges.
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
          <H2 className="section-title">
            <animated.div
              style={{
                opacity: isInView ? 1 : 0,
                transition: "opacity 1s linear",
              }}
            >
              FHI 360 has decades of work
              <br />
              <span className="serif">throughout the United States</span>
            </animated.div>
          </H2>
          <Box maxWidth={480}>
            <animated.div
              style={{
                opacity: isInView ? 1 : 0,
                transition: "opacity 1s linear .5s",
              }}
            >
              <span className="section-body">
                to advance health, safety, education and workforce development
                for people of all ages — particularly those who are marginalized
                and{" "}
                <span style={{ position: "relative" }}>
                  underserved.
                  <Box
                    sx={{
                      left: 0,
                      width: "100px",
                      position: "absolute",
                      transform: "translateY(-60%)",
                      zIndex: -1,
                    }}
                  >
                    <HandDrawnSVG
                      svg={Circle}
                      duration={0.3}
                      delay={1}
                    ></HandDrawnSVG>
                  </Box>
                </span>
              </span>
            </animated.div>
            <animated.div
              style={{
                opacity: isInView ? 1 : 0,
                transition: "opacity 1s linear 1s",
              }}
            >
              <span className="section-body">
                From Nepal to North Dakota, our committed team of development
                professionals, scientists and researchers is continuously
                applying an entrepreneurial approach and striving for excellence
                to reduce inequality and achieve <br />
                <span style={{ position: "relative" }}>
                  meaningful impact.
                  <Box
                    sx={{
                      left: 0,
                      width: "150px",
                      position: "absolute",
                      transform: "translateY(-20%)",
                      zIndex: -1,
                    }}
                  >
                    <HandDrawnSVG
                      svg={Streak}
                      duration={0.3}
                      delay={1}
                    ></HandDrawnSVG>
                  </Box>
                </span>
              </span>
            </animated.div>
          </Box>
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

export default AndSection2
