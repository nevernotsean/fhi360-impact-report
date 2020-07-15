import React from "react"
import { useInView } from "react-intersection-observer"

import { useTrail } from "react-spring"

import styled from "styled-components"
import NimbleCard from "../images/nimble.png"
import SectionDividerDark from "../components/SectionDividerDark"

import { Lead, H2, H3 } from "../elements/Type"
import { SplitSectionCroppedImage } from "../components/SplitSection"

import image2 from "../images/RS11215_1F2A5696.png"

import { Flex, Box } from "rebass/styled-components"
import FlexSectionContainer from "../components/FlexSectionContainer"
import HandDrawnSVG from "../components/HandDrawnSVG"

import Arrow from "../assets/svg/arrow.svg"
import TitledListCard from "../components/TitledListCard"

import nimbleVert from "../images/pattern-vert-WeAreNimble_EachSubsidiary.png"

const data = [
  {
    title: "FHI<br/><span class='bolder'>Solutions</span>",
    body: "Customized nutrition and health solutions",
    href: "https://www.fhisolutions.org/",
  },
  {
    title: "FHI<br/><span class='bolder'>Partners</span>",
    body:
      "Specialized solutions in partnership with foundations and the private sector",
    href: "https://www.fhipartners.org/",
  },

  {
    title: "FHI<br/><span class='bolder'>Ventures</span>",
    body: "Innovative funding and impact investing",
    href: "https://www.fhiventures.com/",
  },
  {
    title: "FHI<br/><span class='bolder'>Clinical</span>",
    body: "Complex clinical research support in resource-limited settings",
    href: "https://www.fhiclinical.com/",
  },
  {
    title: "FHI<br/><span class='bolder'>Konung</span>",
    body:
      "Global governance solutions for effective and sustainable human development",
  },
]

const config = { mass: 5, tension: 2000, friction: 200 }

const Nimble = () => {
  const [listRef, listInView] = useInView({
    rootMargin: "20% 0px -20% 0px",
    threshold: 0,
    triggerOnce: true,
  })

  const listAnim = useTrail(data.length, {
    config,
    y: listInView ? "0" : "400px",
  })

  return (
    <Container>
      <SectionDividerDark
        img={NimbleCard}
        alt="we are nimble"
      ></SectionDividerDark>
      <FlexSectionContainer>
        <Flex alignItems={"center"} width={1} flexWrap={"wrap"} ref={listRef}>
          <Box width={[1, 1 / 2]} flex={"1 0 auto"} maxWidth={480} mr={"auto"}>
            <Lead>We are nimble</Lead>
            <H2 className="section-title">
              We are eager, ready and able to
              <br />
              <span className="serif">jump in, pivot and act.</span>
            </H2>
            <div
              className="divider"
              style={{ borderTop: "1px solid black", marginBottom: "1.45rem" }}
            />
            <H3 className="section-subtitle">
              Our global platform means we do not need a lot of lead time to
              respond to new crises or existing challenges.
              <br />
              <br />
              Our five subsidiaries have unique areas of focus:
            </H3>
            <Box
              mt={50}
              sx={{
                transform: [
                  "translate(75px, -65px) scale(.5,-.5) rotate(-45deg)",
                  "translate(0%, -30%) rotate(-12deg)",
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
          <Box
            width={[1, 1 / 2]}
            flex={"1 0 auto"}
            overflow="hidden"
            pl={[0, 50]}
          >
            <Flex flexWrap="wrap">
              {listAnim.map(({ y, ...rest }, index) => (
                <TitledListCard
                  key={index}
                  title={data[index].title}
                  width={[1, 1 / 3]}
                  maxWidth={["unset", 180]}
                  height={[200, 350]}
                  p={[0, "25px"]}
                  mb={[30, 0]}
                  y={y}
                  href={data[index].href}
                  // noBorder={index < 2}
                >
                  <p className={"title-card-body"}>
                    <em>{data[index].body}</em>
                  </p>
                </TitledListCard>
              ))}
            </Flex>
          </Box>
        </Flex>
      </FlexSectionContainer>
      <SplitSectionCroppedImage
        pattern={nimbleVert}
        image={image2}
        alt={"three students talking"}
        flip
        imageCredits={"Jessica Scranton/FHI 360"}
      >
        <Lead>We are nimble</Lead>
        <H2 className={"section-title"}>
          Each subsidiary
          <br />
          can move
          <br />
          <span className={"serif"}>quickly and seamlessly</span>
        </H2>
        <div
          className="divider"
          style={{ borderTop: "1px solid black", marginBottom: "1.45rem" }}
        />
        <Box maxWidth={480}>
          <H3 className="section-subtitle">
            On its own or with the larger organization — both in the United
            States and around the world.
          </H3>
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

export default Nimble
