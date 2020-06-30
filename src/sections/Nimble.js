import React, { useContext } from "react"
import { useInView } from "react-intersection-observer"
import { LocomotiveContext } from "../hooks/useLocomotiveScroll"

import { useTrail } from "react-spring"

import styled from "styled-components"
import NimbleSVG from "../assets/svg/nimble.svg"
import SectionDividerDark from "../components/SectionDividerDark"

import { Lead, H2, H3 } from "../elements/Type"
import { SplitSection } from "../components/SplitSection"

import image1 from "../images/Nimble1.png"

import { Flex, Box } from "rebass/styled-components"
import FlexSectionContainer from "../components/FlexSectionContainer"
import HandDrawnSVG from "../components/HandDrawnSVG"

import Arrow from "../assets/svg/arrow.svg"
import TitledListCard from "../components/TitledListCard"

const data = [
  {
    title: "FHI<br/><span class='bolder'>Clinical</span>",
    body: "Complex clinical research support in resource-limited settings",
    href: "#",
  },
  {
    title: "FHI<br/><span class='bolder'>Ventures</span>",
    body: "Innovative funding and impact investing",
    href: "#",
  },
  {
    title: "FHI<br/><span class='bolder'>Solutions</span>",
    body: "Customized nutrition and health solutions",
    href: "#",
  },
  {
    title: "FHI<br/><span class='bolder'>Konung</span>",
    body:
      "Lorem ipsum fpo summary copy only no link fpo lorem ipsum summary copy only no lnk fpo.",
  },
  {
    title: "FHI<br/><span class='bolder'>Partners</span>",
    body:
      "Specialized solutions in partnership with foundations and the private sector",
    href: "#",
  },
]

const config = { mass: 5, tension: 2000, friction: 200 }

const Nimble = () => {
  const { scroll } = useContext(LocomotiveContext)

  const [listRef, listInView] = useInView({
    rootMargin: "20% 0px -20% 0px",
    threshold: 0.8,
    triggerOnce: true,
  })

  const listAnim = useTrail(data.length, {
    config,
    y: listInView ? "0" : "400px",
  })

  return (
    <Container>
      <SectionDividerDark
        svg={NimbleSVG}
        alt="we are nimble"
        delay={0.01}
      ></SectionDividerDark>
      <FlexSectionContainer>
        <Flex alignItems={"center"} width={1}>
          <Box width={[1, 1 / 2]} maxWidth={480} mr={"auto"}>
            <Lead>We are nimble</Lead>
            <H2 className="section-title">
              We are eager, ready & able
              <br />
              <span className="serif">to jump in, pivot and solve.</span>
            </H2>
            <div
              className="divider"
              style={{ borderTop: "1px solid black", marginBottom: "1.45rem" }}
            />
            <H3 className="section-subtitle">
              Our global footprint means we do not need a lot of lead time to
              respond to new crises or existing challenges.
              <br />
              <br />
              Our four subsidiaries have unique areas of focus:
            </H3>
            <Box
              mt={-50}
              style={{ transform: "translate(15%, -30%) rotate(-12deg)" }}
            >
              <HandDrawnSVG
                svg={Arrow}
                alt="arrow"
                duration={0.3}
              ></HandDrawnSVG>
            </Box>
          </Box>
          <Box width={[1, 1 / 2]} ref={listRef} overflow="hidden">
            <Flex flexWrap="wrap">
              {listAnim.map(({ y, ...rest }, index) => (
                <TitledListCard
                  key={index}
                  title={data[index].title}
                  width={[1, 1 / 3]}
                  maxWidth={180}
                  height={350}
                  p={"25px"}
                  y={y}
                  href={data[index].href}
                  // noBorder={index < 2}
                >
                  <p>
                    <em>{data[index].body}</em>
                  </p>
                </TitledListCard>
              ))}
            </Flex>
          </Box>
        </Flex>
      </FlexSectionContainer>
      <SplitSection image={image1} flip imageCredits={"2 women health workers"}>
        <Lead>We are nimble</Lead>
        <H2 className={"section-title"}>
          Each subsidiary
          <br />
          can move
          <br />
          <span className={"serif"}>quickly and seamlessly.</span>
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

export default Nimble
