import React from "react"

import styled from "styled-components"
import EvidenceCard from "../images/evidence.png"
import SectionDividerDark from "../components/SectionDividerDark"

import Streak from "../assets/svg/streak.svg"
import strip from "../images/pattern-LeadWithScience_WeStudy.png"
import vert from "../images/pattern-vert-WeLeadwithScience_TheResult.png"

import { Lead, H2, H3 } from "../elements/Type"
import { SplitSectionCroppedImage } from "../components/SplitSection"

import image1 from "../images/Evidence1.png"

import { Flex, Box, Text } from "rebass/styled-components"
import FlexSectionContainer from "../components/FlexSectionContainer"
import HandDrawnSVG from "../components/HandDrawnSVG"

import { Circled, Underlined } from "../components/WordNote"
// import { useMediaQuery } from "react-responsive"
// import theme from "./../styles/index"
import Media from "../components/Media"

const Evidence = () => {
  return (
    <Container>
      <SectionDividerDark
        alt="we lead with science"
        img={EvidenceCard}
      ></SectionDividerDark>
      <FlexSectionContainer minHeight={["unset", "100vh"]} centered={true}>
        <Box width={1} textAlign={"center"}>
          <Lead>We lead with science</Lead>
          <H2 className="section-title">
            The science of
            <br />
            improving lives is more
            <br />
            than our tagline.
          </H2>
          <Box width={250} mx={"auto"} mt={-20}>
            <HandDrawnSVG
              duration={0.25}
              svg={Streak}
              className="pullquote-streak"
            ></HandDrawnSVG>
          </Box>
        </Box>
      </FlexSectionContainer>
      <Flex style={{ background: "#cccccc", position: "relative" }} width={1}>
        <FlexSectionContainer
          width={1}
          px={[20, 100]}
          centered={true}
          textAlign={"center"}
        >
          <Lead>We Lead With Science</Lead>
          <Text
            as={"span"}
            fontWeight={900}
            fontSize={["24px", "48px"]}
            lineHeight={["28px", "54px"]}
          >
            We gather{" "}
            <Underlined delay={0.5} transform={"translateY(-10%)"} orange>
              evidence
            </Underlined>
            ,
            <br />
            generate{" "}
            <Underlined delay={0.75} transform={"translateY(-10%)"} orange>
              reliable
            </Underlined>{" "}
            data and develop{" "}
            <Circled delay={1} transform={"translateY(-25%) scale(1.5)"}>
              new
            </Circled>{" "}
            ideas.
          </Text>
        </FlexSectionContainer>
        <img src={strip} className="strip"></img>
      </Flex>
      <Media at={"sm"}>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignContent="center"
          py={100}
          px={20}
        >
          <Lead textAlign="center">We lead with science</Lead>
          <Box maxWidth={480}>
            <H2
              className={"section-title"}
              fontSize={"34px !important"}
              lineHeight={"38px !important"}
              textAlign="center"
            >
              <Underlined sx={{ top: "100%" }}>The result:</Underlined>
              <br />
              <br />
              <br />
              <span className={"serif"}>
                A deep connection to the people and communities we serve.
              </span>
            </H2>
          </Box>
        </Flex>
      </Media>
      <Media greaterThanOrEqual={"md"}>
        <SplitSectionCroppedImage
          image={image1}
          flip
          imageCredits={"mom & baby (current layout)"}
          pattern={vert}
          hideImageOnMobile
          id={"evidence-the-result-desktop"}
        >
          <Lead>We lead with science</Lead>
          <Box maxWidth={480}>
            <H2 className={"section-title"}>
              The result:
              <br />
              <span className={"serif"}>
                A deep connection to the people and communities we serve
              </span>
            </H2>
          </Box>
          <div
            className="divider"
            style={{ borderTop: "1px solid black", marginBottom: "1.45rem" }}
          />
          <Box maxWidth={480}>
            <H3 className={"section-body"}>
              and the co-creation of interventions most likely to yield the
              greatest impact.
            </H3>
          </Box>
        </SplitSectionCroppedImage>
      </Media>
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
