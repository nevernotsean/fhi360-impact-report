import React from "react"
import styled from "styled-components"
import { Box, Image as Img } from "rebass/styled-components"
import RectangleFrame from "../../images/rect-frame.png"
import Image from "../image"

const FramedImage = ({ src, alt, credit = "credit missing", ...props }) => {
  return (
    <Container {...props} my={[50, 100]}>
      <Box sx={{ position: "relative", height: 0, paddingBottom: "61.4%" }}>
        <Image src={src} alt={alt} fadeIn={500}></Image>
      </Box>
      <Img src={RectangleFrame} className="frame"></Img>
      <Box mt={30} ml={[50]}>
        <p>Photo Credit: {credit}</p>
      </Box>
    </Container>
  )
}

const Container = styled(Box)`
  position: relative;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    object-position: center center;
  }

  .frame {
    position: absolute;
    top: -17%;
    left: -13%;
    height: auto;
    width: 125%;
    max-width: none;
    pointer-events: none;

    @media only screen and (max-width: ${({ theme }) => theme.breakpoints[0]}) {
      top: -15%;
    }
  }

  p {
    font-size: 14px;
    font-weight: 400;
  }
`

export default FramedImage
