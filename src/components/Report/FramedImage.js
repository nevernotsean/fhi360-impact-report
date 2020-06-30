import React from "react"
import styled from "styled-components"
import { Image, Box } from "rebass/styled-components"
import RectangleFrame from "../../assets/svg/rect-frame.svg"
import HandDrawnSVG from "../HandDrawnSVG"

const FramedImage = ({ src, alt, credit = "credit missing", ...props }) => {
  return (
    <Container {...props} my={[50, 100]}>
      <Box sx={{ position: "relative", height: 0, paddingBottom: "61.4%" }}>
        <Image src={src} alt={alt}></Image>
      </Box>
      <Box className="frame">
        <RectangleFrame></RectangleFrame>
        {/* <HandDrawnSVG svg={RectangleFrame}></HandDrawnSVG> */}
      </Box>
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
    top: -12%;
    left: -8%;
    height: auto;
    width: 116%;
    pointer-events: none;
  }

  p {
    font-size: 14px;
    font-weight: 400;
  }
`

export default FramedImage
