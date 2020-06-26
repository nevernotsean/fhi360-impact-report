import React from "react"
import { Flex, Box } from "rebass/styled-components"
import theme from "../styles/index"
import styled from "styled-components"

const Footer = () => {
  return (
    <StyledFooter
      style={{
        background: theme.colors.black,
      }}
    >
      <Flex
        m={"0 auto"}
        maxWidth={1200}
        p={"1.45rem 1.0875rem"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box>
          <h5 mb={3}>
            © {new Date().getFullYear()}, FHI 360
            <br />
            All rights reserved.
          </h5>
          <h5>
            FHI 360 is the registered trade name of Family Health International.
          </h5>
        </Box>
        <Box style={{ textAlign: "right" }}>
          <h5>LEARN MORE</h5>
          <h5>SHARE</h5>
        </Box>
      </Flex>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  color: white;

  h5 {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1px;
  }
`

export default Footer
