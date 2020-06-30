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
              height={"100vh"}
              pr={[15, 30]}
              pl={[15, 60]}
              maxWidth={600}
              mx={"auto"}
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
          <Box width={[1]} style={{ position: "relative" }}>
            <InViewImage
              src={image}
              scrollSpeed={1.5}
              imageSpeed={0.8}
              sx={{
                paddingX: 20,
              }}
              style={{
                display: "block",
                maxWidth: "none",
                height: "80vh",
                width: "80%",
                objectFit: "cover",
                objectPosition: "center center",
                marginLeft: flip && "auto",
                marginRight: !flip && "auto",
              }}
            ></InViewImage>
            <InViewImage
              src={image2}
              scrollSpeed={-0.5}
              imageSpeed={1}
              sx={{
                position: "absolute",
                top: "20vh",
              }}
              style={{
                display: "block",
                maxWidth: "none",
                margin: "0 auto 0 0",
                width: "60%",
                height: "60vh",
                objectFit: "cover",
                objectPosition: "center center",
                marginLeft: !flip && "auto",
                marginRight: flip && "auto",
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
                marginTop: "-313px",
                top: "50%",
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
        )}
      </FlexWrap>
    </Flex>
  )
}

export const SplitSectionLong = ({
  children,
  contentArray = [{ img: null, imgCredits: null, content: null }],
  ...props
}) => {
  const id = useMemo(() => shortid())
  const [activeSection, setActive] = React.useState(0)
  const total = contentArray.length

  return (
    <Box
      activeIndex={activeSection}
      height={`${total + 1}00vh`}
      id={`fixedScroll-${id}`}
      sx={{ position: "relative" }}
    >
      {/* <img
        data-scroll
        data-scroll-speed={1}
        src={stripeVert}
        alt="pattern"
        style={{
          position: "absolute",
          zIndex: 9,
          top: "50%",
          left: "50%",
          // left: props.flip ? undefined : 0,
          // right: !props.flip ? undefined : 0,
          height: "616px",
          width: "23px",
          marginTop: "1.45rem",
        }}
      /> */}
      <Box>
        {contentArray.map(({ content: Content, ...contentProps }, i) => (
          <SplitSectionLongInner
            className={"long-section-inner"}
            target={`#fixedScroll-${id}`}
            index={i}
            total={total}
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
  img,
  imgCredits,
  target,
  index,
  total,
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
        minHeight={"100vh"}
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
            src={img}
            flip={flip}
            width={[1, 1 / 2]}
            sx={{
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
        </Box>
        {flip && (
          <Image
            src={img}
            flip={flip}
            width={[1, 1 / 2]}
            sx={{
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
