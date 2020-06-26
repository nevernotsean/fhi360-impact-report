import React from "react"
import styled from "styled-components"
import { Image, Box } from "rebass/styled-components"
import RectangleFrame from "../../assets/svg/rect-frame.svg"
import HandDrawnSVG from "../HandDrawnSVG"

const FramedImage = ({ src, alt, credit = "credit missing", ...props }) => {
  return (
    <Container {...props} my={[50, 100]}>
      <Image src={src} alt={alt}></Image>
      <Box className="frame">
        <RectangleFrame></RectangleFrame>
        {/* <HandDrawnSVG svg={RectangleFrame}></HandDrawnSVG> */}
      </Box>
      <Box mt={30} ml={[50]}>
        <p>Credit: {credit}</p>
      </Box>
    </Container>
  )
}

const Container = styled(Box)`
  position: relative;

  .frame {
    position: absolute;
    top: -12%;
    left: -8%;
    height: auto;
    width: 116%;
    pointer-events: none;
  }

  p {
    font-weight: 700;
  }
`

export default FramedImage
