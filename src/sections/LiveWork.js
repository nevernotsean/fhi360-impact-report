import React, { useContext } from "react"
import { useInView } from "react-intersection-observer"
import { LocomotiveContext } from "../hooks/useLocomotiveScroll"

import { useTrail } from "react-spring"

import styled from "styled-components"
import LiveWorkSVG from "../assets/svg/livework.svg"
import SectionDividerDark from "../components/SectionDividerDark"

import { Lead, H2 } from "../elements/Type"
import { SplitSectionLong } from "../components/SplitSection"

import image1 from "../images/Nimble1.png"
import image2 from "../images/Innovators2.png"

import map from "../images/map.jpg"

import { Box, Flex } from "rebass/styled-components"
import FlexSectionContainer from "../components/FlexSectionContainer"

const LiveWork = () => {
  const { scroll } = useContext(LocomotiveContext)

  return (
    <Container>
      <SectionDividerDark
        svg={LiveWorkSVG}
        alt="we live where we work"
        duration={1}
        duration2={0.2}
        delay={1}
        overrideLength={[11000]}
      ></SectionDividerDark>
      <SplitSectionLong image={image1} flip>
        <Lead>We live where we work</Lead>
        <H2 className={"section-title"}>
          Over 80%
          <br />
          of our team
          <br />
          <span className="serif">
            are based in the
            <br />
            countries where
            <br />
            they work.
          </span>
        </H2>
        <div
          className="divider"
          style={{ borderTop: "1px solid black", marginBottom: "1.45rem" }}
        />
        <Box maxWidth={480}>
          <p className={"section-body"}>
            With our teams based in the countries or communities where they
            work, we collaborate hand-in-hand with our partners and share our
            knowledge so we can learn together and achieve far more than we ever
            could alone.
          </p>
          <p className={"section-body"}>
            We partner with nurses and mothers to solve nutrition problems, with
            young adults and public officials to ensure that public policies
            meet youth needs, and with women to develop new contraception
            methods.
          </p>
          <p className={"section-body"}>
            By empowering individuals, families and communities to tackle their
            challenges, we drive progress for years to come.
          </p>
        </Box>
      </SplitSectionLong>

      <Box className={"fullpage"}>
        <img className={"bg"} src={map}></img>
        <FlexSectionContainer>
          <Flex
            flexDirection={"column"}
            justifyContent={"flex-end"}
            className={"infront"}
            width={1}
            maxWidth={1200}
            minHeight={"100vh"}
          >
            <Box width={[1, 1 / 2]} mb={[0, 100]}>
              <Lead>We live where we work</Lead>
              <H2 className={"section-title"}>
                In more than
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
                  Hand-in-hand, we work with our partners and share our
                  knowledge, so we can learn together to achieve far more than
                  we ever could alone.
                </p>
              </Box>
            </Box>
          </Flex>
        </FlexSectionContainer>
      </Box>
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
