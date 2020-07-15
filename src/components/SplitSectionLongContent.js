import React from "react"
import Media from "./Media"
import stripeVert from "../images/pattern-vert.png"
import shortid from "shortid"
import { SplitSection } from "./SplitSection"
import { FlexWrap } from "./../elements/Flex"
import { Box, Flex, Image } from "rebass/styled-components"
import { useInView } from "react-intersection-observer"
import styled from "styled-components"
import PhotoCredits from "./PhotoCredits"
import theme from "./../styles/index"
import lerp from "lerp"
import { LocomotiveContext } from "./../hooks/useLocomotiveScroll"
import ScrollPercent from "./SplitSectionScrollPercent"
import SectionTrigger from "./SplitSectionLongTrigger"

const SplitSectionLongContent = ({
  children,
  contentArray = [
    {
      image: null,
      imageCredits: null,
      alt: null,
      content: null,
      mobileContent: null,
    },
  ],
  pattern = stripeVert,
  ...props
}) => {
  // const context = React.useContext(LocomotiveContext)
  const id = React.useMemo(() => shortid(), [])
  const total = contentArray.length

  const [activeSection, setActive] = React.useState(-1)
  const [loaded, setLoaded] = React.useState(false)

  // const [scrollProps, setScrollProps] = React.useState()

  React.useEffect(() => {
    setLoaded(true)

    //   if (context.scroll) {
    //     context.scroll.on("call", (value, type, props) => {
    //       if (value == `long-form-start-${id}`) setScrollProps(props)
    //     })
    //   }
  }, [])

  const [sectionProps, setSectionProps] = React.useState([])

  // React.useEffect(() => {
  //   if (sectionProps.length) console.log(sectionProps)
  // }, [sectionProps])

  return (
    <Container>
      <Media at={"sm"}>
        <SplitSection
          {...props}
          image={contentArray[0].image}
          imageCredits={contentArray[0].imageCredits}
        >
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
      </Media>
      <Media greaterThanOrEqual={"md"}>
        <Box
          className={"relative"}
          height={`${total + 1}00vh`}
          id={`fixedScroll-${id}`}
          data-scroll
          data-scroll-call={`long-form-start-${id}`}
        >
          {contentArray.map((props, i) => (
            <SectionTrigger
              setSectionProps={props => {
                // console.log(props, i)
                sectionProps[i] = props
                setSectionProps(sectionProps)
              }}
              setActive={setActive}
              activeSection={activeSection}
              key={i}
              index={i}
            />
          ))}
          <Box
            data-scroll
            data-scroll-sticky
            data-scroll-target={`#fixedScroll-${id}`}
            className={"magellan"}
          >
            {contentArray.map(({ content: Content, ...contentProps }, i) => (
              <SplitSectionLongInner
                key={i}
                index={i}
                total={total}
                isVisible={activeSection == i}
                scrollStart={
                  sectionProps &&
                  sectionProps.length &&
                  sectionProps[i] &&
                  sectionProps[i].top
                }
                scrollEnd={
                  sectionProps &&
                  sectionProps.length &&
                  sectionProps[i] &&
                  sectionProps[i].bottom
                }
                {...props}
                {...contentProps}
              >
                <Content animated={activeSection == i}></Content>
              </SplitSectionLongInner>
            ))}
          </Box>
        </Box>
      </Media>
    </Container>
  )
}

const Container = styled.div`
  .relative {
    position: relative;
  }

  .magellan {
    position: absolute;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    > * {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
    }
  }
`

const SplitSectionLongInner = ({
  children,
  flip,
  imageCredits,
  minHeight,
  image,
  alt,
  target,
  index,
  total,
  height,
  isVisible,
  innerPercent,
  scrollStart,
  scrollEnd,
  ...props
}) => {
  return (
    <StyledInner isVisible={isVisible}>
      <FlexWrap className={"split-section-long-content-inner"} height={"100vh"}>
        {!flip ? (
          <>
            {/* Left */}
            <CenteredFlex>
              <FullImage src={image} alt={alt}></FullImage>
            </CenteredFlex>
            {/* Right */}
            <CenteredFlex>
              <Box pr={[15, 30]} pl={[15, 60]} maxWidth={600}>
                {children}
              </Box>
              <BottomContainer>
                <ScrollPercent
                  scrollStart={scrollStart}
                  scrollEnd={scrollEnd}
                  enabled={isVisible}
                  index={index}
                />
                <PhotoCredits credits={imageCredits} className={"credits"} />
              </BottomContainer>
            </CenteredFlex>
          </>
        ) : (
          <>
            {/* Left */}
            <CenteredFlex>
              <Box pr={[15, 30]} pl={[15, 60]} maxWidth={600}>
                {children}
              </Box>
              <BottomContainer>
                <ScrollPercent
                  scrollStart={scrollStart}
                  scrollEnd={scrollEnd}
                  enabled={isVisible}
                  index={index}
                />
                <PhotoCredits credits={imageCredits} className={"credits"} />
              </BottomContainer>
            </CenteredFlex>
            {/* Right */}
            <CenteredFlex>
              <FullImage src={image} alt={alt}></FullImage>
            </CenteredFlex>
          </>
        )}
      </FlexWrap>
    </StyledInner>
  )
}

const BottomContainer = props => (
  <Box className={"bottom-container"} {...props}></Box>
)

const StyledInner = styled(Box)`
  opacity: 0;
  transition: opacity 0.5s linear;
  ${({ isVisible }) => isVisible && "opacity: 1;"}
  ${({ isVisible }) =>
    !isVisible && "pointer-events: none;"}

  .split-section-long-content-inner {
  }

  .bottom-container {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

const CenteredFlex = props => (
  <Flex
    width={[1, 1 / 2]}
    flex={"1 0 auto"}
    height={["auto", "100%"]}
    alignItems={"center"}
    justifyContent={"center"}
    sx={{ position: "relative" }}
    {...props}
  />
)

const FullImage = props => (
  <Image
    width={1}
    height={"100%"}
    sx={{
      objectFit: "cover",
      objectPosition: "center center",
    }}
    {...props}
  ></Image>
)

export default SplitSectionLongContent
