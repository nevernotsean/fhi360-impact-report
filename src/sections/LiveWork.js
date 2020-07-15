import React from "react"

import styled from "styled-components"
import LiveCard from "../images/live.png"
import SectionDividerDark from "../components/SectionDividerDark"

import { Lead, H2 } from "../elements/Type"
import SplitSectionLongContent from "../components/SplitSectionLongContent"

import image1 from "../images/we-live-work.jpg"

import map from "../images/map.jpg"

import { Box, Flex } from "rebass/styled-components"
import FlexSectionContainer from "../components/FlexSectionContainer"
import Image from "../components/image"

const LiveFirst = () => (
  <>
    <Lead>We live where we work</Lead>
    <H2 className={"section-title"}>
      With our teams based in
      <br />
      <span className="serif">
        the countries or communities where they work
      </span>
    </H2>
    <div
      className="divider"
      style={{
        borderTop: "1px solid black",
        marginBottom: "1.45rem",
      }}
    />
    <Box maxWidth={480}>
      <p className={"section-body"}>
        we collaborate hand-in-hand with our partners and share our knowledge so
        we can learn together and achieve far more than we ever could alone.
      </p>
    </Box>
  </>
)

const LiveWork = () => (
  <Container>
    <SectionDividerDark
      img={LiveCard}
      maxWidth={[1000, 1200]}
      alt="we live where we work"
    ></SectionDividerDark>
    <SplitSectionLongContent
      flip
      id={"livework"}
      contentArray={[
        {
          image: image1,
          imageCredits: "Mbuto Machili/FHI 360",
          alt: "two men smiling",
          content: LiveFirst,
          mobileContent: LiveFirst,
        },
        {
          image: image1,
          imageCredits: "Mbuto Machili/FHI 360",
          alt: "two men smiling",
          content: () => (
            <>
              <Lead>We live where we work</Lead>
              <Box maxWidth={480}>
                <p className={"section-body"}>
                  Our development professionals, scientists and researchers
                  partner with nurses and mothers to solve nutrition problems,
                  with young adults and public officials to ensure that public
                  policies meet youth needs, and with women to develop new
                  contraception methods, and so many others.
                </p>
              </Box>
            </>
          ),
          mobileContent: () => (
            <p className={"section-body"}>
              Our development professionals, scientists and researchers partner
              with nurses and mothers to solve nutrition problems, with young
              adults and public officials to ensure that public policies meet
              youth needs, and with women to develop new contraception methods,
              and so many others.
            </p>
          ),
        },
        {
          image: image1,
          imageCredits: "Mbuto Machili/FHI 360",
          alt: "two men smiling",
          content: () => (
            <>
              <Lead>We live where we work</Lead>
              <Box maxWidth={480}>
                <p className={"section-body"}>
                  By empowering individuals, families and communities to tackle
                  their challenges, we drive progress for years to come.
                </p>
              </Box>
            </>
          ),
          mobileContent: () => (
            <p className={"section-body"}>
              By empowering individuals, families and communities to tackle
              their challenges, we drive progress for years to come.
            </p>
          ),
        },
      ]}
    ></SplitSectionLongContent>

    <Box className={"fullpage"}>
      <Image
        className={"bg"}
        src={map}
        alt={"map of world"}
        sx={{
          objectFit: "contain",
          objectPosition: "center center",
          marginTop: ["-20vh", 0],
        }}
      ></Image>
      <FlexSectionContainer>
        <Flex
          flexDirection={"column"}
          justifyContent={"flex-end"}
          className={"infront"}
          width={1}
          maxWidth={1200}
          minHeight={["unset", "100vh"]}
        >
          <Box width={[1, 1 / 2]} mb={[0, 100]}>
            <Lead>
              We live
              <br />
              where we work
            </Lead>
            <H2 className={"section-title"}>
              We work in more than
              <br />
              <span className="serif">60 countries.</span>
            </H2>
            <div
              className="divider"
              style={{
                borderTop: "1px solid black",
                marginBottom: "1.45rem",
              }}
            />
            <Box maxWidth={480}>
              <p className={"section-body"}>
                We work with our partners and share our knowledge so we can
                learn together to achieve far more than we ever could alone.
              </p>
            </Box>
          </Box>
        </Flex>
      </FlexSectionContainer>
    </Box>
  </Container>
)

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

  .fullpage {
    position: relative;
    img.bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  .infront {
    position: relative;
    z-index: 99;
  }
`

export default LiveWork
