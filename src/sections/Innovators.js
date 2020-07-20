import React from "react"

import styled from "styled-components"
import Innovate from "../images/innovators.png"
import SectionDividerDark from "../components/SectionDividerDark"

import { Lead, H2 } from "../elements/Type"
import { SplitSectionCroppedImage } from "../components/SplitSection"
import Streak from "../assets/svg/streak2.svg"

import image1 from "../images/GQ4B5999.jpg"
import image2 from "../images/innovate-2.jpg"

import { Box } from "rebass/styled-components"
import HandDrawnSVG from "../components/HandDrawnSVG"

import innoVert from "../images/pattern-vert-WeAreInnovators_section1.png"
import SplitSectionLongContent from "./../components/SplitSectionLongContent"

const InnoFirst = () => (
  <>
    <Lead>We are innovators</Lead>
    <H2 className={"section-title"}>
      We are pioneering new ways of doing business
      <br />
      <span className="serif">in the international nonprofit sector.</span>
    </H2>
    <div
      className="divider"
      style={{
        borderTop: "1px solid black",
        marginBottom: "1.45rem",
      }}
    />
    <Box maxWidth={480}>
      <p className={"section-body"}>
        FHI 360 and our family of companies provide fit-for-purpose solutions to
        businesses, foundations, governments and civil society organizations.
      </p>
    </Box>
  </>
)

const Innovators = () => {
  // const { scroll } = useContext(LocomotiveContext)

  // const [listRef, listInView] = useInView({
  //   rootMargin: "20% 0px -20% 0px",
  //   threshold: 0.8,
  //   triggerOnce: true,
  // })

  return (
    <Container>
      <SectionDividerDark
        img={Innovate}
        alt="we are innovative"
      ></SectionDividerDark>
      <SplitSectionCroppedImage
        image={image1}
        imageCredits={"Mohammad Magayda/FHI 360"}
        alt={"two women beekeepers"}
        pattern={innoVert}
      >
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
                width: "160px",
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
      </SplitSectionCroppedImage>
      <SplitSectionLongContent
        image={image2}
        flip
        id={"innovators"}
        contentArray={[
          {
            image: image2,
            imageCredits: "Leanne Gray/FHI 360",
            alt: "smiling woman holding tablet",
            content: InnoFirst,
            mobileContent: InnoFirst,
          },
          {
            image: image2,
            imageCredits: "Leanne Gray/FHI 360",
            alt: "smiling woman holding tablet",
            content: () => (
              <>
                <Lead>We are innovators</Lead>
                <Box maxWidth={480}>
                  <p className="section-body">
                    From Nepal to North Dakota, our global presence and networks
                    enable us to cross-pollinate ideas and knowledge within and
                    across countries so that we can pilot initiatives, nurture
                    innovation and expand our social impact.
                  </p>
                </Box>
              </>
            ),
            mobileContent: () => (
              <p className="section-body">
                From Nepal to North Dakota, our global presence and networks
                enable us to cross-pollinate ideas and knowledge within and
                across countries so that we can pilot initiatives, nurture
                innovation and expand our social impact.
              </p>
            ),
          },
        ]}
      ></SplitSectionLongContent>
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
