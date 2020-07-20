import React from "react"
import { Flex, Box } from "rebass/styled-components"
import theme from "../styles/index"
import styled from "styled-components"
import Media from "./Media"
import { Link } from "gatsby"

const Links = ({ textAlign = "right", ...props }) => (
  <Box style={{ textAlign: textAlign }} {...props}>
    <Link to={"/photo-credits"}>
      <h5>Photography Credits</h5>
    </Link>
  </Box>
)

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
        flexDirection={["column", "row"]}
      >
        <Media at={"sm"}>
          <Links textAlign={"left"} width={1} />
        </Media>

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

        <Media greaterThanOrEqual={"md"}>
          <Links />
        </Media>
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

  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
  }
`

export default Footer
