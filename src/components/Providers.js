import React from "react"

import { ThemeProvider } from "styled-components"
import { LocomotiveScrollFull } from "../hooks/useLocomotiveScroll"
import theme from "../styles/index"
import { MediaContextProvider } from "./Media"

const Providers = props => (
  <ThemeProvider theme={theme}>
    <LocomotiveScrollFull>
      <MediaContextProvider>{props.children} </MediaContextProvider>
    </LocomotiveScrollFull>
  </ThemeProvider>
)

export default Providers
