import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from "../assets/svg/fhi-logo-white.svg"
import MenuButton from "../assets/svg/menu-button.svg"
import { Flex, Box } from "rebass/styled-components"
import theme from "../styles/index"

const Header = ({ siteTitle }) => (
  <header
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
      <h1
        style={{
          margin: 0,
          color: `white`,
          textDecoration: `none`,
          textTransform: "uppercase",
          fontSize: "12px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <Box width={100} mr={20}>
            <Logo></Logo>
          </Box>
        </Link>
        <span style={{ marginBottom: "-6px" }}>
          The science of improving lives
        </span>
      </h1>
      <div>
        <Box height={21} width={25}>
          <MenuButton></MenuButton>
        </Box>
      </div>
    </Flex>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
