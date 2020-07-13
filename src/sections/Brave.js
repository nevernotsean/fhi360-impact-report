import React from "react"

import styled from "styled-components"
import BraveCard from "../images/brave.png"
import SectionDividerDark from "../components/SectionDividerDark"

import image1 from "../images/fpo-brave-1.png"
// import image2 from "../images/stand-gap.jpg"

import { Lead, H2, H3 } from "../elements/Type"
import SplitSectionLongContent from "../components/SplitSectionLongContent"

import { Box } from "rebass/styled-components"

import { Underlined } from "../components/WordNote"

// import gapVert from "../images/pattern-vert-WeAreBrave_StandintheGap.png"

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
  </>
)

const Brave = () => {
  return (
    <>
      <SectionDividerDark img={BraveCard}></SectionDividerDark>
      <SplitSectionLongContent
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
            content: ({ animated }) => (
              <>
                <Lead>We are brave</Lead>
                <Box maxWidth={480}>
                  <span className={"section-body"}>
                    We invested our own capital and put our trust in pilot
                    projects to prove, when few thought it possible, that
                    lifesaving antiretrovirals{" "}
                    <Underlined
                      orange={true}
                      useInviewTrigger={false}
                      animated={animated}
                    >
                      could be
                    </Underlined>{" "}
                    delivered in low-resource settings.
                  </span>
                </Box>
              </>
            ),
            mobileContent: ({ animated }) => (
              <span className={"section-body"}>
                We invested our own capital and put our trust in pilot projects
                to prove, when few thought it possible, that lifesaving
                antiretrovirals{" "}
                <Underlined
                  orange={true}
                  useInviewTrigger={false}
                  animated={animated}
                  delay={0}
                >
                  could be
                </Underlined>{" "}
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
            content: ({ animated }) => (
              <>
                <Lead>We are brave</Lead>
                <Box maxWidth={480}>
                  <span className={"section-body"}>
                    In the United States, we{" "}
                    <Underlined
                      orange={true}
                      useInviewTrigger={false}
                      animated={animated}
                      delay={1}
                    >
                      partner
                    </Underlined>{" "}
                    with Native American populations on early childcare,
                    education and tribal language revitalization;{" "}
                    <Underlined
                      orange={true}
                      useInviewTrigger={false}
                      animated={animated}
                      delay={2}
                    >
                      improve
                    </Underlined>{" "}
                    employment outcomes for young adults caught in the criminal
                    justice system; promote{" "}
                    <Underlined
                      orange={true}
                      useInviewTrigger={false}
                      animated={animated}
                      delay={3}
                    >
                      healthy
                    </Underlined>{" "}
                    behaviors; and work to lessen the stigma of HIV.
                  </span>
                </Box>
              </>
            ),
            mobileContent: ({ animated }) => (
              <span className={"section-body"}>
                In the United States, we{" "}
                <Underlined orange={true}>partner</Underlined> with Native
                American populations on early childcare, education and tribal
                language revitalization;{" "}
                <Underlined orange={true}>improve</Underlined> employment
                outcomes for young adults caught in the criminal justice system;
                promote <Underlined orange={true}>healthy</Underlined>{" "}
                behaviors; and work to lessen the stigma of HIV. We aren't
                afraid to stand in the gap to create a more equitable world.
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
                    In times of conflict, disaster or displacement, we are there
                    to meet both urgent needs and to help people rebuild their
                    lives and communities.
                  </span>
                </Box>
              </>
            ),
            mobileContent: () => (
              <span className={"section-body"}>
                In times of conflict, disaster or displacement, we are there to
                meet both urgent needs and to help people rebuild their lives
                and communities.
              </span>
            ),
          },
        ]}
      ></SplitSectionLongContent>
    </>
  )
}

export default Brave
