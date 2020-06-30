import React from "react"
import WordSections from "./WordSections"
import Collage from "./Collage"
import HandDrawnSVG from "../../components/HandDrawnSVG"

import FHILogoDark from "../../assets/svg/fhi-logo-dark.svg"
import { Box, Flex } from "rebass/styled-components"
import { useInView } from "react-intersection-observer"

const Outro = () => {
  return (
    <>
      <WordSections />
      <Collage />
    </>
  )
}

export default Outro
