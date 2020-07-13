import React from "react"

import styled from "styled-components"
import BraveCard from "../images/brave.png"
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

import { Circled, Underlined } from "../components/WordNote"

import gapVert from "../images/pattern-vert-WeAreBrave_StandintheGap.png"

const BraveFirst = () => (
  <>
    <Lead>We are brave</Lead>
    <H2 className={"section-title"}>
      Our willingness to tackle novel challenges
      <br />
      <span className={"serif"}>
        keeps us ahead of the curve in recognizing and responding to critical
        global issues.
      </span>
    </H2>
    {/* <H3 className={"section-subtitle"}>
      We are afraid not to try.
    </H3> */}
    {/* <div
      className="divider"
      style={{
        borderTop: "1px solid black",
        marginBottom: "1.45rem",
      }}
    />
    <Box maxWidth={480}>
      <p className={"section-body"}>
        in recognizing and responding to critical and global issues.
      </p>
    </Box> */}
  </>
)

const Brave = () => {
  return (
    <>
      <SectionDividerDark img={BraveCard}></SectionDividerDark>
      <SplitSectionLong
        contentArray={[
          {
            image: image1,
            imageCredits: "Kiana Hayeri/The Verbatim Agency for FHI 360",
            content: BraveFirst,
            mobileContent: BraveFirst,
          },
          {
            image: image1,
            imageCredits: "Kiana Hayeri/The Verbatim Agency for FHI 360",
            content: () => (
              <>
                <Lead>We are brave</Lead>
                <Box maxWidth={480}>
                  <span className={"section-body"}>
                    We invested our own capital and put our trust in pilot
                    projects to prove, when few thought it possible, that
                    lifesaving antiretrovirals{" "}
                    <Underlined orange={true}>could be</Underlined> delivered in
                    low-resource settings.
                  </span>
                </Box>
              </>
            ),
            mobileContent: () => (
              <span className={"section-body"}>
                We invested our own capital and put our trust in pilot projects
                to prove, when few thought it possible, that lifesaving
                antiretrovirals <Underlined orange={true}>could be</Underlined>{" "}
                delivered in low-resource settings.
              </span>
            ),
          },
          {
            image: image1,
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
            mobileContent: () => (
              <span className={"section-body"}>
                Our trailblazing work in contraceptive research and development
                builds on a long history of leadership in family planning that
                empowers women and men to decide the size of their families and
                improve their lives.
              </span>
            ),
          },
          {
            image: image1,
            imageCredits: "Kiana Hayeri/The Verbatim Agency for FHI 360",
            content: () => (
              <>
                <Lead>We are brave</Lead>
                <Box maxWidth={480}>
                  <span className={"section-body"}>
                    In the United States, we{" "}
                    <Underlined orange={true}>partner</Underlined> with Native
                    American populations on early childcare, education and
                    tribal language revitalization; <Circled>improve</Circled>{" "}
                    employment outcomes for young adults caught in the criminal
                    justice system; promote{" "}
                    <Underlined orange={true}>healthy</Underlined> behaviors;
                    and work to lessen the stigma of HIV.
                  </span>
                </Box>
              </>
            ),
            mobileContent: () => (
              <span className={"section-body"}>
                In the United States, we{" "}
                <Underlined orange={true}>partner</Underlined> with Native
                American populations on early childcare, education and tribal
                language revitalization; <Circled>improve</Circled> employment
                outcomes for young adults caught in the criminal justice system;
                promote <Underlined orange={true}>healthy</Underlined>{" "}
                behaviors; and work to lessen the stigma of HIV.
              </span>
            ),
          },
        ]}
      ></SplitSectionLong>

      <SplitSectionCroppedImage
        image={image2}
        imageCredits={"Jessica Scranton/FHI 360"}
        hideImageOnMobile={false}
        pattern={gapVert}
      >
        <Lead>We are brave</Lead>
        <H2 className={"section-title"}>
          We aren’t
          <br />
          afraid to stand
          <br />
          <span className={"serif"}>in the gap.</span>
        </H2>
        <Box maxWidth={480}>
          <H3 className={"section-body"}>
            We step in to create a more equitable world.
          </H3>
        </Box>
      </SplitSectionCroppedImage>
    </>
  )
}

export default Brave
