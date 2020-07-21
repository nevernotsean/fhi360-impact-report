import React from "react"
import Media from "./Media"
import stripeVert from "../images/pattern-vert.png"
import { SplitSection } from "./SplitSection"
import { FlexWrap } from "./../elements/Flex"
import { Box, Flex } from "rebass/styled-components"
import styled from "styled-components"
import PhotoCredits from "./PhotoCredits"
import ScrollPercent from "./SplitSectionScrollPercent"
import SectionTrigger from "./SplitSectionLongTrigger"
import Image from "./image"
import { useInView } from "react-intersection-observer"
import { LocomotiveContext } from "../hooks/useLocomotiveScroll"

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
  id,
  ...props
}) => {
  const [ref, isInView] = useInView({
    // rootMargin: "20% 0px -20% 0px",
    threshold: 0,
    triggerOnce: true,
  })
  const total = contentArray.length

  const [activeSection, setActive] = React.useState(0)
  const [loaded, setLoaded] = React.useState(false)

  const [scrollProps, setScrollProps] = React.useState()
  const [scroll, setScroll] = React.useState()

  const context = React.useContext(LocomotiveContext)

  React.useEffect(() => {
    setLoaded(true)

    if (context.scroll) {
      context.scroll.on(
        "call",
        (value, type, props) => value === `long-${id}` && setScrollProps(props)
      )

      context.scroll.on("scroll", props => {
        setScroll(props.scroll.y)
      })
    }
  }, [loaded])

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
          data-scroll-call={`long-${id}`}
          ref={ref}
        >
          {contentArray.map((props, i) => (
            <SectionTrigger setActive={setActive} key={i} index={i} id={id} />
          ))}
          <Box
            data-scroll
            data-scroll-sticky
            data-scroll-target={`#fixedScroll-${id}`}
            className={"magellan"}
          >
            <BottomContainer flip={props.flip} className={"bottom-container"}>
              <ScrollPercent
                scrollStart={scrollProps && scrollProps.top}
                scrollEnd={
                  scrollProps && scrollProps.bottom - window.innerHeight
                }
                scroll={scroll}
                enabled={isInView}
              />
              <PhotoCredits
                credits={contentArray[0].imageCredits}
                className={"credits"}
              />
            </BottomContainer>
            {contentArray.map(({ content: Content, ...contentProps }, i) => (
              <SplitSectionLongInner
                key={i}
                index={i}
                total={total}
                isVisible={activeSection === i}
                className={"magellan-inner"}
                {...props}
                {...contentProps}
              >
                <Content animated={activeSection === i}></Content>
              </SplitSectionLongInner>
            ))}
          </Box>
        </Box>
      </Media>
    </Container>
  )
}

const BottomContainer = styled(Box)`
  width: 50%;
  ${({ flip }) => (!flip ? "right: 0;" : "left: 0;")}
  position: absolute;
  bottom: 0;
  z-index: 9;
`

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
    > .magellan-inner {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
    }
  }

  .magellan-inner:not(::nth-child(0)) .image-container img {
    opacity: 0 !important;
  }
`

const SplitSectionLongInner = ({
  children,
  flip,
  imageCredits,
  minHeight,
  image,
  alt = "",
  target,
  index,
  total,
  height,
  isVisible,
  innerPercent,
  // scrollStart,
  // scrollEnd,
  ...props
}) => {
  return (
    <StyledInner {...props} isVisible={isVisible}>
      <FlexWrap className={"split-section-long-content-inner"} height={"100vh"}>
        {!flip ? (
          <>
            {/* Left */}
            <CenteredFlex className={"image-container"}>
              <FullImage src={image} alt={alt}></FullImage>
            </CenteredFlex>
            {/* Right */}
            <CenteredFlex className={"content-container"}>
              <Box pr={[15, 30]} pl={[15, 60]} maxWidth={600}>
                {children}
              </Box>
            </CenteredFlex>
          </>
        ) : (
          <>
            {/* Left */}
            <CenteredFlex className={"content-container"}>
              <Box pr={[15, 30]} pl={[15, 60]} maxWidth={600}>
                {children}
              </Box>
            </CenteredFlex>
            {/* Right */}
            <CenteredFlex className={"image-container"}>
              <FullImage src={image} alt={alt}></FullImage>
            </CenteredFlex>
          </>
        )}
      </FlexWrap>
    </StyledInner>
  )
}

const StyledInner = styled(Box)`
  ${({ isVisible }) => !isVisible && "pointer-events: none;"}

  .content-container {
    opacity: 0;
    transition: opacity 0.5s linear;
    ${({ isVisible }) => isVisible && "opacity: 1;"}
  }

  .section-body {
    @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
      min-height: 20vh;
    }
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
