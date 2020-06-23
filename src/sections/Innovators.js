import React, { useContext } from "react"
import { useInView } from "react-intersection-observer"
import { LocomotiveContext } from "../hooks/useLocomotiveScroll"

import { useTrail } from "react-spring"

import styled from "styled-components"
import InnoSVG from "../assets/svg/innovators.svg"
import SectionDividerDark from "../components/SectionDividerDark"

import { Lead, H2, H3 } from "../elements/Type"
import { SplitSection } from "../components/SplitSection"
import Streak from "../assets/svg/streak2.svg"

import image1 from "../images/Innovators1.png"
import image2 from "../images/Innovators2.png"

import { Box } from "rebass/styled-components"
import HandDrawnSVG from "../components/HandDrawnSVG"

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
        <H2 className={"section-title"}>
          Some organizations
          <br />
          <span className="serif">offer scale.</span>
        </H2>
        <div
          className="divider"
          style={{ borderTop: "1px solid black", marginBottom: "1.45rem" }}
        />
        <Box maxWidth={480}>
          <p className={"section-body"}>
            Other organizations focus on developing tailored solutions.
          </p>
          <span className={"section-body"} style={{ position: "relative" }}>
            <strong>FHI 360 does both.</strong>
            <Box
              sx={{
                left: 0,
                width: "200px",
                position: "absolute",
                transform: "translateY(-20%)",
                zIndex: -1,
              }}
            >
              <HandDrawnSVG
                svg={Streak}
                duration={0.3}
                delay={1}
              ></HandDrawnSVG>
            </Box>
          </span>
        </Box>
      </SplitSection>
      <SplitSection image={image2} flip>
        <Lead>We are innovators</Lead>
        <H2 className={"section-title"}>
          We are pioneering new ways of doing business
          <br />
          <span className="serif">in the international nonprofit sector.</span>
        </H2>
        <div
          className="divider"
          style={{ borderTop: "1px solid black", marginBottom: "1.45rem" }}
        />
        <Box maxWidth={480}>
          <p className={"section-body"}>
            FHI 360 and our family of companies provide fit-for-purpose
            solutions to businesses, foundations, governments and civil society
            organizations.
          </p>
          {/* <p className="section-body">
            Our global presence and networks enable us to cross-pollinate ideas
            and knowledge within and across countries so that we can pilot
            initiatives, nurture innovation and expand our social impact.
          </p> */}
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
