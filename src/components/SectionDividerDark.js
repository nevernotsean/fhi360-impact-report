import React from "react"
import styled from "styled-components"
import { Flex, Box } from "rebass/styled-components"
import HandDrawnSVG from "./HandDrawnSVG"
import Image from "./image"

const SectionDividerDark = ({
  svg,
  img,
  duration = 2,
  duration2 = 1,
  alt,
  overrideLength,
  children,
  maxWidth = 1000,
  sx,
  ...props
}) => {
  return (
    <>
      <Container>
        <Box
          width={1}
          maxWidth={maxWidth}
          mx={"auto"}
          py={"10vw"}
          sx={{
            position: "relative",
            ...sx,
          }}
          {...props}
        >
          {children}
          {svg && (
            <HandDrawnSVG
              svg={svg}
              duration={duration}
              duration2={duration2}
              delay={0.5}
              overrideLength={overrideLength}
            ></HandDrawnSVG>
          )}
          {img && (
            <Image
              alt={alt}
              src={img}
              width={1}
              data-scroll
              data-scroll-speed={1.5}
              darkSection={true}
            ></Image>
          )}
        </Box>
      </Container>
    </>
  )
}

const Container = styled(Flex)`
  min-height: 100vh;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    min-height: 100vw;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};

  svg .animate,
  svg .animate2,
  svg .animate3,
  svg .animate4 {
    stroke: rgba(255, 255, 255, 0.9) !important;
  }

  h2 {
    text-align: center;
    position: absolute;
    width: 100%;
    max-width: 800px;
    transform: translateX(-50%);
    left: 50%;
    top: 5vw;
    line-height: 1;
  }
`

export default SectionDividerDark
