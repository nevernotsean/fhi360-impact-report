import React from "react"
import Masthead from "./Masthead"
import { Image, Box } from 'rebass/styled-components';
import styled from 'styled-components';

const HeroImageMasthead = ({ headline, image }) => {

  return (
    <HeroMastheadContainer>
      <Box className="hero-masthead">
        <Masthead headline={headline} minHeight={["none", "80vh"]}>
          <span className="photo-credit">Credit: Jessica Scranton/FHI 360</span>
        </Masthead>
      </Box>
      <Image src={image} className="hero-image"></Image>
    </HeroMastheadContainer>
  )
}

const HeroMastheadContainer = styled(Box)`
  position: relative;

  .hero-masthead {
    position: relative;
    z-index: 1;

    .hr { border-bottom: 1px solid white; }
    h2 { color: white; }


      @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {    
        .masthead-inner {
          justify-content: flex-end;
          padding-bottom: 150px;    
        }
      }

      .masthead-inner {
        position: relative;

        .photo-credit {
          position: absolute;
          bottom: -20px;
          right: unset;
          left: 20px;

          @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {  
            bottom: -40px;  
            right: 50px;
            left: unset;
          }

          font-size: 10px;
        }
      }
  }

  .hero-image {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`

export default HeroImageMasthead;