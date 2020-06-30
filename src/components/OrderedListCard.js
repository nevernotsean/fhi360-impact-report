import React, { useMemo, useRef } from "react"
import styled from "styled-components"
import { Flex, Box } from "rebass/styled-components"
import { animated } from "react-spring"

import useDimensions from "react-use-dimensions"

const OrderedListCard = ({
  number,
  children,
  y,
  transition,
  href,
  maxWidth,
  height,
  ...props
}) => {
  const [ref, { height: h }] = useDimensions()

  return (
    <OrderedListCardContainer
      {...props}
      height={height || h}
      innerMaxWidth={maxWidth}
    >
      <span
        ref={ref}
        className={"inner"}
        style={{
          transform: `translateY(${y})`,
          transition: transition,
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
      </span>
    </OrderedListCardContainer>
  )
}

const OrderedListCardContainer = styled(Box)`
  padding: 0 25px;

  overflow: hidden;
  position: relative;
  height: ${({ height }) => height}px;
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

  .number {
    font-size: 44px;
    font-family: ${({ theme }) => theme.fonts.sans};
    font-weight: 900;
    margin: 1rem 0;
  }

  .learn-more {
    color: ${({ theme }) => theme.colors.orange};
    font-family: ${({ theme }) => theme.fonts.sans};
    font-weight: 900;
    text-decoration: none;
  }

  a {
    display: inline-block;
  }
`

export default OrderedListCard
