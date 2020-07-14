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
import { lerp } from "lerp"
import { LocomotiveContext } from "./../hooks/useLocomotiveScroll"

const SplitSectionLongContent = ({
  children,
  contentArray = [
    { image: null, imageCredits: null, content: null, mobileContent: null },
  ],
  pattern = stripeVert,
  ...props
}) => {
  const context = React.useContext(LocomotiveContext)
  const id = React.useMemo(() => shortid(), [])
  const [activeSection, setActive] = React.useState(0)
  const total = contentArray.length
  const [loaded, setLoaded] = React.useState(false)
  const [scroll, setScroll] = React.useState(false)
  const [enabled, setEnabled] = React.useState(false)

  React.useEffect(() => {
    setLoaded(true)

    if (context.scroll) {
      context.scroll.on("scroll", props => {
        setScroll(props.scroll.y)
      })

      context.scroll.on("call", (value, type, props) => {
        if (value == `long-form-start-${id}`) {
          console.log(props)
        }
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
          data-scroll-call={`long-form-start-${id}`}
        >
          {contentArray.map((props, i) => (
            <SectionTrigger setActive={setActive} key={i} index={i} />
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
  target,
  index,
  total,
  height,
  isVisible,
  ...props
}) => {
  return (
    <StyledInner isVisible={isVisible}>
      <FlexWrap className={"split-section-long-content-inner"} height={"100vh"}>
        {!flip ? (
          <>
            {/* Left */}
            <CenteredFlex>
              <FullImage src={image}></FullImage>
            </CenteredFlex>
            {/* Right */}
            <CenteredFlex>
              <Box pr={[15, 30]} pl={[15, 60]} maxWidth={600}>
                {children}
              </Box>
              <PhotoCredits credits={imageCredits} className={"credits"} />
            </CenteredFlex>
          </>
        ) : (
          <>
            {/* Left */}
            <CenteredFlex>
              <Box pr={[15, 30]} pl={[15, 60]} maxWidth={600}>
                {children}
              </Box>
              <PhotoCredits credits={imageCredits} className={"credits"} />
            </CenteredFlex>
            {/* Right */}
            <CenteredFlex>
              <FullImage src={image}></FullImage>
            </CenteredFlex>
          </>
        )}
      </FlexWrap>
    </StyledInner>
  )
}

const StyledInner = styled(Box)`
  opacity: 0;
  transition: opacity 0.5s linear;
  ${({ isVisible }) => isVisible && "opacity: 1;"}
  ${({ isVisible }) =>
    !isVisible && "pointer-events: none;"}

  .split-section-long-content-inner {
  }

  .credits {
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
    height={"100%"}
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

const SectionTrigger = ({ setActive, index, props }) => {
  const [ref, isInview] = useInView({
    rootMargin: "0px 0px -100% 0px",
    threshold: 0,
  })

  React.useEffect(() => {
    if (isInview) {
      console.log(index, "active")
      setActive(index)
    }
  }, [isInview])

  return <Box ref={ref} sx={{ height: "100vh", pointerEvents: "none" }}></Box>
}

const mapLinear = (scrollY, startY, endY, scaleStart, scaleEnd) =>
  lerp(scaleStart, scaleEnd, (scrollY - startY) / (endY - startY))

const BreadCrumb = ({ scroll, scrollStart, scrollEnd, ...props }) => (
  <Box sx={{ width: "100%", position: "relative" }} {...props}>
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "2px",
        background: theme.colors.grey,
      }}
    ></Box>
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: mapLinear(scroll, scrollStart, scrollEnd, 0, 100) + "%",
        height: "2px",
        background: theme.colors.orange,
      }}
    ></Box>
  </Box>
)

export default SplitSectionLongContent
