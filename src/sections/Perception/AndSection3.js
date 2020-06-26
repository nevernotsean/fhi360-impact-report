import React from "react"

import { Box } from "rebass/styled-components"
import HandDrawnSVG from "../../components/HandDrawnSVG"

// SVG
import Streak from "../../assets/svg/streak2.svg"
import { Lead, H2, H3 } from "../../elements/Type"
import AndSection from "./AndSection"

const LeftSide = () => (
  <>
    <Lead>Let's change perception</Lead>
    <H2 className="section-title">
      FHI 360 has been a longtime partner
      <br />
      <span className="serif">of U.S. federal and local governments</span>
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
      governments and{" "}
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
          <HandDrawnSVG svg={Streak} duration={0.3} delay={0.5}></HandDrawnSVG>
        </Box>
      </span>
    </span>
    <span className="section-body">
      We are{" "}
      <span style={{ position: "relative" }}>
        constantly
        <Box
          sx={{
            left: "50%",
            width: "150px",
            position: "absolute",
            transform: "translate(-50%, -30%)",
            zIndex: -1,
          }}
        >
          <HandDrawnSVG svg={Streak} duration={0.3} delay={1.5}></HandDrawnSVG>
        </Box>
      </span>{" "}
      developing new partnerships, new funding relationships and customized
      solutions that we apply to solving some of the world’s most intractable
      problems.
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
