import React, { useContext, useEffect } from "react"

import { Flex, Box } from "rebass/styled-components"
import styled from "styled-components"

import SectionDividerDark from "../../components/SectionDividerDark"
import HandDrawnSVG from "../../components/HandDrawnSVG"

import { useTrail, useSpring, animated } from "react-spring"

// SVG

import PerceptionSVG from "../../assets/svg/perception.svg"
import Arrow from "../../assets/svg/arrow.svg"
import { H2, H3 } from "../../elements/Type"
import OrderedListCard from "../../components/OrderedListCard"
import FlexSectionContainer from "../../components/FlexSectionContainer"
import { useInView } from "react-intersection-observer"
import { LocomotiveContext } from "../../hooks/useLocomotiveScroll"
import { FlexWrap } from "../../elements/Flex"
import AndSection1 from "./AndSection1"
import AndSection2 from "./AndSection2"
import AndSection3 from "./AndSection3"

const data = [
  {
    number: "01",
    body: "about how international development is working around the world",
  },
  {
    number: "02",
    body: "about partnerships",
  },
  {
    number: "03",
    body: "about innovation",
  },
  {
    number: "04",
    body: "about the future of human development",
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

  return (
    <Container>
      <FlexSectionContainer justifyContent="center" alightItems="center">
        <FlexWrap alignItems={"center"} width={1}>
          <Box width={[1, 1 / 3]}>
            <H2 className="section-title">
              Perception
              <br />
              is 9/10 of <span className="serif">reality</span>
            </H2>
            <H3 className="section-subtitle">
              and we want to change
              <br />
              your perception
            </H3>
            <Box
              mt={-50}
              sx={{
                transform: [
                  "translate(75px, -65px) scale(.5,-.5) rotate(-45deg)",
                  "none",
                ],
              }}
            >
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
        </FlexWrap>
      </FlexSectionContainer>
      <SectionDividerDark
        svg={PerceptionSVG}
        mt={"-6vw"}
        alt="let's change perception"
      ></SectionDividerDark>
      <AndSection1 />
      <AndSection2 />
      <AndSection3 />
    </Container>
  )
}

const Container = styled.div``

export default Perception
