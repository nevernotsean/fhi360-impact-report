import React, { useContext } from "react"
import { useInView } from "react-intersection-observer"
import { LocomotiveContext } from "../hooks/useLocomotiveScroll"

import { useTrail } from "react-spring"

import styled from "styled-components"
import InnoSVG from "../assets/svg/innovators.svg"
import SectionDividerDark from "../components/SectionDividerDark"

import { Lead } from "../components/Typography"
import { SplitSection } from "../components/SplitSection"

import image1 from "../images/Innovators1.png"
import image2 from "../images/Innovators2.png"

import { Box } from "reflexbox"

const Innovators = () => {
  const { scroll } = useContext(LocomotiveContext)

  const [listRef, listInView] = useInView({
    rootMargin: "20% 0px -20% 0px",
    threshold: 0.8,
    triggerOnce: true,
  })

  return (
    <Container>
      <SectionDividerDark
        svg={InnoSVG}
        alt="we are innovative"
        duration={1}
        duration2={0.2}
        delay={1}
      ></SectionDividerDark>
      <SplitSection image={image1}>
        <Lead>We are innovators</Lead>
        <h2 className={"section-title"}>
          Big organizations
          <br />
          <span className="serif">offer scale.</span>
        </h2>
        <div
          className="divider"
          style={{ borderTop: "1px solid black", marginBottom: "1.45rem" }}
        />
        <Box maxWidth={480}>
          <p className={"section-body"}>
            Small organizations can move quickly to develop customizable
            solutions.
            <br></br>
            <strong>FHI 360 can do both.</strong>
          </p>
        </Box>
      </SplitSection>
      <SplitSection image={image2} flip>
        <Lead>We are innovators</Lead>
        <h2 className={"section-title"}>
          We are leadingthe revolution
          <br />
          <span className="serif">
            in the international nonprofit sector...
          </span>
        </h2>
        <div
          className="divider"
          style={{ borderTop: "1px solid black", marginBottom: "1.45rem" }}
        />
        <Box maxWidth={480}>
          <p className={"section-body"}>
            ...to pioneer a new way of doing business. FHI 360 and our family of
            companies work together to support partners, pilot new initiatives
            and expand our social imipact.
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

export default Innovators
