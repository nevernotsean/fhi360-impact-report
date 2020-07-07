import React, { useMemo } from "react"
import { Flex, Box, Image } from "rebass/styled-components"
import stripeVert from "../images/pattern-vert.png"
import InViewImage from "../components/InViewImage"
import FlexSectionContainer from "./FlexSectionContainer"
import styled from "styled-components"
import { FlexWrap } from "../elements/Flex"
import shortid from "shortid"
import theme from "../styles/index"
import { useInView } from "react-intersection-observer"
import PhotoCredits from "./PhotoCredits"
import { useMediaQuery } from "react-responsive"

const SplitSectionImage = ({
  image,
  // hideImageOnMobile,
  width = [1, 1 / 2],
  height = "100vh",
  flip,
  ...props
}) => (
  <SplitImageContainer
    width={width}
    height={"100%"}
    // hideImageOnMobile={hideImageOnMobile}
  >
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
  </SplitImageContainer>
)

const SplitImageContainer = styled(Box)`
  position: relative;
  /* ${({ hideImageOnMobile }) =>
    hideImageOnMobile &&
    `
      @media screen and (max-width: 1024px) {
        display: none;
      }
  `} */
`

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
  const isMobile = useMediaQuery(...theme.isMobileQuery)

  const hideImage = hideImageOnMobile == true && isMobile == true

  return (
    <FlexWrap minHeight={"100vh"} {...props}>
      {!hideImage && (!flip || isMobile) && (
        <>
          <SplitSectionImage
            image={image}
            scrollSpeed={0}
            flip={flip}
            height={"50vh"}
          ></SplitSectionImage>
          {isMobile && (
            <PhotoCredits
              credits={imageCredits}
              sx={{ alignSelf: "start" }}
            ></PhotoCredits>
          )}
        </>
      )}
      <Box
        width={[1, 1 / 2]}
        style={{ position: "relative", marginLeft: "auto" }}
      >
        {!isMobile && (
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
        )}

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
        {!hideImage && !isMobile && (
          <PhotoCredits
            credits={imageCredits}
            sx={{ position: "absolute", zIndex: 2, bottom: 0, left: 0 }}
          ></PhotoCredits>
        )}
      </Box>
      {!hideImage && !flip && !isMobile && (
        <SplitSectionImage
          image={image}
          scrollSpeed={0}
          flip={flip}
        ></SplitSectionImage>
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
  const isMobile = useMediaQuery(...theme.isMobileQuery)

  const hideImage = hideImageOnMobile == true && isMobile == true

  return (
    <Flex
      minHeight={["unset", "100vh"]}
      className={"cropped-image-section"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      style={{ position: "relative" }}
      pb={isMobile && 50}
      overflowX={["hidden", "auto"]}
    >
      <FlexWrap width={1}>
        {!isMobile && flip && (
          <Box
            width={[1, 1 / 2]}
            flex={"1 0 auto"}
            mr={"auto"}
            style={{ position: "relative", zIndex: 1 }}
          >
            <Flex
              flexDirection={"column"}
              justifyContent={"center"}
              height={!isMobile && "100vh"}
              pr={[15, 30]}
              pl={[15, 60]}
              maxWidth={600}
              mx={"auto"}
            >
              {children}
            </Flex>
          </Box>
        )}
        {!hideImage && (
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
              pr={isMobile ? 0 : flip && "10vh"}
              pl={isMobile ? 0 : !flip && "10vh"}
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
        )}
        {isMobile && !hideImage && (
          <PhotoCredits
            credits={imageCredits}
            sx={{ alignSelf: "start" }}
          ></PhotoCredits>
        )}
        {(isMobile || !flip) && (
          <Box
            width={[1, 1 / 2]}
            ml={"auto"}
            style={{ position: "relative", zIndex: 1 }}
            pt={[50, 0]}
          >
            {!isMobile && (
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
            )}
            <Flex
              flexDirection={"column"}
              justifyContent={"center"}
              height={!isMobile && "100vh"}
              pr={[15, 30]}
              pl={[15, 60]}
              maxWidth={600}
              mx={"auto"}
            >
              {children}
            </Flex>
          </Box>
        )}
      </FlexWrap>
      {!hideImage && !isMobile && (
        <PhotoCredits
          credits={imageCredits}
          sx={{
            position: "absolute",
            zIndex: 2,
            bottom: 0,
            left: 0,
          }}
        ></PhotoCredits>
      )}
    </Flex>
  )
}

export const SplitSectionLong = ({
  children,
  contentArray = [
    { image: null, imageCredits: null, content: null, mobileContent: null },
  ],
  pattern = stripeVert,
  ...props
}) => {
  const id = useMemo(() => shortid())
  const [activeSection, setActive] = React.useState(0)
  const total = contentArray.length

  const isMobile = useMediaQuery(...theme.isMobileQuery)

  if (isMobile) {
    const { image, imageCredits } = contentArray[0]
    return (
      <>
        <SplitSection {...props} image={image} imageCredits={imageCredits}>
          {contentArray.map(
            ({ mobileContent: Content, content, ...contentProps }, i) => (
              <Content
                key={i}
                hideImageOnMobile={i !== 0}
                {...contentProps}
              ></Content>
            )
          )}
        </SplitSection>
      </>
    )
  }

  return (
    <Box
      activeIndex={activeSection}
      height={`${total + 1}00vh`}
      id={`fixedScroll-${id}`}
      sx={{ position: "relative" }}
    >
      <Box>
        {contentArray.map(({ content: Content, ...contentProps }, i) => (
          <SplitSectionLongInner
            key={i}
            className={"long-section-inner"}
            target={`#fixedScroll-${id}`}
            index={i}
            total={total}
            isMobile={isMobile}
            {...props}
            {...contentProps}
          >
            <Content></Content>
          </SplitSectionLongInner>
        ))}
      </Box>
    </Box>
  )
}

const SplitSectionLongInner = ({
  children,
  flip,
  imageCredits,
  hideImageOnMobile,
  minHeight,
  image,
  target,
  index,
  total,
  height,
  ...props
}) => {
  const [ref, isInview] = useInView({
    rootMargin: "0px 0px -100% 0px",
    threshold: 0,
  })

  return (
    <>
      <Box
        className={"inview-trigger"}
        height={`${(total - index + 1) * 100}vh`}
        width={1}
        ref={ref}
        sx={{
          position: "absolute",
          top: 0,
          transform: `translateY(${index * 100}vh)`,
        }}
      ></Box>
      <FlexWrap
        data-scroll
        data-scroll-sticky
        data-scroll-target={target}
        minHeight={["unset", "100vh"]}
        height={height}
        width={1}
        {...props}
        sx={{
          background: "white",
          position: "absolute",
          zIndex: index,
          top: 0,
          left: 0,
          opacity: index == 0 || isInview ? 1 : 0,
          transition: "opacity .3s linear",
        }}
      >
        {!flip && (
          <Image
            src={image}
            flip={flip}
            width={[1, 1 / 2]}
            sx={{
              height: "100vh",
              objectFit: "cover",
              objectPosition: "center center",
            }}
            flip={flip}
          ></Image>
        )}
        <Box
          width={[1, 1 / 2]}
          style={{ position: "relative", marginLeft: "auto" }}
        >
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
          <PhotoCredits
            credits={imageCredits}
            sx={{ position: "absolute", zIndex: 2, bottom: 0, left: 0 }}
          ></PhotoCredits>
        </Box>

        {flip && (
          <Image
            src={image}
            flip={flip}
            width={[1, 1 / 2]}
            sx={{
              height: "100vh",
              objectFit: "cover",
              objectPosition: "center center",
            }}
            flip={flip}
          ></Image>
        )}
      </FlexWrap>
    </>
  )
}
