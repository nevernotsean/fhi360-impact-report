import React, { useContext, useEffect } from "react"

import { Flex, Box } from "rebass/styled-components"
import styled from "styled-components"

import SectionDividerDark from "../../components/SectionDividerDark"
import HandDrawnSVG from "../../components/HandDrawnSVG"

import { useTrail, useSpring, animated } from "react-spring"

// SVG

import PerceptionSVG from "../../assets/svg/perception.svg"
import Arrow from "../../assets/svg/arrow.svg"
import { H2, H3, Lead } from "../../elements/Type"
import OrderedListCard from "../../components/OrderedListCard"
import FlexSectionContainer from "../../components/FlexSectionContainer"
import { useInView } from "react-intersection-observer"
import { LocomotiveContext } from "../../hooks/useLocomotiveScroll"
import { FlexWrap } from "../../elements/Flex"
import AndSection1 from "./AndSection1"
import AndSection2 from "./AndSection2"
import AndSection3 from "./AndSection3"
import { SplitSectionCroppedImage } from "../../components/SplitSection"
import Streak from "../../assets/svg/streak2.svg"

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

const Perception = props => {
  const { scroll } = useContext(LocomotiveContext)

  const [listRef, listInView] = useInView({
    rootMargin: "20% 0px -20% 0px",
    threshold: 0.8,
    triggerOnce: true,
  })

  const listAnim = data.map((props, i) => ({
    transition: `transform 600ms ease ${i * 300 + 500}ms`,
    y: listInView ? "0" : "101%",
  }))

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
              {listAnim.map((animProps, index) => (
                <OrderedListCard
                  key={index}
                  number={data[index].number}
                  width={[1, 1 / 4]}
                  {...animProps}
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
      <AndSection2 />{" "}
      <SplitSectionCroppedImage
        flip
        image={"https://via.placeholder.com/1920x1080?text=FPO"}
      >
        <Lead>LET’S CHANGE PERCEPTION</Lead>
        <H3 fontWeight={900} sx={{ textTransform: "uppercase" }}>
          Nepal to
          <br />
          North Dakota
        </H3>
        <Box maxWidth={["none", 320]}>
          <span className="section-body">
            Our committed team of development professionals, scientists and
            researchers is continuously applying an entrepreneurial approach and
            striving for excellence to reduce inequality and achieve{" "}
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
        </Box>
      </SplitSectionCroppedImage>
      <AndSection3 />{" "}
      <SplitSectionCroppedImage
        flip
        image={"https://via.placeholder.com/1920x1080?text=FPO"}
      >
        <Lead>LET’S CHANGE PERCEPTION</Lead>
        <H3 fontWeight={900} sx={{ textTransform: "uppercase" }}>
          We Are
          <br />
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
          </span>
          <br />
          Developing
        </H3>
        <Box maxWidth={["none", 320]}>
          <span className="section-body">
            New partnerships, new funding relationships and customized solutions
            that we apply to solving some of the world’s most intractable
            problems.
          </span>
        </Box>
      </SplitSectionCroppedImage>
    </Container>
  )
}

const Container = styled.div``

export default Perception
