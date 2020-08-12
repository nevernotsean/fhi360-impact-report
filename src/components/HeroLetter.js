import React from "react"
import PatrickAvatar from "../images/patrick-avatar.jpg"

import styled from "styled-components"
import { Flex, Box } from "rebass/styled-components"
import CloseSVG from "../assets/svg/close-button.svg"
import { H3, Lead } from "./../elements/Type"
import Sig from "../images/sig.png"
import { Image } from "rebass/styled-components"

const HeroLetter = ({ ...props }) => {
  const { letterOpen, setLetterOpen } = React.useContext(LetterContext)

  return (
    <Container isOpen={letterOpen}>
      <div className="background" onClick={() => setLetterOpen(false)}></div>
      <Flex
        flexDirection={"column"}
        alignItems={"flex-end"}
        id="hero-letter"
        px={60}
        pb={60}
      >
        <Flex
          justifyContent={"flex-end"}
          width={1}
          pt={[15, 35]}
          pb={[15, 50, 50, 50]}
          alignItems="center"
        >
          <Box display={["none", "block"]}>
            <Flex
              className={"closeButton"}
              onClick={() => setLetterOpen(false)}
            >
              <H3 fontSize={14} letterSpacing={4}>
                CLOSE
              </H3>
              <Box width={25} ml={20}>
                <CloseSVG></CloseSVG>
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Box px={[0, 60]}>
          <Box width={1} textAlign={["center", "left"]}>
            <Image
              width={[60, 120]}
              ml={[0, -60]}
              src={PatrickAvatar}
              alt={"Patrick Fine"}
            />
          </Box>
          <Box
            px={[0, 25]}
            py={20}
            sx={{ borderLeft: ["none", "1px solid grey"] }}
          >
            {introLetter.map((body, i) => (
              <p key={i}>{body}</p>
            ))}
            <p>Warm regards,</p>
          </Box>
          <Image
            width={275}
            mr={"auto"}
            mb={-10}
            ml={-20}
            mt={-35}
            src={Sig}
            alt={"patrick fine"}
          ></Image>
          <p className={"bold"}>Patrick C. Fine</p>
          <p className={"light"}>Chief Executive Officer, FHI 360</p>
        </Box>
        <Box display={["flex", "none"]} alignSelf={"center"}>
          <Flex
            className={"closeButton"}
            flexDirection={"column"}
            alignItems={"center"}
            onClick={() => setLetterOpen(false)}
            my={50}
          >
            <H3 fontSize={14} letterSpacing={4} mb={10}>
              CLOSE
            </H3>
            <Box width={25}>
              <CloseSVG></CloseSVG>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Container>
  )
}

const Container = styled(Box)`
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;

  z-index: 9997;

  ${({ isOpen }) => !isOpen && `opacity: 0; pointer-events: none;`}

  transition: opacity 300ms linear;

  max-width: 100vw;
  max-height: 100vh;
  overflow-y: auto;

  .background {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    z-index: 9998;
    background: rgba(0, 0, 0, 0.2);
  }

  .closeButton {
    cursor: pointer;
    user-select: none;

    &:active,
    &:focus {
      background: none;
      outline: none;
    }

    * {
      &:active,
      &:focus {
        background: none;
        outline: none;
      }
    }
  }

  #hero-letter {
    overflow: auto;
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    max-width: 1000px;
    width: 80vw;
    height: 100vh;
    background: rgba(255, 255, 255, 1);
    z-index: 9999;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints[0]}) {
      max-width: 90vw;
      padding-right: 20px;
      padding-left: 20px;
    }
  }

  p.bold {
    text-transform: uppercase;
    color: black;
    margin-bottom: 0;
    font-weight: 700;
    font-size: 16px;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints[0]}) {
      font-size: 12px;
      line-height: 1;
    }
  }
  p.light {
    color: grey;
    margin-bottom: 0;
    font-weight: 700;
    font-size: 16px;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints[0]}) {
      font-size: 12px;
      line-height: 1;
    }
  }
`

const introLetter = [
  "Dear friends and colleagues,",

  "Thanks for visiting! We are delighted to share with you who we are, what we do and where we work. Whether you are just learning about FHI 360 or have worked with us before, you may be surprised by what you see.",

  "As we entered 2020, none of us could have imagined how our world would be upended by COVID-19. What started as a public health emergency has become a global crisis that has exposed and exacerbated systemic inequalities in many of our communities. The social and economic aftershocks will be with us for years to come.",

  "Now as never before, we will be challenged to be creative and work differently. And because we are stronger and more effective when we work together, this is a time to marshal our collective strengths — the vast scope and urgency of this crisis demand nothing less.",

  "Today, more than ever, we find ourselves called to deliver on our mission to combine science with the art of improving lives. The scale of the challenge is vast, and the stakes couldn’t be higher. This is what FHI 360 is built for.",
]

export const LetterContext = React.createContext({
  letterOpen: false,
  setLetterOpen: () => {},
})

export const LetterProvider = props => {
  const [letterOpen, setLetterOpen] = React.useState(false)

  return (
    <LetterContext.Provider
      {...props}
      value={{
        letterOpen,
        setLetterOpen,
      }}
    />
  )
}

export const HeroLetterOpen = props => {
  const { setLetterOpen } = React.useContext(LetterContext)
  return <HeroButton onClick={() => setLetterOpen(true)} {...props} />
}
export const HeroButton = styled.button`
  background: ${({ theme }) => theme.colors.black};
  background: #000;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.sans};
  border: none;
  border-radius: 0;

  box-shadow: none;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.1rem;
  font-weight: 900;
  padding: 1rem;

  &:focus,
  &:active {
    outline: none;
  }

  cursor: pointer;
`

export default HeroLetter
