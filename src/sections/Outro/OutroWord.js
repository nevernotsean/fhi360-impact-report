import React from "react"

import { Box, Flex, Image } from "rebass/styled-components"

import strip from "../../images/pattern-strip.png"
import theme from "../../styles/index"
import styled from "styled-components"
import PhotoCredits from "../../components/PhotoCredits"

const BGImage = styled(Image)`
  margin: 0;
  display: block;
  object-fit: cover;
  width: 100vw;
`

const OutroWord = ({
  image,
  imagePosition = "center center",
  alt,
  imageCredits,
  children,
  pattern = strip,
  ...props
}) => {
  return (
    <>
      <Flex
        flexDirection={"column"}
        minHeight={["80vh", "100vh"]}
        alignItems={"center"}
        style={{ background: theme.colors.grey }}
      >
        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          style={{ textAlign: "center" }}
          flex={"1 0 100%"}
          display={"flex"}
        >
          <Box>{children}</Box>
        </Flex>
        <Box height={[28, 45]} style={{ textAlign: "center" }}>
          <img src={pattern} style={{ marginBottom: 0 }}></img>
        </Box>
      </Flex>
      {image && (
        <div style={{ position: "relative" }}>
          <BGImage
            src={image}
            alt={alt || imageCredits}
            sx={{ objectPosition: imagePosition, height: ["80vh", "100vh"] }}
          ></BGImage>
          <PhotoCredits
            credits={imageCredits}
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              color: "white",
              zIndex: 1,
            }}
          ></PhotoCredits>
        </div>
      )}
    </>
  )
}

export default OutroWord
