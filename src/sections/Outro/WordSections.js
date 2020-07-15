import React from "react"
import OutroWord from "./OutroWord"

import FlexSectionContainer from "../../components/FlexSectionContainer"
import HandDrawnSVG from "../../components/HandDrawnSVG"

import { Box } from "rebass/styled-components"
import { Lead, H2, H3 } from "../../elements/Type"

import Streak from "../../assets/svg/streak.svg"

import Works from "../../assets/svg/works.svg"
import worksImage from "../../images/outro-1.jpg"

import Impacts from "../../assets/svg/impacts.svg"

import Empowers from "../../assets/svg/empowers.svg"
import empowersImage from "../../images/outro-empowers2.jpg"

import pattern1 from "../../images/pattern-WeAreChanging_Works.png"
import pattern2 from "../../images/pattern-WeAreChanging_Empowers.png"
import pattern3 from "../../images/pattern-WeAreChanging_Engages.png"

const WordSections = () => {
  return (
    <>
      <OutroWord
        image={worksImage}
        alt={"university students"}
        imageCredits="Kiana Hayeri/The Verbatim Agency for FHI 360"
        pattern={pattern1}
      >
        {/* <Lead>Lead</Lead> */}
        <H2 className={"section-title"}>
          We are
          <br />
          changing the way
          <br />
          <span className="serif">human development</span>
        </H2>
        <Box m={["-70px auto", "-100px auto"]} maxWidth={[150, 250]} w={1}>
          <HandDrawnSVG svg={Works} duration={1.5} delay={0.2}></HandDrawnSVG>
        </Box>
      </OutroWord>
      <OutroWord
        image={empowersImage}
        imagePosition={["25% center", "left center"]}
        alt={"woman in focus group"}
        imageCredits={"Jessica Scranton/FHI 360"}
        pattern={pattern2}
      >
        {/* <Lead>Inspire</Lead> */}
        <H2 className={"section-title"}>
          We are
          <br />
          changing the way
          <br />
          <span className="serif">human development</span>
        </H2>
        <Box m={["-50px auto", "-120px auto"]} maxWidth={[300, 550]} w={1}>
          <HandDrawnSVG svg={Impacts} duration={1.5} delay={0.2}></HandDrawnSVG>
        </Box>
      </OutroWord>
      <OutroWord pattern={pattern3}>
        {/* <Lead>Innovate</Lead> */}
        <H2 className={"section-title"}>
          We are
          <br />
          changing the way
          <br />
          <span className="serif">human development</span>
        </H2>
        <Box m={["-50px auto", "-100px auto"]} maxWidth={[300, 600]} w={1}>
          <HandDrawnSVG
            svg={Empowers}
            duration={1.5}
            delay={0.2}
          ></HandDrawnSVG>
        </Box>
      </OutroWord>
      <FlexSectionContainer
        minHeight={["80vh", "100vh"]}
        textAlign={"center"}
        justifyContent="center"
      >
        {/* <Lead>LOREM IPSUM</Lead> */}
        <H2 className="section-title">
          Our world
          <br />
          is connected.
          <br />
          <span className="serif">So are we.</span>
        </H2>
        <Box width={300} mx={"auto"} mt={-30}>
          <HandDrawnSVG
            duration={0.25}
            svg={Streak}
            className="pullquote-streak"
          ></HandDrawnSVG>
        </Box>
      </FlexSectionContainer>
    </>
  )
}

export default WordSections
