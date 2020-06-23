import React from "react"
import YouAreHere from "../assets/svg/you-are-here.svg"
import YouAreHereMobile from "../assets/svg/you-are-here-mobile.svg"
import Sig from "../assets/svg/sig.svg"
import { Flex, Box, Image } from "rebass/styled-components"
import styled from "styled-components"
import theme from "../styles/index"
import HandDrawnSVG from "../components/HandDrawnSVG"

// img
import hero from "../images/patrick-fine-hero.png"
import heroMobile from "../images/patrick-fine-hero-mobile.png"
import strip from "../images/pattern-strip.png"
import PullQuote from "../components/PullQuote"
import { Lead } from "../elements/Type"
import InViewImage from "../components/InViewImage"
import { FlexWrap } from "../elements/Flex"
import { H1 } from "../elements/Type"

import Streak2 from "../assets/svg/streak2.svg"

const pullquoteContent = {
  title: "LOREM",
  body:
    "pull quote lorem ipsum changing fpo lorem ipsum human engagement placeholder only.",
}

const Hero = () => {
  return (
    <HeroContainer bg={theme.colors.lightblue} pt={[0, 100]}>
      <FlexWrap maxWidth={1200} mx={"auto"} px={20}>
        {/* Mobile */}
        <Box
          width={1}
          display={["block", "none"]}
          sx={{ position: "relative" }}
        >
          <Image
            src={heroMobile}
            width={"50%"}
            ml={"-20px"}
            display={"block"}
          ></Image>
          <Image src={strip} className="strip" ml={"-20px"}></Image>
          <Box className="lockup lockup-mobile" width={"50vw"}>
            <Lead style={{ marginBottom: "35px" }}>Welcome</Lead>
            <H1 className="title">
              We are so
              <br />
              very glad
              <span className="hidden">you are here</span>
            </H1>
            <HandDrawnSVG
              svg={YouAreHereMobile}
              alt={"You are here"}
              className="you-are-here"
              duration={2}
            ></HandDrawnSVG>
            <div className="line">
              <h2>
                Patrick Fine
                <br />
                CEO
              </h2>
            </div>
          </Box>
        </Box>
        {/* Desktop */}
        <Box width={[1 / 2]} display={["none", "block"]}>
          <InViewImage
            src={hero}
            className="hero-image"
            scrollSpeed={0}
            imageSpeed={1.5}
            mt={[0, 50]}
            revealSpeed={0}
          ></InViewImage>
          <img src={strip} className="strip"></img>
          <PullQuote title={pullquoteContent.title} px={[1, 5]}>
            {pullquoteContent.body}
          </PullQuote>
        </Box>
        <Box width={[1, 1 / 2]}>
          <Box className="lockup lockup-desktop" display={["none", "block"]}>
            <Lead style={{ marginBottom: "35px" }}>Welcome</Lead>
            <H1 className="title">
              We are so
              <br />
              very glad
              <span className="hidden">you are here</span>
            </H1>
            <HandDrawnSVG
              svg={YouAreHere}
              alt={"You are here"}
              className="you-are-here"
              duration={2}
            ></HandDrawnSVG>
            <div className="line">
              <h2>
                Patrick Fine
                <br />
                CEO
              </h2>
            </div>
          </Box>
          <Box px={[3, 5]} maxWidth={["none", 520]}>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation.
            </p>
            <p>
              Ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat.
            </p>
            <Box display={["block", "none"]}>
              <PullQuote
                title={pullquoteContent.title}
                px={[1, 5]}
                fontSize={"28px"}
                streak={Streak2}
              >
                {pullquoteContent.body}
              </PullQuote>
            </Box>
            <p>
              Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi.exerci tation ullamcorper
              suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation.
            </p>
            <p>
              Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi.exerci tation ullamcorper
              suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </p>
            <Box width={200} mx={"auto"} mb={25}>
              <Sig></Sig>
            </Box>
          </Box>
        </Box>
      </FlexWrap>
      <Box bg={"black"} width={[1 / 4]} height={20} ml={"auto"}></Box>
    </HeroContainer>
  )
}

const HeroContainer = styled(Box)`
  /* .hero-image {
    margin-bottom: 0;
    display: block;
    width: 100%;
  } */

  .strip {
    transform: translateY(-100%);
    width: 100%;
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

      h2 {
        margin-left: 32px;
        margin-top: 16px;
        font-size: 14px;
      }
    }

    .hidden {
      visibility: hidden;
      position: absolute;
      pointer-events: none;
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
    left: 45vw;

    .line {
      width: 40vw;
      border-top: none;
      border-bottom: 1px solid black;
      transform: translate(-9vw, 70px);
      h2 {
        margin-left: 0;
        transform: translateX(20vw);
      }
    }
  }
`

export default Hero
