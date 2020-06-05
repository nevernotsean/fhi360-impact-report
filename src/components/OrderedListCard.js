import React, { useMemo, useRef } from "react"
import styled from "styled-components"
import { Flex, Box } from "reflexbox"
import { animated } from "react-spring"

import useDimensions from "react-use-dimensions"

const OrderedListCard = ({ number, children, y, href, ...props }) => {
  const [ref, { height }] = useDimensions()

  return (
    <OrderedListCardContainer {...props} height={height}>
      <animated.span
        ref={ref}
        className={"inner"}
        style={{
          transform: y.interpolate(y => `translateY(${y})`),
        }}
      >
        <span className="line"></span>
        <p className="number">{number}</p>
        {children}
        {href && (
          <a href={href} className="learn-more">
            Learn More
          </a>
        )}
      </animated.span>
    </OrderedListCardContainer>
  )
}

const OrderedListCardContainer = styled(Box)`
  padding: 0 25px;

  overflow: hidden;
  position: relative;
  height: ${({ height }) => height}px;

  .inner {
    position: absolute;
    height: auto;
    width: 100%;
  }

  .line {
    display: block;
    border-top: 1px solid ${({ theme }) => theme.colors.orange};
  }

  .number {
    font-size: 44px;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: 900;
    margin: 1rem 0;
  }

  .learn-more {
    color: ${({ theme }) => theme.colors.orange};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: 900;
    text-decoration: none;
  }

  a {
    display: inline-block;
  }
`

export default OrderedListCard
