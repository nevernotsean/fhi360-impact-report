import React, { useContext } from "react"
import { useInView } from "react-intersection-observer"
import { LocomotiveContext } from "../hooks/useLocomotiveScroll"

import { useTrail } from "react-spring"

import styled from "styled-components"
import NimbleSVG from "../assets/svg/nimble.svg"
import SectionDividerDark from "../components/SectionDividerDark"

import { Lead } from "../components/Typography"
import { SplitSection } from "../components/SplitSection"

import image1 from "../images/Nimble1.png"

import { Flex, Box } from "reflexbox"
import FlexSectionContainer from "../components/FlexSectionContainer"
import HandDrawnSVG from "../components/HandDrawnSVG"

import Arrow from "../assets/svg/arrow.svg"
import OrderedListCard from "../components/OrderedListCard"

const data = [
  {
    number: "01",
    body: "About lorem ipsum dolor ist amet, consectateur.",
    href: "#",
  },
  {
    number: "02",
    body: "About lorem ipsum dolor ist amet, consectateur.",
    href: "#",
  },
  {
    number: "03",
    body: "About lorem ipsum dolor ist amet, consectateur.",
    href: "#",
  },
  {
    number: "04",
    body: "About lorem ipsum dolor ist amet, consectateur.",
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
    y: listInView ? "0" : "100%",
  })

  return (
    <Container>
      <SectionDividerDark
        svg={NimbleSVG}
        alt="we are nimble"
        duration={0.2}
        duration2={0.2}
        delay={0.01}
      ></SectionDividerDark>
      <FlexSectionContainer>
        <Flex alignItems={"center"} width={1}>
          <Box width={[1, 1 / 2]} maxWidth={480} mr={"auto"}>
            <Lead>We are nimble</Lead>
            <h2 className="section-title">
              We are eager, ready & able
              <br />
              <span className="serif">to jump in, pivot and solve.</span>
            </h2>
            <div
              className="divider"
              style={{ borderTop: "1px solid black", marginBottom: "1.45rem" }}
            />
            <h3 className="section-subtitle">
              Our global footprint means we do not need a lot of lead time to
              respond to new crises or existing challenges.
            </h3>
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
          <Box width={[1, 1 / 2]} ref={listRef}>
            <Flex flexWrap="wrap">
              {listAnim.map(({ y, ...rest }, index) => (
                <OrderedListCard
                  key={index}
                  number={data[index].number}
                  width={[1, 1 / 2]}
                  maxWidth={200}
                  m={"25px 25px auto 25px"}
                  y={y}
                  href={data[index].href}
                >
                  <p>{data[index].body}</p>
                </OrderedListCard>
              ))}
            </Flex>
          </Box>
        </Flex>
      </FlexSectionContainer>
      <SplitSection image={image1} flip>
        <Lead>We are nimble</Lead>
        <h2 className={"section-title"}>
          Each can move quickly and seamlessly,
          <br />
          <span className={"serif"}>
            alone or with the larger organization.{" "}
          </span>
        </h2>
        <div
          className="divider"
          style={{ borderTop: "1px solid black", marginBottom: "1.45rem" }}
        />
        <Box maxWidth={480}>
          <p className={"section-body"}>
            Lorem ipsum fpo contextual content lorem ilset dor nimble
            subsidiaries fpo content lorem.
          </p>
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
