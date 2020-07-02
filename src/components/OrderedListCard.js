import React, { useMemo, useRef } from "react"
import styled from "styled-components"
import { Box } from "rebass/styled-components"

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
      px={[0, 25]}
      {...props}
      height={height || h}
      innerMaxWidth={maxWidth}
    >
      <Box
        as={"span"}
        ref={ref}
        className={"inner"}
        width={[1, "calc(100% - 25px)"]}
        style={{
          transform: `translateY(${y})`,
          transition: transition,
        }}
      >
        <span className="line"></span>
        <span className="number">{number}</span>
        {children}
        {href && (
          <a href={href} className="learn-more">
            Learn More
          </a>
        )}
      </Box>
    </OrderedListCardContainer>
  )
}

const OrderedListCardContainer = styled(Box)`
  overflow: hidden;
  position: relative;
  height: ${({ height }) => height}px;
  /* display: flex;
  justify-content: center; */

  .inner {
    position: absolute;
    height: auto;
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

  p {
    font-size: 16px;
    line-height: 22px;
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
