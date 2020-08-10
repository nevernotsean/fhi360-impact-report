import React from "react"
import { Box } from "rebass/styled-components"
import styled from "styled-components"
import theme from "../styles/index"
import PullQuote from "../components/PullQuote"
import { Lead, H2, H1, H3 } from "../elements/Type"
import InViewImage from "../components/InViewImage"
import { FlexWrap } from "../elements/Flex"
import { Underlined } from "./../components/WordNote"
import HandDrawnSVG from "./../components/HandDrawnSVG"
import Image from "../components/image"

import Media from "../components/Media"
import LetterContext from "../components/HeroLetter"

// img
import GladYouAreHere from "../assets/svg/glad-you-are-here.svg"
import gladYouAreHere from "../images/glad-you-are-here.png"

import HeroFamily from "../images/hero-family.jpg"
import HeroGirl from "../images/hero-girl.jpg"
import HeroMoto from "../images/hero-moto.jpg"
import { HeroLetterOpen } from "./../components/HeroLetter"

const HeroPullquote = props => (
  <PullQuote
    px={[1, 5]}
    mb={50}
    {...props}
    fontSize={["24px", "4vw", "40px"]}
    lineHeight={["28px", "4.4vw", "44px"]}
  >
    "Now as never before, we will be challenged to be creative and work{" "}
    <Underlined
      orange
      duration={0.25}
      overrideLength={[238]}
      width={200}
      className="pullquote-streak"
      // rootMargin={"-1000px 0px"}
      threshold={0}
      // debug={true}
    >
      differently
    </Underlined>{" "}
    ... the vast scope and urgency of this crisis demand nothing less."
  </PullQuote>
)

const Hero = () => {
  return (
    <HeroContainer bg={theme.colors.lightblue}>
      <Media at="sm">
        <Image
          width={1}
          src={gladYouAreHere}
          alt={"We are so very glad you are here"}
        ></Image>
        <Box
          width={"calc(100vw - 40px)"}
          height={"150vw"}
          pb={50}
          mx={0}
          sx={{
            position: "relative",
            left: "20px",
          }}
        >
          <HeroImage
            image={HeroFamily}
            width={2 / 3}
            align={"right"}
            top={"0"}
            zIndex={1}
          ></HeroImage>
          <HeroImage
            image={HeroGirl}
            width={2 / 3}
            align={"left"}
            top={"50vw"}
            zIndex={2}
          ></HeroImage>
        </Box>
        <Box px={20} pb={50}>
          <HeroPullquote px={[1, 5]} fontSize={"28px"} mb={"1.45rem"} />
          <Box px={[1, 5]}>
            <HeroLetterOpen>Hear from our ceo →</HeroLetterOpen>
          </Box>
        </Box>
      </Media>
      <Media greaterThanOrEqual={"md"}>
        <FlexWrap maxWidth={1200} mx={"auto"} px={20} pt={[0, 100]}>
          <Box width={1}>
            <Lead style={{ marginBottom: "35px", textAlign: "center" }}>
              Welcome
            </Lead>
            <Box mx={"auto"}>
              <HandDrawnSVG
                svg={GladYouAreHere}
                alt={"We are so very glad you are here"}
                className="you-are-here"
                delay={2.25}
                delay2={3.25}
                delay3={4.25}
                duration={1.5}
                duration2={1.5}
                duration3={1.5}
                threshold={0}
              ></HandDrawnSVG>
            </Box>
          </Box>
          <Box
            width={[1 / 2]}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <HeroPullquote></HeroPullquote>
            <Box px={[1, 5]} mb={50}>
              <HeroLetterOpen>Hear from our ceo →</HeroLetterOpen>
            </Box>
          </Box>
          <Box
            width={[1 / 2]}
            sx={{
              position: "relative",
              minHeight: ["100vw", "100vw", "100vw", "1000px"],
            }}
            className={"image-collage"}
          >
            <HeroImage
              image={HeroFamily}
              width={2 / 3}
              align={"right"}
              top={"0"}
              zIndex={1}
            ></HeroImage>
            <HeroImage
              image={HeroGirl}
              width={2 / 3}
              align={"left"}
              top={["22%", "22%", "22%", 300]}
              zIndex={2}
            ></HeroImage>
            <HeroImage
              image={HeroMoto}
              width={1 / 2}
              align={"right"}
              right={"5%"}
              top={["50%", "50%", "50%", 600]}
              zIndex={0}
              rootMargin={"0% 0px 20% 0px"}
            ></HeroImage>
          </Box>
        </FlexWrap>
      </Media>
    </HeroContainer>
  )
}

const HeroImage = ({
  width,
  height,
  image,
  imageCredits,
  align,
  top,
  zIndex,
  right = 0,
  left = 0,
  ...props
}) => (
  <Box
    width={width}
    sx={{
      position: "absolute",
      left: align === "left" && left,
      right: align === "right" && right,
      top: top,
      zIndex: zIndex,
    }}
  >
    <Box sx={{ position: "relative" }}>
      <InViewImage
        imageCredits
        src={image}
        scrollSpeed={1}
        imageSpeed={1.5}
        // lazyload={false}
        // debug={true}
        {...props}
      ></InViewImage>
    </Box>
  </Box>
)

const HeroContainer = styled(Box)``

export default Hero
