import { createGlobalStyle } from "styled-components"
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

  body {
    font-family: ${({ theme }) => theme.fonts.sans};
  }

  .fresnel-container {
    width: 100%;
  }

  /** sections */
  .section-title { 
    font-size: 48px;
    line-height: 52px;

    font-weight: 900;
    margin-bottom: 30px;
  }

  .section-subtitle {
    font-size: 19px; 
    line-height: 24px;
    font-weight: 400;
    margin-bottom: 30px;
  }

  .section-body { 
    font-size: 19px;
    line-height: 24px;

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

  @media screen and (max-width: ${({ theme }) => theme.breakpoints[2]}) {
    .section-title {
      font-size: 3.3vw;
      line-height: 3.6vw;
    }
    .section-body {
      font-size: 1.5vw;
      line-height: 1.75vw;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    .section-title { 
      font-size: 24px; 
      line-height: 28px; 
    }
    .section-subtitle, .section-body { 
      font-size: 14px; 
      line-height: 18px; 
    }
  }

  ${"" /* browserupdate */}
  body .buorg {
    text-align: left;
    width: 300px;
    top: unset;
    bottom: 20px;
    right: 20px;
    left: auto;
    border: none;

    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fonts.sans};
    font-size: 16px;
    line-height: 18px;
    box-shadow: none;
    animation: none;

    .buorg-pad {
      padding: 20px;
    }

    .buorg-mainmsg, .buorg-moremsg {
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 16px;
    }

    #buorgig, #buorgul, #buorgpermanent {
      border-radius: 0px;
      box-shadow: none;
      background: ${({ theme }) => theme.colors.white};
      color:${({ theme }) => theme.colors.black};
      font-weight: 700;
    }

    #buorgig {
      background: none;
      color: ${({ theme }) => theme.colors.white};
    }
}

`

export default GlobalStyles
