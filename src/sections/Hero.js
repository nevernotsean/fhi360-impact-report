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
              mr={50}
              top={["50%", "50%", "50%", 600]}
              zIndex={0}
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
  ...props
}) => (
  <Box
    width={width}
    sx={{
      position: "absolute",
      left: align === "left" && 0,
      right: align === "right" && 0,
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
        lazyload={false}
        style={{
          width: "100%",
          height: height,
          objectFit: "cover",
          objectPosition: "center center",
          marginBottom: 0,
        }}
        {...props}
      ></InViewImage>
    </Box>
  </Box>
)

const HeroContainer = styled(Box)`
  /* .hero-image {
    margin-bottom: 0;
    display: block;
    width: 100%;
  } */

  .strip {
    transform: translateY(-100%);
    width: 100%;

    position: absolute;
  }

  .lockup {
    .title {
      /* font-size: 88px;
      line-height: 82px;
      font-weight: 900; */
    }

    .you-are-here {
      position: absolute;
      width: 115%;
      height: auto;
      transform: translate(-17%, -15%);
    }

    .line {
      border-top: 1px solid black;
      width: 15vw;
      transform: translate(-13px, 165px);

      h3 {
        margin-left: 32px;
        margin-top: 16px;
        font-size: 14px;
      }
    }

    .hidden {
      visibility: hidden;
      position: absolute;
      pointer-events: none;
      right: 0;
    }
  }

  .lockup-desktop {
    position: relative;
    margin-top: 40px;
    min-height: 500px;
  }

  .lockup-mobile {
    position: absolute;
    top: 30px;
    right: -20px;

    .line {
      width: 40vw;
      border-top: none;
      border-bottom: 1px solid black;
      transform: translate(-9vw, 70px);

      width: 50vw;

      h2 {
        margin-left: 20vw;
        /* transform: translateX(20vw); */
      }
    }
  }
`

export default Hero
