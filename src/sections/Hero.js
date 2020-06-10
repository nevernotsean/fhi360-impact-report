import React from "react"
import YouAreHere from "../assets/svg/you-are-here.svg"
import Sig from "../assets/svg/sig.svg"
import { Flex, Box } from "reflexbox"
import styled from "styled-components"
import theme from "../styles/index"
import HandDrawnSVG from "../components/HandDrawnSVG"

// img
import hero from "../images/patrick-fine-hero.png"
import strip from "../images/pattern-strip.png"
import PullQuote from "../components/PullQuote"
import { Lead } from "../components/Typography"
import InViewImage from "../components/InViewImage"

const Hero = () => {
  return (
    <HeroContainer bg={theme.colors.lightblue} pt={100}>
      <Flex maxWidth={1200} mx={"auto"} px={20}>
        <Box width={[1, 1 / 2]}>
          <InViewImage
            src={hero}
            className="hero-image"
            scrollSpeed={0}
            imageSpeed={1.5}
            style={{ marginTop: "50px" }}
            revealSpeed={0}
          ></InViewImage>
          <img src={strip} className="strip"></img>
          <PullQuote title={"LOREM IPSUM"} px={[1, 5]}>
            pull quote lorem ipsum changing fpo lorem ipsum human engagement
            placeholder only.
          </PullQuote>
        </Box>
        <Box width={[1, 1 / 2]}>
          <div className="lockup">
            <Lead style={{ marginBottom: "35px" }}>Welcome</Lead>
            <h1 className="title">
              We are so
              <br />
              very glad
              <span className="hidden">you are here</span>
            </h1>
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
          </div>
          <Box px={5} maxWidth={520}>
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
      </Flex>
      <Box bg={"black"} width={[1 / 4]} height={20} ml={"auto"}></Box>
    </HeroContainer>
  )
}

const HeroContainer = styled(Box)`
  .hero-image {
    margin-bottom: 0;
    display: block;
    width: 100%;
  }

  .strip {
    transform: translateY(-100%);
    width: 100%;
  }

  .lockup {
    position: relative;
    margin-top: 40px;
    min-height: 500px;

    .title {
      font-size: 88px;
      line-height: 82px;
      font-weight: 900;
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
`

export default Hero
