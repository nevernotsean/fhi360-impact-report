import styled, { createGlobalStyle } from "styled-components"
import theme from "./index"

const GlobalStyles = createGlobalStyle`
  .primary { color: ${theme.colors.orange}; }

  .secondary { color: ${theme.colors.lightblue}; }

  .offwhite { color: ${theme.colors.offwhite}; }

  .white { color: ${theme.colors.white}; }

  .black { color: ${theme.colors.black}; }

  /* smoothscroll */
  html {
    width: 100vw;
    height: 100vh;
    overflow: auto;
  }

  /** sections */
  .section-title {
    font-size: 68px;
  }

  .section-subtitle {
    font-weight: 300;
  }

  .section-body {
    font-size: 24px;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: 200;
  }

  .serif {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: 200;
  }

  .sans {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: 200;
  }
  /** images */
  .image-credits {
    font-size: 10px;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: 200;
  }
  
`

export default GlobalStyles
