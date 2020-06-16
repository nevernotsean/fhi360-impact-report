import React, { useContext, useEffect } from "react"

import { Flex, Box } from "reflexbox"
import styled from "styled-components"

import SectionDividerDark from "../components/SectionDividerDark"
import HandDrawnSVG from "../components/HandDrawnSVG"

import { useTrail, useSpring, animated } from "react-spring"

// SVG

import PerceptionSVG from "../assets/svg/perception.svg"
import Arrow from "../assets/svg/arrow.svg"
import And from "../assets/svg/and.svg"
import ZipZag from "../assets/svg/zigzag.svg"
import { Lead } from "../components/Typography"
import OrderedListCard from "../components/OrderedListCard"
import FlexSectionContainer from "../components/FlexSectionContainer"
import { useInView } from "react-intersection-observer"
import { LocomotiveContext } from "../hooks/useLocomotiveScroll"

const data = [
  {
    number: "01",
    body: "About lorem ipsum dolor ist amet, consectateur.",
  },
  {
    number: "02",
    body: "About lorem ipsum dolor ist amet, consectateur.",
  },
  {
    number: "03",
    body: "About lorem ipsum dolor ist amet, consectateur.",
  },
  {
    number: "04",
    body: "About lorem ipsum dolor ist amet, consectateur.",
  },
  {
    number: "05",
    body: "About lorem ipsum dolor ist amet, consectateur.",
  },
]

const config = { mass: 5, tension: 2000, friction: 200 }

const Perception = props => {
  const { scroll } = useContext(LocomotiveContext)

  const [listRef, listInView] = useInView({
    rootMargin: "20% 0px -20% 0px",
    threshold: 0.8,
    triggerOnce: true,
  })

  const listAnim = useTrail(data.length, {
    config,
    y: listInView ? "0" : "100%",
  })

  const hitEventName = "custom"

  const [famRef, famInView] = useInView({
    rootMargin: "20% 0px -20% 0px",
    threshold: 0.8,
    triggerOnce: true,
  })

  const fadeInProps = useSpring({ opacity: famInView ? 1 : 0 })

  return (
    <Container>
      <FlexSectionContainer>
        <Flex alignItems={"center"} width={1}>
          <Box width={[1, 1 / 3]}>
            <h2 className="section-title">
              Perception
              <br />
              is 9/10 of <span className="serif">reality...</span>
            </h2>
            <h3 className="section-subtitle">
              And we want to change
              <br />
              your perception
            </h3>
            <Box mt={-50}>
              <HandDrawnSVG
                svg={Arrow}
                alt="arrow"
                duration={0.3}
              ></HandDrawnSVG>
            </Box>
          </Box>
          <Box width={[1, 2 / 3]} ref={listRef}>
            <Flex flexWrap="wrap">
              <Box className="spacer" width={[1, 1 / 4]}></Box>
              {listAnim.map(({ y, ...rest }, index) => (
                <OrderedListCard
                  key={index}
                  number={data[index].number}
                  width={[1, 1 / 4]}
                  y={y}
                >
                  <p>{data[index].body}</p>
                </OrderedListCard>
              ))}
            </Flex>
          </Box>
        </Flex>
      </FlexSectionContainer>
      <SectionDividerDark
        svg={PerceptionSVG}
        mt={"-6vw"}
        alt="let's change perception"
      ></SectionDividerDark>
      <FlexSectionContainer>
        <Flex
          width={1}
          style={{ position: "relative" }}
          flexDirection={"column"}
        >
          <Box width={1}>
            <Lead>Let's change perception</Lead>
          </Box>
          <Flex style={{ position: "relative" }}>
            <Box width={[1, 1 / 2]} maxWidth={500} mr={"auto"} ref={famRef}>
              <h2 className="section-title">
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
              </h2>
            </Box>
            <Flex
              style={{ position: "absolute", height: "100%" }}
              justifyContent={"center"}
              alignItems={"center"}
              width={1}
            >
              <Box width={200} ml={-100} data-scroll data-scroll-speed={1.5}>
                <And />
              </Box>
            </Flex>
            <Box width={[1, 1 / 2]} maxWidth={500} ml={"auto"}>
              <animated.div style={fadeInProps}>
                <h2 className="section-title">
                  FHI 360
                  <br />
                  is a family
                  <br />
                  <span className="serif">of companies.</span>
                </h2>
                <Box maxWidth={480}>
                  <p className="section-body">
                    Each of our subsidiaries is designed to make us nimble,
                    innovative, flexible and customizable.
                  </p>
                  <p className="section-body">
                    All with a shared common goal:
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
          </Flex>
        </Flex>
      </FlexSectionContainer>
    </Container>
  )
}

const Container = styled.div``

export default Perception
