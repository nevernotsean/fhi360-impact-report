import React, { useMemo } from "react"
import { Flex, Box, Image } from "rebass/styled-components"
import stripeVert from "../images/pattern-vert.png"
import InViewImage from "../components/InViewImage"
import FlexSectionContainer from "./FlexSectionContainer"
import styled from "styled-components"
import { FlexWrap } from "../elements/Flex"
import shortid from "shortid"
import theme from "../styles/index"

const SplitSectionImage = ({
  image,
  imageCredits,
  hideImageOnMobile,
  width = [1, 1 / 2],
  flip,
  ...props
}) => (
  <SplitImageContainer width={width} hideImageOnMobile={hideImageOnMobile}>
    <InViewImage
      imageCredits
      src={image}
      scrollSpeed={1}
      imageSpeed={1.5}
      style={{
        width: "100%",
        height: "100vh",
        objectFit: "cover",
        objectPosition: "center center",
        marginBottom: 0,
      }}
      {...props}
    ></InViewImage>
    <Box
      width={2 / 3}
      sx={{
        height: "25px",
        background: "black",
        position: "absolute",
        right: flip ? 0 : undefined,
        left: flip ? undefined : 0,
        bottom: -1,
        zIndex: 999,
      }}
    ></Box>
  </SplitImageContainer>
)

const SplitImageContainer = styled(Box)`
  position: relative;
  ${({ hideImageOnMobile }) =>
    hideImageOnMobile &&
    `
      @media screen and (max-width: 1024px) {
        display: none;
      }
  `}
`

export const SplitSection = ({
  image,
  children,
  flip,
  imageCredits,
  hideImageOnMobile,
  ...props
}) => {
  return (
    <FlexWrap minHeight={"100vh"} {...props}>
      {!flip && (
        <SplitSectionImage
          image={image}
          imageCredits={imageCredits}
          scrollSpeed={0}
          hideImageOnMobile={hideImageOnMobile}
          flip={flip}
        ></SplitSectionImage>
      )}
      <Box
        width={[1, 1 / 2]}
        style={{ position: "relative", marginLeft: "auto" }}
      >
        <img
          data-scroll
          data-scroll-speed={1.2}
          src={stripeVert}
          alt="pattern"
          style={{
            position: "absolute",
            left: flip ? undefined : 0,
            right: !flip ? undefined : 0,
            height: "616px",
            width: "23px",
            marginTop: "1.45rem",
          }}
        />

        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          height={"100vh"}
          pr={[15, 30]}
          pl={[15, 60]}
          maxWidth={600}
          mx={"auto"}
        >
          {children}
        </Flex>
      </Box>
      {flip && (
        <SplitSectionImage
          image={image}
          imageCredits={imageCredits}
          scrollSpeed={0}
          hideImageOnMobile={hideImageOnMobile}
          flip={flip}
        ></SplitSectionImage>
      )}
    </FlexWrap>
  )
}

export const SplitSectionCroppedImage = ({
  image,
  image2,
  children,
  flip,
  minHeight,
  ...props
}) => {
  return (
    <Flex
      minHeight={"100vh"}
      className={"cropped-image-section"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <FlexWrap style={{ position: "relative" }} maxWidth={1200}>
        {flip && (
          <Box
            width={[1, 1 / 2]}
            mr={"auto"}
            style={{ position: "relative", zIndex: 1 }}
          >
            <Flex
              flexDirection={"column"}
              justifyContent={"center"}
              height={"100%"}
              pr={[15, 30]}
              pl={[15, 60]}
            >
              {children}
            </Flex>
          </Box>
        )}
        <Flex
          width={[1, 1 / 2]}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box
            width={[1, 1 / 2]}
            style={{ margin: "0 0 0 auto", width: "300px" }}
          >
            <InViewImage
              src={image}
              scrollSpeed={1.5}
              imageSpeed={0.8}
              style={{
                display: "block",
                maxWidth: "none",
                maxHeight: "500px",
                height: "80vh",
                objectFit: "cover",
                objectPosition: "center center",
              }}
            ></InViewImage>
          </Box>

          <Box width={[1, 1 / 2]} ml={-50}>
            <InViewImage
              src={image2}
              scrollSpeed={-0.5}
              imageSpeed={1}
              style={{
                display: "block",
                maxWidth: "none",
                margin: "0 auto 0 0",
                width: "300px",
                height: "250px",
                objectFit: "cover",
                objectPosition: "center center",
              }}
            ></InViewImage>
          </Box>
        </Flex>
        {!flip && (
          <Box
            width={[1, 1 / 2]}
            ml={"auto"}
            style={{ position: "relative", zIndex: 1 }}
          >
            <Flex
              flexDirection={"column"}
              justifyContent={"center"}
              height={"100%"}
              pr={[15, 30]}
              pl={[15, 60]}
            >
              {children}
            </Flex>
          </Box>
        )}
      </FlexWrap>
    </Flex>
  )
}

export const SplitSectionLong = ({
  image,
  children,
  flip,
  imageCredits,
  hideImageOnMobile,
  minHeight,
  ...props
}) => {
  const id = useMemo(() => shortid())

  return (
    <Flex
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      minHeight={"200vh"}
      {...props}
      className={`sticky-section-${id}`}
    >
      <Box
        width={1}
        data-scroll
        data-scroll-sticky
        data-scroll-target={`.sticky-section-${id}`}
        sx={{ position: "relative" }}
      >
        <Image
          mr={!flip && "auto"}
          ml={flip && "auto"}
          width={[1, 1 / 2]}
          mb={0}
          sx={{
            height: "100vh",
            objectFit: "cover",
            objectPosition: "center center",
            display: hideImageOnMobile ? ["none", "block"] : "block",
          }}
          src={image}
        ></Image>
        <Box
          width={1 / 3}
          sx={{
            height: "25px",
            background: theme.colors.black,
            position: "absolute",
            right: flip ? 0 : undefined,
            left: flip ? undefined : 0,
            bottom: -1,
            zIndex: 999,
          }}
        ></Box>
      </Box>
      <FlexColumn
        width={[1, 1 / 2]}
        ml={!flip && "auto"}
        mr={flip && "auto"}
        style={{ position: "relative" }}
      >
        <img
          data-scroll
          data-scroll-speed={1.2}
          src={stripeVert}
          alt="pattern"
          style={{
            position: "absolute",
            left: flip ? undefined : 0,
            right: !flip ? undefined : 0,
            height: "616px",
            width: "23px",
            marginTop: "1.45rem",
          }}
        />

        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          pr={[15, 30]}
          pl={[15, 60]}
          maxWidth={600}
          mx={"auto"}
          mb={[0, "50vh"]}
        >
          {children}
        </Flex>
      </FlexColumn>
    </Flex>
  )
}

const FlexColumn = props => (
  <Flex
    width={1}
    style={{ position: "relative" }}
    flexDirection={"column"}
    {...props}
  ></Flex>
)

const PhotoCredits = ({ credit, ...props }) => {
  const [isOpen, setIsOpen] = React.useState()

  return (
    <PhotoCreditsContainer isOpen={isOpen}>
      <span className={"button"} onClick={() => setIsOpen(!isOpen)}>
        Photo Credits
      </span>
      <p className={"credit"}>: {credit}</p>
    </PhotoCreditsContainer>
  )
}

const PhotoCreditsContainer = styled(Box)`
  span,
  p {
    font-size: 12px;
  }
  .credit {
    opacity: 0;
    transition: opacity 300ms linear;
    ${({ isOpen }) => isOpen && `opacity: 1;`}
  }
`
