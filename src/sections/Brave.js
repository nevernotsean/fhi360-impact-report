import React from "react"

import styled from "styled-components"
import BraveSVG from "../assets/svg/brave.svg"
import SectionDividerDark from "../components/SectionDividerDark"

import image1 from "../images/fpo-brave-1.png"
import image2 from "../images/stand-gap.jpg"

import { Lead, H2, H3 } from "../elements/Type"
import {
  SplitSectionCroppedImage,
  SplitSection,
  SplitSectionLong,
} from "../components/SplitSection"

import { Box } from "rebass/styled-components"
import HandDrawnSVG from "../components/HandDrawnSVG"

import Streak from "../assets/svg/streak2.svg"
import Circle from "../assets/svg/circle.svg"

const Brave = () => {
  return (
    <>
      {/* <SectionDividerDark svg={BraveSVG}></SectionDividerDark> */}
      <SplitSectionLong
        contentArray={[
          {
            img: image1,
            imageCredits: "Kiana Hayeri/The Verbatim Agency for FHI 360",
            content: () => (
              <>
                <Lead>We are brave</Lead>
                <H2 className={"section-title"}>
                  Some
                  <br />
                  organizations
                  <br />
                  <span className={"serif"}>are afraid to fail.</span>
                </H2>
                <H3 className={"section-subtitle"}>
                  We are afraid not to try.
                </H3>
                <div
                  className="divider"
                  style={{
                    borderTop: "1px solid black",
                    marginBottom: "1.45rem",
                  }}
                />
                <Box maxWidth={480}>
                  <p className={"section-body"}>
                    Our willingness to tackle novel challenges keeps us ahead of
                    the curve in recognizing and responding to critical global
                    issues.
                  </p>
                </Box>
              </>
            ),
          },
          {
            img: image1,
            imageCredits: "Kiana Hayeri/The Verbatim Agency for FHI 360",
            content: () => (
              <>
                <Lead>We are brave</Lead>
                <Box maxWidth={480}>
                  <span className={"section-body"}>
                    We invested our own capital and put our trust in pilot
                    projects to prove, when few thought it possible, that
                    lifesaving anti-retrovirals<Underlined>could be</Underlined>
                    delivered in low-resource settings.
                  </span>
                </Box>
              </>
            ),
          },
          {
            img: image1,
            imageCredits: "Kiana Hayeri/The Verbatim Agency for FHI 360",
            content: () => (
              <>
                <Lead>We are brave</Lead>
                <Box maxWidth={480}>
                  <span className={"section-body"}>
                    Our trailblazing work in contraceptive research and
                    development builds on a long history of leadership in family
                    planning that empowers women and men to decide the size of
                    their families and improve their lives.
                  </span>
                </Box>
              </>
            ),
          },
          {
            img: image1,
            imageCredits: "Kiana Hayeri/The Verbatim Agency for FHI 360",
            content: () => (
              <>
                <Lead>We are brave</Lead>
                <Box maxWidth={480}>
                  <span className={"section-body"}>
                    In the United States, we<Underlined>partner</Underlined>
                    with Native American populations on early childcare,
                    education and tribal language revitalization;
                    <Circled>improve</Circled>
                    employment outcomes for young adults caught in the criminal
                    justice system; promote<Underlined>healthy</Underlined>
                    behaviors; and work to lessen the stigma of HIV.
                  </span>
                </Box>
              </>
            ),
          },
        ]}
      ></SplitSectionLong>

      <SplitSection image={image2} imageCredits={"Jessica Scranton/FHI 360"}>
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
      </SplitSection>
    </>
  )
}

const WordNote = ({ children, sx, style, svg, ...props }) => (
  <>
    {" "}
    <span style={{ position: "relative" }}>
      {children}
      <Box
        sx={{
          left: 0,
          width: "80px",
          position: "absolute",
          transform: "translateY(-20%)",
          zIndex: -1,
          ...style,
          ...sx,
        }}
      >
        <HandDrawnSVG svg={svg} duration={0.3} delay={1}></HandDrawnSVG>
      </Box>
    </span>{" "}
  </>
)

const Underlined = props => <WordNote svg={Streak} {...props} />

const Circled = props => <WordNote svg={Circle} {...props} />

export default Brave
