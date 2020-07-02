import React from "react"
import YouAreHere from "../images/you-are-here.png"
import Sig from "../images/sig.png"
import { Box, Image } from "rebass/styled-components"
import styled from "styled-components"
import theme from "../styles/index"

// img
import hero from "../images/patrick-fine-hero.png"
import heroMobile from "../images/patrick-fine-hero-mobile.png"
import strip from "../images/pattern-Patrick.png"
import PullQuote from "../components/PullQuote"
import { Lead, H2, H1, H3 } from "../elements/Type"
import InViewImage from "../components/InViewImage"
import { FlexWrap } from "../elements/Flex"

import Streak2 from "../assets/svg/streak2.svg"

const introLetter = [
  "Dear friends and colleagues,",

  "Thanks for visiting! We are delighted to share with you who we are, what we do and where we work. Whether you are just learning about FHI 360 or have worked with us before, you may be surprised by what you see.",

  "As we entered 2020, none of us could have imagined how our world would be upended by COVID-19. What started as a public health emergency has become a global crisis that has exposed and exacerbated systemic inequalities in many of our communities. The social and economic aftershocks will be with us for years to come.",

  "Now as never before, we will be challenged to be creative and work differently. And because we are stronger and more effective when we work together, this is a time to marshal our collective strengths — the vast scope and urgency of this crisis demand nothing less.",

  "Today, we find ourselves called to deliver on our mission to combine science with the art of improving lives like never before. The scale of the challenge is vast, and the stakes couldn’t be higher. This is what FHI 360 is built for. Take a look at what we’re doing.",
]
const pullquoteContent = {
  title: "QUOTE",
  body:
    "Now as never before, we will be challenged to be creative and work differently ... the vast scope and urgency of this crisis demand nothing less.",
}

const Hero = () => {
  return (
    <HeroContainer bg={theme.colors.lightblue}>
      <FlexWrap maxWidth={1200} mx={"auto"} px={20} pt={[0, 100]}>
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
            <Image
              src={YouAreHere}
              alt={"You are here"}
              className="you-are-here"
              // duration={2}
            ></Image>
            <div className="line">
              <H2 fontSize={14}>
                Patrick Fine
                <br />
                CEO
              </H2>
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
          <PullQuote title={pullquoteContent.title} px={[1, 5]} mb={50}>
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
            <Image
              src={YouAreHere}
              alt={"You are here"}
              className="you-are-here"
              // duration={2}
            ></Image>
            <div className="line">
              <H3 fontWeight={700} fontSize={[14]} lineHeight={"20px"} mt={10}>
                Patrick Fine
                <br />
                CEO
              </H3>
            </div>
          </Box>
          <Box px={[3, 5]} maxWidth={["none", 520]}>
            {introLetter.map((body, i) => {
              return (
                <React.Fragment key={i}>
                  <p>{body}</p>
                  {i == 2 && (
                    <Box display={["block", "none"]}>
                      <PullQuote
                        title={pullquoteContent.title}
                        px={[1, 5]}
                        fontSize={"28px"}
                        streak={Streak2}
                        mb={50}
                      >
                        {pullquoteContent.body}
                      </PullQuote>
                    </Box>
                  )}
                </React.Fragment>
              )
            })}
            <p>Warm regards,</p>
            <Box width={275} mr={"auto"} mb={25}>
              <Image src={Sig}></Image>
            </Box>
            <p>
              Patrick C. Fine
              <br />
              Chief Executive Officer, FHI 360
            </p>
          </Box>
        </Box>
      </FlexWrap>
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

      width: 50vw;

      h2 {
        margin-left: 0;
        transform: translateX(20vw);
      }
    }
  }
`

export default Hero
