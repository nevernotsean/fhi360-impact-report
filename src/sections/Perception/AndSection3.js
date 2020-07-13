import React from "react"

import { Box } from "rebass/styled-components"
import HandDrawnSVG from "../../components/HandDrawnSVG"

// SVG
import { Lead, H2, H3 } from "../../elements/Type"
import AndSection from "./AndSection"
import { Underlined } from "./../../components/WordNote"

const LeftSide = () => (
  <>
    <Lead>Let's change perception</Lead>
    <H2 className="section-title">
      FHI 360 has been a longtime partner
      <br />
      <span className="serif">of U.S. federal and local governments.</span>
    </H2>
  </>
)

const RightSide = () => (
  <>
    <H2 className="section-title">
      FHI 360 collaborates
      <br />
      <span className="serif">with the private sector, foundations, </span>
    </H2>
    <span className="section-body">
      educational institutions, faith-based organizations, local communities,
      non-U.S. governments and{" "}
      <span style={{ position: "relative" }}>
        more.
        <Box
          sx={{
            left: "50%",
            width: "100px",
            position: "absolute",
            transform: "translate(-50%, -50%) scaleX(0.5)",
            zIndex: -1,
          }}
        >
          <Underlined duration={0.3} delay={0.5} orange></Underlined>
        </Box>
      </span>
    </span>
  </>
)

const AndSection3 = () => {
  return (
    <AndSection>
      <LeftSide />
      <RightSide />
    </AndSection>
  )
}

export default AndSection3
