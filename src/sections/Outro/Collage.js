import React, { useEffect, useContext, useState } from "react"
import styled from "styled-components"

import Frame from "../../images/square-frame.png"
import { LocomotiveContext } from "../../hooks/useLocomotiveScroll"
import lerp from "lerp"

import centerImage from "../../images/collage-center.jpg"

import imageA from "../../images/collage-a.jpg"
import imageB from "../../images/collage-b.jpg"
import imageC from "../../images/collage-c.png"
import imageD from "../../images/collage-d.png"
import imageE from "../../images/collage-e.png"
import imageF from "../../images/collage-f.png"
import imageG from "../../images/collage-g.png"
import imageH from "../../images/collage-h.png"

import collageMobile from "../../images/collage-mobile.jpg"

import Endcard from './EndCard';

import ThisIsFHI from "../../assets/svg/this-is-fhi.svg"

import { Flex, Box } from "rebass/styled-components"
import HandDrawnSVG from "./../../components/HandDrawnSVG"

import FHILogo from "../../assets/svg/FHI360_Logo_NewTag_Horiz.svg"

import { easePolyIn, easePolyOut } from "d3-ease"
import Image from "./../../components/image"

import { isMobileOnly } from "react-device-detect"
import { useInView } from "react-intersection-observer"
import { Link } from "gatsby"

import Media from "../../components/Media"

const getScale = (t, exp, start, end) => {
  t = exp > 0 ? easePolyIn.exponent(exp)(t) : easePolyOut.exponent(-exp)(t)

  let scale = lerp(start, end, t / 1)

  scale = !scale || scale < end || scale > start ? start : scale
  return `scale(${scale})`
}

const Outro = () => {
  var startScale = 4
  var endScale = 1

  const context = useContext(LocomotiveContext)
  const [loaded, setLoaded] = useState()

  // current scroll
  const [scroll, setScroll] = useState(false)

  // locomotive props for sticky section
  const [zoomProps, setZoomProps] = useState({
    top: null,
    bottom: null,
  })

  const [lastType, setLastType] = useState(false)
  const [entered, setEntered] = useState(false)
  const [scale, setScale] = useState(startScale)
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    setLoaded(true)

    if (context.scroll) {
      context.scroll.on("scroll", props => {
        setScroll(props.scroll.y)
      })

      context.scroll.on("call", (value, type, props) => {
        if (value === "zoom") {
          // console.log(props)
          setZoomProps(props)
          setLastType(type)
        }
      })
    }
  }, [loaded, context.scroll])

  useEffect(() => {
    if (scroll && zoomProps.top) {
      setEntered(lastType === "enter" || scroll >= zoomProps.top - 100)
    }
  }, [scroll, zoomProps.top, lastType])

  useEffect(() => {
    if (scroll && zoomProps.top) {
      if (isMobileOnly) {
        setScale(endScale)
      } else {
        if (entered) {
          var startY = zoomProps.top - window.innerHeight * 1
          var endY = zoomProps.bottom - window.innerHeight * 1

          var newScale = lerp(0, 1, (scroll - startY) / (endY - startY))

          newScale = newScale <= 0 ? 0 : newScale
          newScale = newScale >= 1 ? 1 : newScale

          setScale(newScale)
        } else setScale(startScale)
      }

      if (
        lastType === "enter" ||
        scroll >= zoomProps.bottom - window.innerHeight
      ) {
        var startYop = zoomProps.bottom - window.innerHeight * 1
        var endYop = zoomProps.bottom
        var newOp = lerp(1, 0, (scroll - startYop) / (endYop - startYop))

        newOp = newOp <= 0 ? 0 : newOp
        newOp = newOp >= 1 ? 1 : newOp
        setOpacity(newOp)

        // if (newOp === 0) console.log(scroll, zoomProps)
      } else setOpacity(1)
    }
  }, [scroll, lastType, zoomProps.bottom, zoomProps.top])

  // trigger dissapear all but center
  const [wp1, setWp1] = useState(false)

  useEffect(() => {
    if (!zoomProps.bottom) return

    let isWp1 = scroll >= zoomProps.bottom - window.innerHeight * 0.75
    setWp1(isWp1)
  }, [scroll, zoomProps.bottom])

  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    setTriggered(opacity < 0.6)
  }, [opacity])

  return (
    <>
      <Container className="grid" wp1={wp1} height={["auto", "500vh"]}>
        <Media greaterThanOrEqual="md">
          <div className="s-instagram">
            <Box
              sx={{ opacity: [1, opacity] }}
              className="s-instagram-grid"
              data-scroll
              data-scroll-sticky
              data-scroll-target=".grid"
              data-scroll-call="zoom"
              data-scroll-repeat={"true"}
            >
              <div
                className="s-instagram-layer"
                style={{
                  transform: getScale(scale, -5, startScale, endScale),
                }}
              >
                <div
                  className="s-instagram-block"
                  style={{ backgroundImage: `url(${imageA})` }}
                ></div>
              </div>
              <div
                className="s-instagram-layer"
                style={{
                  transform: getScale(scale, 2, startScale, endScale),
                }}
              >
                <div
                  className="s-instagram-block"
                  style={{ backgroundImage: `url(${imageB})` }}
                ></div>
              </div>
              <div
                className="s-instagram-layer"
                style={{
                  transform: getScale(scale, -2, startScale, endScale),
                }}
              >
                <div
                  className="s-instagram-block"
                  style={{ backgroundImage: `url(${imageC})` }}
                ></div>
              </div>
              <div
                className="s-instagram-layer center-square"
                style={{
                  transform: getScale(scale, -7.5, startScale, endScale),
                }}
              >
                <div
                  aria-labelledby={"Photo Credit: Jessica Scranton/FHI 360"}
                  className="s-instagram-block"
                  style={{
                    backgroundImage: `url(${centerImage})`,
                    backgroundPosition: "80% 50%",
                  }}
                ></div>
                <Image src={Frame} id="frame"></Image>
              </div>
              <div
                className="s-instagram-layer"
                style={{
                  transform: getScale(scale, 2, startScale, endScale),
                }}
              >
                <div
                  className="s-instagram-block"
                  style={{ backgroundImage: `url(${imageH})` }}
                ></div>
              </div>
              <div
                className="s-instagram-layer"
                style={{
                  transform: getScale(scale, -1, startScale, endScale),
                }}
              >
                <div
                  className="s-instagram-block"
                  style={{ backgroundImage: `url(${imageE})` }}
                ></div>
              </div>
              <div
                className="s-instagram-layer"
                style={{
                  transform: getScale(scale, 2, startScale, endScale),
                }}
              >
                <div
                  className="s-instagram-block"
                  style={{ backgroundImage: `url(${imageF})` }}
                ></div>
              </div>
              <div
                className="s-instagram-layer"
                style={{
                  transform: getScale(scale, -5.5, startScale, endScale),
                }}
              >
                <div
                  className="s-instagram-block"
                  style={{ backgroundImage: `url(${imageG})` }}
                ></div>
              </div>
              <div
                className="s-instagram-layer"
                style={{
                  transform: getScale(scale, 3.5, startScale, endScale),
                }}
              >
                <div
                  className="s-instagram-block"
                  style={{ backgroundImage: `url(${imageD})` }}
                ></div>
              </div>
            </Box>
          </div>
        </Media>
        <Media at="sm">
          <div className="s-instagram">
            <Image src={collageMobile} px={20}></Image>
          </div>
        </Media>
        <Endcard />
      </Container>
    </>
  )
}

const Container = styled(Box)`
  position: relative;
  overflow: hidden;

  #endcard {
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  /* .s-instagram-layer:nth-child(1) {
    transition: opacity 0.2s linear ${1 * 0.1}s;
  }
  .s-instagram-layer:nth-child(2) {
    transition: opacity 0.2s linear ${2 * 0.1}s;
  }
  .s-instagram-layer:nth-child(3) {
    transition: opacity 0.2s linear ${3 * 0.1}s;
  }

  .s-instagram-layer:nth-child(5) {
    transition: opacity 0.2s linear ${5 * 0.1}s;
  }
  .s-instagram-layer:nth-child(6) {
    transition: opacity 0.2s linear ${6 * 0.1}s;
  }
  .s-instagram-layer:nth-child(7) {
    transition: opacity 0.2s linear ${7 * 0.1}s;
  }
  .s-instagram-layer:nth-child(8) {
    transition: opacity 0.2s linear ${8 * 0.1}s;
  }
  .s-instagram-layer:nth-child(9) {
    transition: opacity 0.2s linear ${9 * 0.1}s;
  } */
/* 
  ${({ wp1 }) =>
    wp1 &&
    `
      .s-instagram-layer:nth-child(1),
      .s-instagram-layer:nth-child(2),
      .s-instagram-layer:nth-child(3),
      .s-instagram-layer:nth-child(5),
      .s-instagram-layer:nth-child(6),
      .s-instagram-layer:nth-child(7),
      .s-instagram-layer:nth-child(8),
      .s-instagram-layer:nth-child(9) {
        opacity: 0;
      }
      `} */

  .s-instagram {
    margin: 0;
    pointer-events: none;
    min-height: 85vh;
    margin-bottom: 16.25vw;
  }
  @media only screen and (max-width: 580px) {
    .s-instagram {
      /* margin: 27.778vw 0; */
      pointer-events: all;

      min-height: 100vh;
    }
  }
  .s-instagram-grid {
    top: 0vw;
    left: 0;
    z-index: 1;
    width: 70vw;
    height: 60vw;
    margin: 0 calc(100vw / 20 * 3);
    /* margin-bottom: 8.125vw; */
    /* margin-top: 8.125vw; */
    position: absolute;

    will-change: transform;
  }
  @media only screen and (max-width: 580px) {
    .s-instagram-grid {
      margin: 0;
      top: 0;
      left: 0;
      width: 100vw;
      height: 89.444vw;
    }
  }
  .s-instagram-figure {
    width: 100vw;
    height: 100vh;
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
    background-repeat: no-repeat;
  }
  .s-instagram-layer {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    transform-origin: 44.9% 50%;
    @media only screen and (max-width: 580px) { transform: scale(1) !important; }
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
  #frame {
    display: block;
    position: absolute;
    top: 12vw;
    left: 11.5vw;
    width: 42vw;
    height: auto;
    transform: scaleY(1.05);
  }
  @media only screen and (max-width: 580px) {
    .s-instagram-layer:nth-child(4) .s-instagram-block {
      top: 30.278vw;
      left: 30.278vw;
      width: 39.444vw;
      height: 39.444vw;
    }

    #frame {
      left: 29vw;
      top: 30vw;
      transform: scale(1.4);
    }
  }
  .s-instagram-layer:nth-child(5) {
    z-index: 1;
  }
  .s-instagram-layer:nth-child(5) .s-instagram-block {
    top: 25vw;
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
    top: 32.5vw;
    width: 15vw;
    height: 15vw;
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
