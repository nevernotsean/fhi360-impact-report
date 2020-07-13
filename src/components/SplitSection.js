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
  <Box width={width} height={"100%"} sx={{ position: "relative" }}>
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
          height={["auto", "100vh"]}
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
      minHeight={["unset", "100vh"]}
      className={"cropped-image-section"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      style={{ position: "relative" }}
      pb={[50, 0]}
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
                height={["auto", "100vh"]}
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
          minHeight={["60vh", "unset"]}
        >
          <Box
            width={[1]}
            style={{ position: "relative" }}
            pr={[0, flip ? "10vh" : "inherit"]}
            pl={[0, !flip ? "10vh" : "inherit"]}
            display={[hideImageOnMobile ? "none" : "block", "block"]}
          >
            <InViewImage
              src={image}
              scrollSpeed={-0.5}
              imageSpeed={1}
              usePattern={flip}
              maxHeight={"80vh"}
              sx={{
                display: "block",
                maxWidth: "none",
                width: "100%",
                height: "80vh",
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
                height={["auto", "100vh"]}
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
                height={["auto", "100vh"]}
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
      {!hideImageOnMobile && ( // credits on desktop
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
      )}
    </Flex>
  )
}

// export const SplitSectionLong = ({
//   children,
//   contentArray = [
//     { image: null, imageCredits: null, content: null, mobileContent: null },
//   ],
//   pattern = stripeVert,
//   ...props
// }) => {
//   const id = useMemo(() => shortid())
//   const [activeSection, setActive] = React.useState(0)
//   const total = contentArray.length

//   return (
//     <>
//       <Media at={"sm"}>
//         <SplitSection
//           {...props}
//           image={contentArray[0].image}
//           imageCredits={contentArray[0].imageCredits}
//         >
//           {contentArray.map(
//             ({ mobileContent: Content, content, ...contentProps }, i) => (
//               <Content
//                 key={i}
//                 hideImageOnMobile={i !== 0}
//                 {...contentProps}
//               ></Content>
//             )
//           )}
//         </SplitSection>
//       </Media>
//       <Media greaterThanOrEqual={"md"}>
//         <Box
//           height={`${total + 1}00vh`}
//           id={`fixedScroll-${id}`}
//           sx={{ position: "relative" }}
//         >
//           <Box>
//             {contentArray.map(({ content: Content, ...contentProps }, i) => (
//               <SplitSectionLongInner
//                 key={i}
//                 className={"long-section-inner"}
//                 target={`#fixedScroll-${id}`}
//                 index={i}
//                 total={total}
//                 setActive={setActive}
//                 activeIndex={activeSection}
//                 {...props}
//                 {...contentProps}
//               >
//                 <Content></Content>
//               </SplitSectionLongInner>
//             ))}
//           </Box>
//         </Box>
//       </Media>
//     </>
//   )
// }

// const SplitSectionLongInner = ({
//   children,
//   flip,
//   imageCredits,
//   hideImageOnMobile,
//   minHeight,
//   image,
//   target,
//   index,
//   total,
//   height,
//   setActive,
//   ...props
// }) => {
//   const [ref, isInview] = useInView({
//     rootMargin: "0px 0px -100% 0px",
//     threshold: 0,
//   })

//   React.useEffect(() => {
//     if (isInview) {
//       setActive(index)
//     }
//   }, [isInview])

//   return (
//     <>
//       <Box
//         className={"inview-trigger"}
//         height={`${(total - index + 1) * 100}vh`}
//         width={1}
//         ref={ref}
//         sx={{
//           position: "absolute",
//           top: 0,
//           transform: `translateY(${index * 100}vh)`,
//         }}
//       ></Box>
//       <FlexWrap
//         data-scroll
//         data-scroll-sticky
//         data-scroll-target={target}
//         minHeight={["unset", "100vh"]}
//         height={height}
//         width={1}
//         {...props}
//         sx={{
//           background: "white",
//           position: "absolute",
//           zIndex: index,
//           top: 0,
//           left: 0,
//           opacity: index == 0 || isInview ? 1 : 0,
//           transition: "opacity .3s linear",
//         }}
//       >
//         {!flip && (
//           <Image
//             src={image}
//             flip={flip}
//             width={[1, 1 / 2]}
//             sx={{
//               height: "100vh",
//               objectFit: "cover",
//               objectPosition: "center center",
//             }}
//             flip={flip}
//           ></Image>
//         )}
//         <Box
//           width={[1, 1 / 2]}
//           style={{ position: "relative", marginLeft: "auto" }}
//         >
//           <Flex
//             flexDirection={"column"}
//             justifyContent={"center"}
//             height={"100vh"}
//             pr={[15, 30]}
//             pl={[15, 60]}
//             maxWidth={600}
//             mx={"auto"}
//           >
//             {children}
//           </Flex>
//           <PhotoCredits
//             credits={imageCredits}
//             sx={{
//               position: "absolute",
//               zIndex: 2,
//               bottom: 0,
//               left: 0,
//               pointerEvents: isInview ? "auto" : "none",
//             }}
//           ></PhotoCredits>
//         </Box>

//         {flip && (
//           <Image
//             src={image}
//             flip={flip}
//             width={[1, 1 / 2]}
//             sx={{
//               height: "100vh",
//               objectFit: "cover",
//               objectPosition: "center center",
//             }}
//             flip={flip}
//           ></Image>
//         )}
//       </FlexWrap>
//     </>
//   )
// }
