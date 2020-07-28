import React, { useMemo } from "react"
import { Flex, Box, Image } from "rebass/styled-components"
import stripeVert from "../images/pattern-vert.png"
import InViewImage from "../components/InViewImage"
import { FlexWrap } from "../elements/Flex"
import shortid from "shortid"
import { useInView } from "react-intersection-observer"
import PhotoCredits from "./PhotoCredits"
import Media from "./Media"

const SplitSectionImage = ({
  image,
  // hideImageOnMobile,
  width = [1, 1 / 2],
  height = "100vh",
  flip,
  ...props
}) => (
  <Box width={width} height={["auto", "100%"]} sx={{ position: "relative" }}>
    <InViewImage
      imageCredits
      src={image}
      scrollSpeed={1}
      imageSpeed={1.5}
      style={{
        width: "100%",
        height: height,
        objectFit: "cover",
        objectPosition: "center center",
        marginBottom: 0,
      }}
      {...props}
    ></InViewImage>
  </Box>
)

export const SplitSection = ({
  image,
  children,
  flip,
  imageCredits = "CREDITS MISSING",
  hideImageOnMobile,
  pattern = stripeVert,
  height = "100vh",
  ...props
}) => {
  return (
    <FlexWrap minHeight={"100vh"} {...props}>
      {!hideImageOnMobile && ( // mobile image
        <Media at={"sm"}>
          <SplitSectionImage
            image={image}
            scrollSpeed={0}
            flip={flip}
            height={"50vh"}
          ></SplitSectionImage>
          <PhotoCredits
            credits={imageCredits}
            sx={{ alignSelf: "start" }}
          ></PhotoCredits>
        </Media>
      )}
      {flip && ( // flipped, for desktop
        <Media greaterThanOrEqual={"md"}>
          <SplitSectionImage
            image={image}
            scrollSpeed={0}
            flip={flip}
            height={"50vh"}
          ></SplitSectionImage>
        </Media>
      )}
      <Box
        width={[1, 1 / 2]}
        style={{ position: "relative", marginLeft: "auto" }}
      >
        <Media greaterThanOrEqual="md">
          <img
            data-scroll
            data-scroll-speed={1.2}
            src={pattern}
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
        </Media>

        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          height={["auto", "auto", "100vh"]}
          pr={[15, 30]}
          pl={[15, 60]}
          py={[50, 0]}
          maxWidth={600}
          mx={"auto"}
        >
          {children}
        </Flex>
        {
          // credits for desktop
          <Media greaterThanOrEqual={"md"}>
            <PhotoCredits
              credits={imageCredits}
              sx={{ position: "absolute", zIndex: 2, bottom: 0, left: 0 }}
            ></PhotoCredits>
          </Media>
        }
      </Box>
      {!flip && ( // non flipped for desktop
        <Media greaterThanOrEqual={"md"}>
          <SplitSectionImage
            image={image}
            scrollSpeed={0}
            flip={flip}
          ></SplitSectionImage>
        </Media>
      )}
    </FlexWrap>
  )
}

export const SplitSectionCroppedImage = ({
  image,
  imageCredits,
  alt = "",
  children,
  flip,
  minHeight,
  pattern = stripeVert,
  alignImageMobile = "center center",
  hideImageOnMobile,
  ...props
}) => {
  return (
    <Flex
      minHeight={["unset", "unset", "100vh"]}
      className={"cropped-image-section"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      style={{ position: "relative" }}
      py={[25, 100, 0]}
      overflowX={["hidden", "auto"]}
      {...props}
    >
      <FlexWrap width={1}>
        {flip && ( // flipped for desktop
          <Box
            width={[1, 1 / 2]}
            flex={"1 0 auto"}
            mr={"auto"}
            style={{ position: "relative", zIndex: 1 }}
          >
            <Media greaterThanOrEqual={"md"}>
              <Flex
                flexDirection={"column"}
                justifyContent={"center"}
                height={["auto", "auto", "100vh"]}
                pr={[15, 30]}
                pl={[15, 60]}
                maxWidth={600}
                mx={"auto"}
              >
                {children}
              </Flex>
            </Media>
          </Box>
        )}
        {
          // desktop image
        }

        <Flex
          width={[1, 1 / 2]}
          flex={"1 0 auto"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box
            width={[1]}
            style={{ position: "relative" }}
            pr={[0, flip ? "10vh" : "inherit"]}
            pl={[0, !flip ? "10vh" : "inherit"]}
            display={[hideImageOnMobile ? "none" : "block", "block"]}
          >
            <InViewImage
              alt={alt}
              src={image}
              scrollSpeed={-0.5}
              imageSpeed={1}
              usePattern={flip}
              height={["auto", "50vh", "80vh"]}
              maxHeight={["50vh", "50vh", "80vh"]}
              sx={{
                display: "block",
                maxWidth: "none",
                width: "100%",
                objectFit: "cover",
                objectPosition: [alignImageMobile, "center center"],
                marginLeft: !flip && "auto !important",
                marginRight: flip && "auto  !important",
              }}
            ></InViewImage>
          </Box>
        </Flex>
        {
          // credits for mobile
        }
        <Media at={"sm"}>
          <PhotoCredits
            credits={imageCredits}
            sx={{ alignSelf: "start" }}
          ></PhotoCredits>
        </Media>
        {!flip && ( // flipped content for desktop
          <Box
            width={[1, 1 / 2]}
            ml={"auto"}
            style={{ position: "relative", zIndex: 1 }}
            pt={[50, 0]}
          >
            <Media greaterThanOrEqual={"md"}>
              <img
                data-scroll
                data-scroll-speed={1.2}
                src={pattern}
                alt="pattern"
                style={{
                  position: "absolute",
                  left: flip ? undefined : 0,
                  right: !flip ? undefined : 0,
                  height: "616px",
                  width: "23px",
                  marginTop: "-313px",
                  top: "50%",
                }}
              />
              <Flex
                flexDirection={"column"}
                justifyContent={"center"}
                height={["auto", "auto", "100vh"]}
                pr={[15, 30]}
                pl={[15, 60]}
                maxWidth={600}
                mx={"auto"}
              >
                {children}
              </Flex>
            </Media>
          </Box>
        )}
        {
          // mobile content
          <Media at={"sm"}>
            <Box
              width={[1, 1 / 2]}
              ml={"auto"}
              style={{ position: "relative", zIndex: 1 }}
              pt={[50, 0]}
            >
              <Flex
                flexDirection={"column"}
                justifyContent={"center"}
                height={["auto", "auto", "100vh"]}
                pr={[15, 30]}
                pl={[15, 60]}
                maxWidth={600}
                mx={"auto"}
              >
                {children}
              </Flex>
            </Box>
          </Media>
        }
      </FlexWrap>
      {/* // credits on desktop */}
      <Media greaterThanOrEqual={"md"}>
        <PhotoCredits
          credits={imageCredits}
          sx={{
            position: "absolute",
            zIndex: 2,
            bottom: 0,
            left: 0,
          }}
        ></PhotoCredits>
      </Media>
    </Flex>
  )
}
