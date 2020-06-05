import React from "react"
import styled from "styled-components"

const Outro = () => {
  const image = "http://unsplash.it/800/800"
  return (
    <Container>
      <div className="s-instagram">
        <div className="s-instagram-grid">
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
  )
}

const Container = styled.div`
  position: relative;
  min-height: 300vh;

  .s-instagram {
    margin: 0;
    margin-top: 27.8vw;
    pointer-events: none;
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
