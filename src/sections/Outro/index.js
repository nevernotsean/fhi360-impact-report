import React from "react"
import WordSections from "./WordSections"
import Collage from "./Collage"
import HandDrawnSVG from "../../components/HandDrawnSVG"

import ThisIsFHI from "../../assets/svg/this-is-fhi.svg"
import FHILogoDark from "../../assets/svg/fhi-logo-dark.svg"
import FlexSectionContainer from "../../components/FlexSectionContainer"
import { Box, Flex } from "rebass/styled-components"
import { useInView } from "react-intersection-observer"

const Outro = () => {
  const [ref, InView] = useInView({
    threshold: 0,
  })

  return (
    <>
      <WordSections />
      <Collage />
      <FlexSectionContainer minHeight={"100vh"} justifyContent={"center"}>
        <div ref={ref}></div>
        <Flex
          width={1}
          maxWidth={600}
          mx={"auto"}
          flexDirection="column"
          justifyContent={"center"}
          sx={{ position: "relative" }}
        >
          <Box
            sx={{
              opacity: !InView ? 1 : 0,
              transition: "opacity .5s linear 3s",
            }}
          >
            <HandDrawnSVG svg={ThisIsFHI} delay2={1}></HandDrawnSVG>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              opacity: InView ? 1 : 0,
              transition: "opacity .5s linear 3s",
            }}
            width={300}
          >
            <FHILogoDark></FHILogoDark>
          </Box>
        </Flex>
      </FlexSectionContainer>
    </>
  )
}

export default Outro
