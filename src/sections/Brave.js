import React from "react"

import styled from "styled-components"
import BraveSVG from "../assets/svg/brave.svg"
import SectionDividerDark from "../components/SectionDividerDark"

import brave1 from "../images/fpo-brave-1.png"

import bravecrop1 from "../images/brave-crop1.png"
import bravecrop2 from "../images/brave-crop2.png"

import { Lead } from "../components/Typography"
import {
  SplitSectionCroppedImage,
  SplitSection,
} from "../components/SplitSection"

import { Box } from "reflexbox"

const Brave = () => {
  return (
    <Container>
      <SectionDividerDark svg={BraveSVG}></SectionDividerDark>
      <SplitSection image={brave1}>
        <Lead>We are brave</Lead>
        <h2 className={"section-title"}>
          Some
          <br />
          organizations
          <br />
          <span className={"serif"}>are afraid to fail.</span>
        </h2>
        <h3 className={"section-subtitle"}>We are afraid not to try.</h3>
        <div
          className="divider"
          style={{ borderTop: "1px solid black", marginBottom: "1.45rem" }}
        />
        <Box maxWidth={480}>
          <p className={"section-body"}>
            Our willingness to tackle novel challenges keeps us ahead of the
            curve in recognizing and responding to critical global issues.
          </p>
        </Box>
      </SplitSection>

      <SplitSectionCroppedImage image={bravecrop1} image2={bravecrop2}>
        <Lead>We are brave</Lead>
        <h2 className={"section-title"}>
          We aren’t
          <br />
          afraid to stand
          <br />
          <span className={"serif"}>in the gap.</span>
        </h2>
        <Box maxWidth={480}>
          <h3 className={"section-subtitle"}>
            Around the world, we step in to serve those others might not.
          </h3>
        </Box>
      </SplitSectionCroppedImage>
    </Container>
  )
}

const Container = styled.div``

export default Brave
