import React from "react"
import { Flex, Box } from "reflexbox"
import stripeVert from "../images/pattern-vert.png"
import InViewImage from "../components/InViewImage"

export const SplitSection = ({ image, children, flip, ...props }) => {
  return (
    <Flex minHeight={"100vh"} {...props}>
      {!flip && (
        <SplitSectionImage image={image} scrollSpeed={0}></SplitSectionImage>
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
            marginTop: "25%",
          }}
        />
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
      {flip && (
        <SplitSectionImage image={image} scrollSpeed={0}></SplitSectionImage>
      )}
    </Flex>
  )
}
export const SplitSectionImage = ({ image, ...props }) => (
  <Box width={[1, 1 / 2]}>
    <InViewImage
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
  </Box>
)
export const SplitSectionCroppedImage = ({
  image,
  image2,
  children,
  ...props
}) => {
  return (
    <Flex minHeight={"100vh"} style={{ position: "relative" }}>
      <Flex width={[1, 1 / 2]} justifyContent={"center"} alignItems={"center"}>
        <Box width={[1, 1 / 2]} paddingLeft={"50px"}>
          <InViewImage
            src={image}
            scrollSpeed={1.5}
            imageSeed={1.2}
            style={{
              display: "block",
              maxWidth: "none",
              margin: "0 0 0 auto",
              width: "300px",
              height: "80vh",
              objectFit: "cover",
              objectPosition: "center center",
            }}
          ></InViewImage>
        </Box>
        <Box width={[1, 1 / 2]} marginLeft={"-50px"}>
          <InViewImage
            src={image2}
            scrollSpeed={-0.5}
            imageSeed={3}
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
    </Flex>
  )
}

export const SplitSectionBraveFullscreen = ({ image, children, ...props }) => {
  return (
    <Flex minHeight={"100vh"} style={{ position: "relative" }}>
      <Box
        width={[1, 1]}
        height={"100%"}
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <img
          src={image}
          style={{
            maxWidth: "none",
            marginBottom: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center right",
          }}
        ></img>
      </Box>
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
    </Flex>
  )
}
