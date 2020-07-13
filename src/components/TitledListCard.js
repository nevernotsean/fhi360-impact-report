import React, { useMemo, useRef } from "react"
import styled from "styled-components"
import { Flex, Box } from "rebass/styled-components"
import { animated } from "react-spring"

import useDimensions from "react-use-dimensions"

const TitledListCard = ({
  title,
  children,
  y,
  href,
  maxWidth,
  height,
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
      <animated.span
        ref={ref}
        className={"inner"}
        style={{
          transform: y.interpolate(y => `translateY(${y})`),
        }}
      >
        <span className="line"></span>
        <div
          className="title"
          dangerouslySetInnerHTML={{ __html: title }}
        ></div>
        {children}
        {href && (
          <a href={href} className="learn-more" target={"_blank"}>
            Learn More
          </a>
        )}
      </animated.span>
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
      font-size: 24px;
      font-weight: 900;
    }
  }

  .learn-more {
    color: ${({ theme }) => theme.colors.orange};
    font-family: ${({ theme }) => theme.fonts.sans};
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;
  }

  a {
    display: inline-block;
  }
`

export default TitledListCard
