import React from "react"

import { ThemeProvider } from "styled-components"
import { LocomotiveScrollFull } from "../hooks/useLocomotiveScroll"
import theme from "../styles/index"
import { MediaContextProvider } from "./Media"
import { LetterProvider } from "./HeroLetter"

const Providers = props => (
  <ThemeProvider theme={theme}>
    <LocomotiveScrollFull location={props.location}>
      <MediaContextProvider>
        <LetterProvider>{props.children}</LetterProvider>
      </MediaContextProvider>
    </LocomotiveScrollFull>
  </ThemeProvider>
)

export default Providers
