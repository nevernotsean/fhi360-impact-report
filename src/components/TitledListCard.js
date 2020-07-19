import React from "react"
import styled from "styled-components"
import { Box } from "rebass/styled-components"
import { animated } from "react-spring"

import useDimensions from "react-use-dimensions"

const TitledListCard = ({
  title,
  children,
  href,
  maxWidth,
  height,
  translate,
  ...props
}) => {
  const [ref, { height: h }] = useDimensions()

  return (
    <TitledListCardContainer
      px={[0, 25]}
      {...props}
      height={height}
      animatedHeight={h}
      innerMaxWidth={maxWidth}
    >
      <span
        ref={ref}
        className={"inner"}
        style={{
          transform: `translateY(${translate})`,
        }}
      >
        <span className="line"></span>
        <div
          className="title"
          dangerouslySetInnerHTML={{ __html: title }}
        ></div>
        {children}
        {href && (
          <a
            href={href}
            className="learn-more"
            target={"_blank"}
            rel="noreferrer"
          >
            Learn More
          </a>
        )}
      </span>
    </TitledListCardContainer>
  )
}

const TitledListCardContainer = styled(Box)`
  overflow: hidden;
  position: relative;
  ${({ animatedHeight }) => animatedHeight && `height: ${animatedHeight}px`};
  /* display: flex;
  justify-content: center; */

  .inner {
    position: absolute;
    height: auto;
    width: calc(100% - 25px);
    ${({ innerMaxWidth }) => innerMaxWidth && `max-width: ${innerMaxWidth}px;`}
    ${({ index }) => `transition: all 500ms ease ${index * 400}ms;`}
  }

  .line {
    display: block;
    border-top: 1px solid ${({ theme }) => theme.colors.orange};
    ${({ noBorder }) => noBorder && `border-top: none;`}
  }

  .title {
    font-family: ${({ theme }) => theme.fonts.sans};
    color: ${({ theme }) => theme.colors.orange};
    margin: 1rem 0;
    text-transform: uppercase;

    .bolder {
      font-size: 16px;
      font-weight: 900;

      @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
        font-size: 18px;
      }

      @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
        font-size: 24px;
      }
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    }
  }

  .learn-more {
    color: ${({ theme }) => theme.colors.orange};
    font-family: ${({ theme }) => theme.fonts.sans};
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;
  }

  .title-card-body {
    font-size: 12px;
    line-height: 16px;
  }

  a {
    display: inline-block;
  }
`

export default TitledListCard
