import React from "react"

import { Flex, Box } from "rebass/styled-components"

import HandDrawnSVG from "../../components/HandDrawnSVG"

// SVG

import ZipZag from "../../assets/svg/zigzag.svg"
import { Lead, H2, H3 } from "../../elements/Type"
import AndSection from "./AndSection"

import { animated } from "react-spring"

// SVG

import Circle from "../../assets/svg/circle.svg"

const config = { mass: 300, tension: 2000, friction: 20000 }

const LeftSide = () => (
  <>
    <Lead>Let's change perception</Lead>

    <H2 className="section-title">
      FHI 360 has almost 50 years of experience
      <br />
      <span className="serif">
        solving some of the world’s most complex challenges.
      </span>
    </H2>
  </>
)

const RightSide = () => (
  <>
    <H2 className="section-title">
      FHI 360 has worked for decades
      <br />
      <span className="serif">throughout the United States</span>
    </H2>
    <span className="section-body">
      to reduce inequality and advance health, safety, education and workforce
      development — particularly among those who are
      <br />
      <span style={{ position: "relative" }}>
        marginalized and underserved.
        <Box
          sx={{
            left: 0,
            width: "200px",
            position: "absolute",
            transform: "translateY(-60%)",
            zIndex: -1,
          }}
        >
          <HandDrawnSVG svg={Circle} duration={0.3} delay={1}></HandDrawnSVG>
        </Box>
      </span>
    </span>
  </>
)

const AndSection2 = () => {
  return (
    <AndSection>
      <LeftSide />
      <RightSide />
    </AndSection>
  )
}

export default AndSection2
