import React from "react"

import { ThemeProvider } from "styled-components"
import { LocomotiveScrollFull } from "../hooks/useLocomotiveScroll"
import theme from "../styles/index"

const Providers = props => (
  <ThemeProvider theme={theme}>
    <LocomotiveScrollFull>{props.children}</LocomotiveScrollFull>
  </ThemeProvider>
)

export default Providers
