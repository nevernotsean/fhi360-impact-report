import React from "react"
import styled from "styled-components"
import { Image, Box } from "rebass/styled-components"
import RectangleFrame from "../../assets/svg/rect-frame.svg"
import HandDrawnSVG from "../HandDrawnSVG"

const FramedImage = ({ src, alt, ...props }) => {
  return (
    <Container {...props} my={[50, 100]}>
      <Image src={src} alt={alt}></Image>
      <Box className="frame">
        <HandDrawnSVG svg={RectangleFrame}></HandDrawnSVG>
      </Box>
    </Container>
  )
}

const Container = styled(Box)`
  position: relative;

  .frame {
    position: absolute;
    top: -15%;
    left: -4%;
    height: auto;
    width: 110%;
  }
`

export default FramedImage
