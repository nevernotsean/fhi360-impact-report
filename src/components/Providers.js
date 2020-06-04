import React from "react"

import { ThemeProvider } from "styled-components"
import theme from "../styles/index"

const Providers = props => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
)

export default Providers
