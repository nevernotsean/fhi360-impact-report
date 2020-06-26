import React from "react"
import { Flex } from "rebass/styled-components"
import { Link } from "gatsby"
import styled from "styled-components"

const Nav = () => {
  return (
    <Container justifyContent={"flex-end"} maxWidth={1200} mx={"auto"} py={30}>
      <Link className={"link"} to={"/report"}>
        2019 Overview
      </Link>
      <Link className={"link"} to={"/financial"}>
        Financials
      </Link>
      <Link className={"link"} to={"/funders"}>
        Funders
      </Link>
    </Container>
  )
}

const Container = styled(Flex)`
  .link {
    font-family: ${({ theme }) => theme.fonts.sans};
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.black};
    letter-spacing: 2px;
    margin: 0 10px;
  }
`

export default Nav
