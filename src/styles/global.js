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

    ${({ bg }) => bg && `background: ${bg};`}
  }

  /** sections */
  .section-title {
    font-weight: 900;
    margin-bottom: 30px;
  }

  .section-subtitle {
    font-weight: 400;
    margin-bottom: 30px;
  }

  .section-body {
    font-size: 24px;
    line-height: 30px;
    font-family: ${({ theme }) => theme.fonts.sans};
    font-weight: 400;
  }

  span.section-body {
    display: inline-block;
    margin-bottom: 1.45rem;
  }

  .serif {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-weight: 400;
  }

  .sans {
    font-family: ${({ theme }) => theme.fonts.sans};
    font-weight: 200;
  }
  /** images */
  .image-credits {
    font-size: 10px;
    font-family: ${({ theme }) => theme.fonts.sans};
    font-weight: 200;
  }


  h1,h2,h3,h4,h5,h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 900;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.sans};
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
  }
  
`

export default GlobalStyles
