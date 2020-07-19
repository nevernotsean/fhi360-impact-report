import React from "react"

import styled from "styled-components"
import EvidenceCard from "../images/evidence.png"
import SectionDividerDark from "../components/SectionDividerDark"

import strip from "../images/pattern-LeadWithScience_WeStudy.png"
import vert from "../images/pattern-vert-WeLeadwithScience_TheResult.png"

import { Lead, H2, H3 } from "../elements/Type"
import { SplitSectionCroppedImage } from "../components/SplitSection"

import image1 from "../images/Evidence1.png"

import { Flex, Box, Text } from "rebass/styled-components"
import FlexSectionContainer from "../components/FlexSectionContainer"

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
          <H2
            style={{ marginBottom: 0 }}
            fontWeight={900}
            fontSize={["24px", "6vw", "72px"]}
            lineHeight={["28px", "6.6vw", "80px"]}
          >
            The science of
            <br />
            improving lives is more
            <br />
            than our tagline.
          </H2>
          <Box ml={-250} mt={[0, -30]}>
            <Underlined
              orange
              duration={0.25}
              className="pullquote-streak"
              width={250}
            ></Underlined>
          </Box>
        </Box>
      </FlexSectionContainer>
      <Flex style={{ background: "#f1f1f1", position: "relative" }} width={1}>
        <FlexSectionContainer
          width={[1, 3 / 4, 800]}
          maxWidth={[800]}
          px={[20, 0]}
          centered={true}
          textAlign={"center"}
        >
          <Lead>We Lead With Science</Lead>
          <H2
            style={{ marginBottom: 0 }}
            fontWeight={900}
            fontSize={["24px", "6vw", "72px"]}
            lineHeight={["28px", "6.6vw", "80px"]}
          >
            We study,
            <br />
            test and evaluate.
          </H2>
          <Text
            as={"span"}
            fontWeight={900}
            fontSize={["24px", "6vw", "72px"]}
            lineHeight={["28px", "5vw", "80px"]}
            className={"serif"}
          >
            We gather{" "}
            <Underlined delay={0.5} transform={"translateY(-10%)"} orange>
              evidence
            </Underlined>
            , generate{" "}
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
        <img src={strip} className="strip" alt=""></img>
      </Flex>
      <Media at={"sm"}>
        <SplitSectionCroppedImage
          image={image1}
          flip
          imageCredits={"Jessica Scranton/FHI 360"}
          alt={"woman smiling holding baby"}
          pattern={vert}
          id={"evidence-the-result-desktop"}
        >
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignContent="center"
            py={50}
            px={20}
          >
            <Lead textAlign="center">We lead with science</Lead>
            <Box maxWidth={480}>
              <H2
                fontSize={["24px", "6vw", "48px"]}
                lineHeight={["28px", "6.6vw", "54px"]}
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
        </SplitSectionCroppedImage>
      </Media>
      <Media greaterThanOrEqual={"md"}>
        <SplitSectionCroppedImage
          image={image1}
          flip
          imageCredits={"Jessica Scranton/FHI 360"}
          alt={"woman smiling holding baby"}
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
