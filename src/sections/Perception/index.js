import React, { useContext } from "react"

import { Flex, Box } from "rebass/styled-components"
import styled from "styled-components"

import SectionDividerDark from "../../components/SectionDividerDark"
import HandDrawnSVG from "../../components/HandDrawnSVG"

import image1 from "../../images/WeAreConstantlyDeveloping_creditLeanneGray.jpg"

import PerceptionCard from "../../images/perception.png"
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
import { Underlined } from "./../../components/WordNote"
import theme from "../../styles/index"
import { useMediaQuery } from "react-responsive"

const data = [
  {
    number: "01",
    body: "about how human development is working around the world",
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
  const isMobile = useMediaQuery({
    query: `(max-width: ${theme.breakpoints[0]})`,
  })

  return (
    <Container>
      <FlexSectionContainer justifyContent="center" alightItems="center">
        <FlexWrap alignItems={"center"} width={1}>
          <Box width={[1, 1 / 3]}>
            <div ref={listRef}></div>
            <H2 className="section-title">
              Perception
              <br />
              is 9/10 of <span className="serif">reality</span>
            </H2>
            <H3 className="section-subtitle">
              and we want to change
              <br />
              your perception.
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
          <Box width={[1, 2 / 3]}>
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
        img={PerceptionCard}
        // mt={"-6vw"}
        alt="let's change perception"
      ></SectionDividerDark>
      <AndSection1 />
      <AndSection2 />
      <AndSection3 />
      {isMobile ? (
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignContent="center"
          py={100}
          px={20}
        >
          <Lead textAlign="center">LET’S CHANGE PERCEPTION</Lead>
          <Box maxWidth={480} px={[20, 0]}>
            <H2
              className={"section-title"}
              fontSize={isMobile && "34px !important"}
              lineHeight={isMobile && "38px !important"}
              textAlign="center"
            >
              We are constantly <br />
              <Underlined
                sx={{ top: "100%" }}
                orange
                duration={0.3}
                delay={1.5}
              >
                developing:
              </Underlined>
              <br />
              <br />
              <br />
              <span className="serif">
                New partnerships, new funding relationships and customized
                solutions that we apply to solving some of the world’s most
                intractable problems.
              </span>
            </H2>
          </Box>
        </Flex>
      ) : (
        <SplitSectionCroppedImage
          flip
          image={image1}
          imageCredits={"Leanne Gray/ FHI 360"}
          alignImageMobile={"center top"}
        >
          <Lead>LET’S CHANGE PERCEPTION</Lead>
          <H3 fontWeight={900} sx={{ textTransform: "uppercase" }} mb={[3]}>
            We are{" "}
            <Underlined orange duration={0.3} delay={1.5}>
              constantly
            </Underlined>{" "}
            developing
          </H3>
          <Box maxWidth={["none", 320]}>
            <span className="section-body">
              New partnerships, new funding relationships and customized
              solutions that we apply to solving some of the world’s most
              intractable problems.
            </span>
          </Box>
        </SplitSectionCroppedImage>
      )}
    </Container>
  )
}

const Container = styled.div``

export default Perception
