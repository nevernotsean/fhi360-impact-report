import React from "react"
import { Flex, Box } from "rebass/styled-components"
import { Link } from "gatsby"
import styled from "styled-components"

const Nav = () => {
  return (
    <Container>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        mx={"auto"}
        pr={[0, 50]}
        height={50}
        flexDirection={["column", "row"]}
      >
        <Box px={[0, 10]}>
          <Link className={"link back"} to={"/"}>
            ← Back to We Are FHI 360
          </Link>
        </Box>
        <Flex>
          <Link className={"link"} to={"/report"}>
            2019 Overview
          </Link>
          <Link className={"link"} to={"/financial"}>
            Financials
          </Link>
          <Link className={"link"} to={"/funders"}>
            Funders
          </Link>
          <Link className={"link"} to={"/globalreach"}>
            Global Reach
          </Link>
        </Flex>
      </Flex>
    </Container>
  )
}

const Container = styled(Box)`
  background: ${({ theme }) => theme.colors.white};
  .link {
    font-family: ${({ theme }) => theme.fonts.sans};
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.black};
    letter-spacing: 2px;
    margin: 10px;
    font-size: 12px;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints[0]}) {
      text-align: right;
    }
  }

  .back {
    justify-self: flex-start;
  }
`

export default Nav
