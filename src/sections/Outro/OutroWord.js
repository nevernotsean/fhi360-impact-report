import React from "react"

import { Box, Flex } from "rebass/styled-components"

import strip from "../../images/pattern-strip.png"
import theme from "../../styles/index"
import styled from "styled-components"

const BGImage = styled.img`
  margin: 0;
  display: block;
  object-fit: cover;
  object-position: center center;
  height: 100vh;
  width: 100vw;
`

const OutroWord = ({ image, alt, imageCredits, children, ...props }) => {
  return (
    <>
      <Flex
        flexDirection={"column"}
        minHeight={"100vh"}
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
        <Box height={45} style={{ textAlign: "center" }}>
          <img src={strip}></img>
        </Box>
      </Flex>
      {image && (
        <div>
          <BGImage src={image} alt={alt || imageCredits}></BGImage>
        </div>
      )}
    </>
  )
}

export default OutroWord
