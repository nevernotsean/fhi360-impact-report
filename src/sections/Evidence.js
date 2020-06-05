import React from "react"

import styled from "styled-components"
import EvidenceSVG from "../assets/svg/evidence.svg"
import ScienceSVG from "../assets/svg/science.svg"
import SectionDividerDark from "../components/SectionDividerDark"

import Streak from "../assets/svg/streak.svg"
import strip from "../images/pattern-strip.png"

import { Lead } from "../components/Typography"
import {
  SplitSectionCroppedImage,
  SplitSection,
} from "../components/SplitSection"

import image1 from "../images/Evidence1.png"

import { Flex, Box } from "reflexbox"
import FlexSectionContainer from "../components/FlexSectionContainer"
import HandDrawnSVG from "../components/HandDrawnSVG"

const Evidence = () => {
  return (
    <Container>
      <SectionDividerDark
        svg={EvidenceSVG}
        alt="we lead with science"
      ></SectionDividerDark>
      <FlexSectionContainer minHeight={"100vh"}>
        <Box width={1} textAlign={"center"}>
          <Lead>We lead with science</Lead>
          <h2 className="section-title">
            The science of
            <br />
            improving lives is more
            <br />
            than our tagline.
          </h2>
          <Box width={250} mx={"auto"}>
            <HandDrawnSVG
              duration={0.25}
              svg={Streak}
              className="pullquote-streak"
            ></HandDrawnSVG>
          </Box>
          <h2 className="section-title serif">
            It’s our approach
            <br />
            to solving some of the world’s
            <br />
            most intractable problems.
          </h2>
        </Box>
      </FlexSectionContainer>
      <Flex style={{ background: "#cccccc", position: "relative" }} width={1}>
        <FlexSectionContainer width={1} px={[20, 100]}>
          <HandDrawnSVG
            svg={ScienceSVG}
            alt="We study,test and evaluate.We gather evidence andgenerate reliable data."
            duration={0.3}
            duration2={0.3}
            delay={1}
          />
        </FlexSectionContainer>
        <img src={strip} className="strip"></img>
      </Flex>
      {/* <SplitSection image={brave1}>
        <Lead>We are brave</Lead>
        <h2 className={"section-title"}>
          Some
          <br />
          organizations
          <br />
          <span className={"serif"}>are afraid to fail.</span>
        </h2>
        <h3 className={"section-subtitle"}>We are afraid not to try.</h3>
        <div
          className="divider"
          style={{ borderTop: "1px solid black", marginBottom: "1.45rem" }}
        />
        <Box maxWidth={480}>
          <p className={"section-body"}>
            Our willingness to tackle novel challenges keeps us ahead of the
            curve in recognizing and responding to critical global issues.
          </p>
        </Box>
      </SplitSection>
 */}
      <SplitSectionCroppedImage image={image1} image2={image1} flip={true}>
        <Lead>We lead with science</Lead>
        <Box maxWidth={480}>
          <h2 className={"section-title"}>
            The result:
            <br />
            <span className={"serif"}>
              A deep understandingof the people and communities we serve.
            </span>
          </h2>
        </Box>
        <div
          className="divider"
          style={{ borderTop: "1px solid black", marginBottom: "1.45rem" }}
        />
        <Box maxWidth={480}>
          <h3 className={"section-subtitle"}>
            And the interventions most likely to discover the greatest impact.
          </h3>
        </Box>
      </SplitSectionCroppedImage>
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
