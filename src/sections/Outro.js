import React, {
  useEffect,
  useContext,
  useLayoutEffect,
  useCallback,
  useState,
} from "react"
import styled from "styled-components"
import FlexSectionContainer from "../components/FlexSectionContainer"
import HandDrawnSVG from "../components/HandDrawnSVG"

import { Box, Flex } from "reflexbox"
import { Lead } from "../components/Typography"

import strip from "../images/pattern-strip.png"
import theme from "../styles/index"

import Works from "../assets/svg/works.svg"
import worksImage from "../images/outro-works.jpg"

import Empowers from "../assets/svg/empowers.svg"
import empowersImage from "../images/outro-empowers.jpg"

import Engages from "../assets/svg/engages.svg"
import { LocomotiveContext } from "../hooks/useLocomotiveScroll"

import lerp from "lerp"

const BGImage = styled.img`
  margin: 0;
  display: block;
  object-fit: cover;
  object-position: center center;
  height: 100vh;
  width: 100vw;
`

const OutroWord = ({ image, children, ...props }) => {
  return (
    <>
      <Flex
        flexDirection={"column"}
        minHeight={"100vh"}
        alignItems={"center"}
        style={{ background: theme.colors.grey }}
      >
        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          style={{ textAlign: "center" }}
          flex={"1 0 100%"}
          display={"flex"}
        >
          <Box>{children}</Box>
        </Flex>
        <Box height={45} style={{ textAlign: "center" }}>
          <img src={strip}></img>
        </Box>
      </Flex>
      {image && (
        <div>
          <BGImage src={image}></BGImage>
        </div>
      )}
    </>
  )
}

const Outro = () => {
  const image = "http://unsplash.it/800/800"

  const context = useContext(LocomotiveContext)
  const [loaded, setLoaded] = useState()

  const [scroll, setScroll] = useState(false)
  const [zoomProps, setZoomProps] = useState(false)
  const [lastType, setLastType] = useState(false)
  const [scale, setScale] = useState(3)

  useEffect(() => {
    setLoaded(true)

    if (context.scroll) {
      context.scroll.on("scroll", props => setScroll(props.scroll.y))

      context.scroll.on("call", (value, type, props) => {
        if (value == "zoom") {
          setZoomProps(props)
          setLastType(type)
        }
      })
    }
  }, [loaded])

  useEffect(() => {
    if (scroll)
      if (lastType == "enter" || scroll >= zoomProps.top - 100) {
        var newScale = getScale(scroll, zoomProps.top, zoomProps.bottom, 3, 1)
        setScale(newScale < 1 ? 1 : newScale)
      } else setScale(5)
  }, [scroll, lastType])

  const getScale = (scrollY, startY, endY, scaleStart, scaleEnd) =>
    lerp(scaleStart, scaleEnd, (scrollY - startY) / (endY - startY))
  // {
  //   var val = lerp(scaleStart, scaleEnd, (scrollY - startY) / (endY - startY))
  //   // console.log(scrollY, endY)
  //   return val
  // }

  return (
    <>
      <OutroWord image={worksImage}>
        <Lead>Lorem ipsum</Lead>
        <h2 className={"section-title"}>
          We are
          <br />
          changing the way
          <br />
          <span className="serif">human development</span>
        </h2>
        <Box m={"-170px auto"} maxWidth={450} w={1}>
          <HandDrawnSVG svg={Works}></HandDrawnSVG>
        </Box>
      </OutroWord>
      <OutroWord image={empowersImage}>
        <Lead>Lorem ipsum</Lead>
        <h2 className={"section-title"}>
          We are
          <br />
          changing the way
          <br />
          <span className="serif">human development</span>
        </h2>
        <Box m={"-80px auto"} maxWidth={550} w={1}>
          <HandDrawnSVG svg={Empowers}></HandDrawnSVG>
        </Box>
      </OutroWord>
      <OutroWord>
        <Lead>Lorem ipsum</Lead>
        <h2 className={"section-title"}>
          We are
          <br />
          changing the way
          <br />
          <span className="serif">human development</span>
        </h2>
        <Box m={"-100px auto"} maxWidth={600} w={1}>
          <HandDrawnSVG svg={Engages}></HandDrawnSVG>
        </Box>
      </OutroWord>
      <Container className="grid">
        <div
          className="s-instagram"
          data-scroll
          data-scroll-sticky
          data-scroll-target=".grid"
          data-scroll-call="zoom"
          data-scroll-repeat={"true"}
        >
          <div
            className="s-instagram-grid"
            style={{
              transform: `scale(${scale})`,
            }}
          >
            <div className="s-instagram-layer">
              <div
                className="s-instagram-block"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            </div>
            <div className="s-instagram-layer">
              <div
                className="s-instagram-block"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            </div>
            <div className="s-instagram-layer">
              <div
                className="s-instagram-block"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            </div>
            <div className="s-instagram-layer">
              <div
                className="s-instagram-block"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            </div>
            <div className="s-instagram-layer">
              <div
                className="s-instagram-block"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            </div>
            <div className="s-instagram-layer">
              <div
                className="s-instagram-block"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            </div>
            <div className="s-instagram-layer">
              <div
                className="s-instagram-block"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            </div>
            <div className="s-instagram-layer">
              <div
                className="s-instagram-block"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            </div>
            <div className="s-instagram-layer">
              <div
                className="s-instagram-block"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

const Container = styled.div`
  position: relative;
  min-height: 300vh;
  overflow: hidden;

  .s-instagram {
    margin: 0;
    pointer-events: none;
    min-height: 100vh;
    margin-bottom: 16.25vw;
  }
  @media only screen and (max-width: 580px) {
    .s-instagram {
      margin: 27.778vw 0;
      pointer-events: all;
    }
  }
  .s-instagram-grid {
    top: 0;
    left: 0;
    z-index: 1;
    width: 70vw;
    height: 60vw;
    margin: 0 calc(100vw / 20 * 3);
    position: absolute;
    margin-bottom: 16.25vw;

    will-change: transform;
  }
  @media only screen and (max-width: 580px) {
    .s-instagram-grid {
      margin: 0;
      width: 100vw;
      height: 89.444vw;
    }
  }
  .s-instagram-figure {
    width: 100vw;
    height: 400vh;
    position: relative;
  }
  .is-device .s-instagram-figure {
    height: auto;
  }
  .is-device .s-instagram-grid {
    position: relative;
  }
  .s-instagram-scroller {
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    position: absolute;
  }
  @media only screen and (max-width: 580px) {
    .s-instagram-scroller {
      display: none;
    }
  }
  .s-instagram-block {
    background-size: cover;
  }
  .s-instagram-layer {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .s-instagram-layer:nth-child(1) .s-instagram-block {
    top: 5vw;
    left: 20vw;
    width: 10vw;
    height: 10vw;
  }
  @media only screen and (max-width: 580px) {
    .s-instagram-layer:nth-child(1) .s-instagram-block {
      top: 11.111vw;
      left: 23.889vw;
      width: 15vw;
      height: 15vw;
    }
  }
  .s-instagram-layer:nth-child(2) .s-instagram-block {
    top: 0;
    left: 32.5vw;
    width: 15vw;
    height: 15vw;
  }
  @media only screen and (max-width: 580px) {
    .s-instagram-layer:nth-child(2) .s-instagram-block {
      top: 0;
      left: 43.333vw;
      width: 26.389vw;
      height: 26.389vw;
    }
  }
  .s-instagram-layer:nth-child(3) .s-instagram-block {
    left: 0;
    top: 25vw;
    width: 15vw;
    height: 15vw;
  }
  @media only screen and (max-width: 580px) {
    .s-instagram-layer:nth-child(3) .s-instagram-block {
      top: 30.278vw;
      left: 0;
      width: 26.389vw;
      height: 26.389vw;
    }
  }
  .s-instagram-layer:nth-child(4) .s-instagram-block {
    top: 17.5vw;
    left: 17.5vw;
    width: 30vw;
    height: 30vw;
  }
  @media only screen and (max-width: 580px) {
    .s-instagram-layer:nth-child(4) .s-instagram-block {
      top: 30.278vw;
      left: 30.278vw;
      width: 39.444vw;
      height: 39.444vw;
    }
  }
  .s-instagram-layer:nth-child(5) {
    z-index: 1;
  }
  .s-instagram-layer:nth-child(5) .s-instagram-block {
    top: 20vw;
    left: 50vw;
    width: 5vw;
    height: 5vw;
    background-color: #cb9274;
    transition: background-color 0.4s ease-out;
  }
  @media only screen and (max-width: 580px) {
    .s-instagram-layer:nth-child(5) .s-instagram-block {
      top: 23.889vw;
      left: 73.889vw;
      width: 15.278vw;
      height: 15.278vw;
    }
  }
  .s-instagram-layer:nth-child(5) .s-instagram-block:hover {
    background-color: #b48065;
  }
  .s-instagram-layer:nth-child(5) a {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .s-instagram-layer:nth-child(5) svg {
    width: 1.75vw;
  }
  @media only screen and (max-width: 580px) {
    .s-instagram-layer:nth-child(5) svg {
      width: 4.722vw;
    }
  }
  .s-instagram-layer:nth-child(6) .s-instagram-block {
    left: 50vw;
    top: 27.5vw;
    width: 20vw;
    height: 20vw;
  }
  @media only screen and (max-width: 580px) {
    .s-instagram-layer:nth-child(6) .s-instagram-block {
      top: 43.889vw;
      left: 73.889vw;
      width: 26.389vw;
      height: 26.389vw;
    }
  }
  .s-instagram-layer:nth-child(7) .s-instagram-block {
    left: 10vw;
    top: 42.5vw;
    width: 5vw;
    height: 5vw;
  }
  @media only screen and (max-width: 580px) {
    .s-instagram-layer:nth-child(7) .s-instagram-block {
      display: none;
    }
  }
  .s-instagram-layer:nth-child(8) .s-instagram-block {
    bottom: 5vw;
    left: 42.5vw;
    width: 5vw;
    height: 5vw;
  }
  @media only screen and (max-width: 580px) {
    .s-instagram-layer:nth-child(8) .s-instagram-block {
      display: none;
    }
  }
  .s-instagram-layer:nth-child(9) .s-instagram-block {
    bottom: 0;
    left: 50vw;
    width: 10vw;
    height: 10vw;
  }
  @media only screen and (max-width: 580px) {
    .s-instagram-layer:nth-child(9) .s-instagram-block {
      top: 73.889vw;
      left: 58.889vw;
      width: 15.278vw;
      height: 15.278vw;
    }
  }
  .s-instagram-block {
    display: block;
    position: absolute;
  }
  .s-instagram-text {
    margin: 0 calc(100vw / 20 * 10) 0 calc(100vw / 20 * 4);
  }
  .s-instagram-text .f-pr,
  .s-instagram-text .f-bp {
    margin-left: calc(100vw / 20 * 1);
    margin-right: calc(100vw / 20 * 2);
  }
  @media only screen and (max-width: 580px) {
    .s-instagram-text {
      margin: 0 calc(100vw / 12 * 1);
    }
    .s-instagram-text .f-pr,
    .s-instagram-text .f-bp {
      margin-left: calc(100vw / 12 * 1);
      margin-right: calc(100vw / 12 * 1);
    }
  }
`

export default Outro
