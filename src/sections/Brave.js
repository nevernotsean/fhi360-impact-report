import React from "react"

import styled from "styled-components"
import BraveSVG from "../assets/svg/brave.svg"
import SectionDividerDark from "../components/SectionDividerDark"

import brave1 from "../images/fpo-brave-1.png"

import bravecrop1 from "../images/brave-crop1.png"
import bravecrop2 from "../images/brave-crop2.png"

import { Lead, H2, H3 } from "../elements/Type"
import {
  SplitSectionCroppedImage,
  SplitSection,
} from "../components/SplitSection"

import { Box } from "rebass/styled-components"

const Brave = () => {
  return (
    <Container>
      <SectionDividerDark svg={BraveSVG}></SectionDividerDark>
      <SplitSection image={brave1}>
        <Lead>We are brave</Lead>
        <H2 className={"section-title"}>
          Some
          <br />
          organizations
          <br />
          <span className={"serif"}>are afraid to fail.</span>
        </H2>
        <H3 className={"section-subtitle"}>We are afraid not to try.</H3>
        <div
          className="divider"
          style={{ borderTop: "1px solid black", marginBottom: "1.45rem" }}
        />
        <Box maxWidth={480}>
          <p className={"section-body"}>
            Our willingness to tackle novel challenges keeps us ahead of the
            curve in recognizing and responding to critical global issues.
          </p>
          {/* <p className={"section-body"}>
            Our trailblazing work in contraceptive research and development
            builds on a long history of leadership in family planning that
            empowers women and men to decide the size of their families and
            improve their lives.
          </p>
          <p className={"section-body"}>
            In the United States, we partner with Native American populations on
            early childcare, education and tribal language revitalization;
            improve employment outcomes for young adults caught in the criminal
            justice system; promote healthy behaviors; and work to lessen the
            stigma of HIV.
          </p>
          <p className={"section-body"}>
            In times of conflict, disaster or displacement, we are there to meet
            both urgent needs and to help people rebuild their lives and
            communities.
          </p> */}
        </Box>
      </SplitSection>

      <SplitSectionCroppedImage image={bravecrop1} image2={bravecrop2}>
        <Lead>We are brave</Lead>
        <H2 className={"section-title"}>
          We aren’t
          <br />
          afraid to stand
          <br />
          <span className={"serif"}>in the gap.</span>
        </H2>
        <Box maxWidth={480}>
          <H3 className={"section-subtitle"}>
            Around the world, we step in to serve those others might not.
          </H3>
        </Box>
      </SplitSectionCroppedImage>
    </Container>
  )
}

const Container = styled.div``

export default Brave
