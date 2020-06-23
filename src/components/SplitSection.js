import React from "react"
import { Flex, Box } from "rebass/styled-components"
import stripeVert from "../images/pattern-vert.png"
import InViewImage from "../components/InViewImage"
import FlexSectionContainer from "./FlexSectionContainer"
import styled from "styled-components"
import { FlexWrap } from "../elements/Flex"

const SplitSectionImage = ({
  image,
  imageCredits,
  hideImageOnMobile,
  ...props
}) => (
  <SplitImageContainer width={[1, 1 / 2]} hideImageOnMobile={hideImageOnMobile}>
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
  </SplitImageContainer>
)

const SplitImageContainer = styled(Box)`
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
  ...props
}) => {
  return (
    <FlexSectionContainer minHeight={"100vh"}>
      <FlexWrap style={{ position: "relative" }}>
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
    </FlexSectionContainer>
  )
}

// export const SplitSectionLong = ({
//   image,
//   children,
//   imageCredits,
//   hideImageOnMobile,
//   ...props
// }) => {
//   return (
//     <FlexWrap minHeight={"100vh"} {...props}>
//       <SplitSectionImage
//         image={}
//         imageCredits={imageCredits}
//         scrollSpeed={0}
//         hideImageOnMobile={hideImageOnMobile}
//       ></SplitSectionImage>
//       <Box
//         width={[1, 1 / 2]}
//         style={{ position: "relative", marginLeft: "auto" }}
//       >
//         <img
//           data-scroll
//           data-scroll-speed={1.2}
//           src={stripeVert}
//           alt="pattern"
//           style={{
//             position: "absolute",
//             right: 0,
//             height: "616px",
//             width: "23px",
//             marginTop: "25vh",
//           }}
//         />

//         <Flex
//           flexDirection={"column"}
//           justifyContent={"center"}
//           height={"100vh"}
//           pr={[15, 30]}
//           pl={[15, 60]}
//           maxWidth={600}
//           mx={"auto"}
//         >
//           {children}
//         </Flex>
//       </Box>
//     </FlexWrap>
//   )
// }
