import React from "react"

import { Box } from "rebass/styled-components"

import HandDrawnSVG from "../../components/HandDrawnSVG"

// SVG

import ZipZag from "../../assets/svg/zigzag.svg"
import { Lead, H2 } from "../../elements/Type"
import AndSection from "./AndSection"

const LeftSide = () => (
  <>
    <Lead>Let's change perception</Lead>
    <H2 className="section-title">
      FHI 360 is an
      <br />
      international
      <br />
      <span className="serif">human development organization.</span>
    </H2>
  </>
)

const RightSide = () => (
  <>
    <H2 className="section-title">
      FHI 360
      <br />
      is a family
      <br />
      <span className="serif">of companies.</span>
    </H2>
    <Box maxWidth={480} className="section-body">
      <p className="section-body">
        Each of our subsidiaries is designed to make us:
      </p>
      <ul>
        <li>
          <p className="section-body">nimble</p>
        </li>
        <li>
          <p className="section-body">innovative</p>
        </li>
        <li>
          <p className="section-body">responsive</p>
        </li>
        <li>
          <p className="section-body">fit for purpose</p>
        </li>
      </ul>
      <p className="section-body">
        All have a shared common goal — <br />
        improving lives in lasting ways.
      </p>
    </Box>
    <Box mt={[-10, -30]} ml={0} width={[1 / 3, 1 / 2]}>
      <HandDrawnSVG
        svg={ZipZag}
        alt="zigzag"
        duration={0.3}
        delay={1}
      ></HandDrawnSVG>
    </Box>
  </>
)

const AndSection1 = () => {
  return (
    <AndSection>
      <LeftSide />
      <RightSide />
    </AndSection>
  )
}

export default AndSection1
