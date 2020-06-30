import React from "react"

import styled from "styled-components"
import EvidenceSVG from "../assets/svg/evidence.svg"
import ScienceSVG from "../assets/svg/science.svg"
import SectionDividerDark from "../components/SectionDividerDark"

import Streak3 from "../assets/svg/streak3.svg"
import strip from "../images/pattern-strip.png"

import { Lead, H2, H3 } from "../elements/Type"
import {
  SplitSectionCroppedImage,
  SplitSection,
} from "../components/SplitSection"

import image1 from "../images/Evidence1.png"

import { Flex, Box, Image } from "rebass/styled-components"
import FlexSectionContainer from "../components/FlexSectionContainer"
import HandDrawnSVG from "../components/HandDrawnSVG"

import LeadwithScienceActwithHeart from "../images/LeadwithScienceActwithHeart.png"

const Evidence = () => {
  return (
    <Container>
      <SectionDividerDark alt="we lead with science">
        <Image src={LeadwithScienceActwithHeart}></Image>
      </SectionDividerDark>
      <FlexSectionContainer minHeight={"100vh"}>
        <Box width={1} textAlign={"center"}>
          <Lead>We lead with science</Lead>
          <H2 className="section-title">
            The science of
            <br />
            improving lives is more
            <br />
            than our tagline.
          </H2>
          <Box width={250} mx={"auto"}>
            <HandDrawnSVG
              duration={0.25}
              svg={Streak3}
              className="pullquote-streak"
            ></HandDrawnSVG>
          </Box>
          <H2 className="section-title serif">
            It’s our approach
            <br />
            to solving some of the world’s
            <br />
            most intractable problems.
          </H2>
        </Box>
      </FlexSectionContainer>
      <Flex style={{ background: "#cccccc", position: "relative" }} width={1}>
        <FlexSectionContainer width={1} px={[20, 100]}>
          <HandDrawnSVG
            svg={ScienceSVG}
            alt="We study, test and evaluate. We gather evidence and generate reliable data."
            duration={0.3}
            duration2={0.3}
            delay={1}
          />
        </FlexSectionContainer>
        <img src={strip} className="strip"></img>
      </Flex>
      <SplitSection
        image={image1}
        flip={true}
        imageCredits={"mom & baby (current layout)"}
      >
        <Lead>We lead with science</Lead>
        <Box maxWidth={480}>
          <H2 className={"section-title"}>
            The result:
            <br />
            <span className={"serif"}>
              A deep understanding of the people and communities we serve.
            </span>
          </H2>
        </Box>
        <div
          className="divider"
          style={{ borderTop: "1px solid black", marginBottom: "1.45rem" }}
        />
        <Box maxWidth={480}>
          <H3 className={"section-subtitle"}>
            And the interventions most likely to discover the greatest impact.
          </H3>
        </Box>
      </SplitSection>
    </Container>
  )
}

const Container = styled.div`
  #science path {
    fill: #fff;
  }

  .strip {
    position: absolute;
    bottom: 0;
    width: 500px;
    transform: translateX(-50%);
    margin-bottom: 0;
    left: 50%;
  }
`

export default Evidence
