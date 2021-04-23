import React, {useState,useEffect} from "react"
import { Flex, Box } from "rebass/styled-components"
import { Link } from "gatsby"
import styled from "styled-components"
import { useLocation } from "@reach/router"

const Nav = () => {
  return (
    <Container>
      <Flex
        justifyContent={"space-between"}
        alignItems={["flex-end", "center"]}
        mx={"auto"}
        height={["auto"]}
        flexDirection={["column", "row"]}
      >
        <Box px={[0, 10]} display={["none", "block"]} alignSelf={['normal', 'center']}>
          <Link className={"link back"} to={"/"}>
            ← Back to This is FHI 360
          </Link>
        </Box>
        <Box px={[0, 10]}>
          <ReportToggle />
        </Box>
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
    /* text-transform: uppercase; */
    color: ${({ theme }) => theme.colors.black};
    letter-spacing: 1px;
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

const ReportToggle = () => {
  const {pathname} = useLocation();
  const [year, setYear] = useState('2020');

  useEffect(() => {
    if (pathname.includes('2020'))
      setYear('2020')
    else if (pathname.includes('2019'))
      setYear('2019')
  },[pathname])
  

  return (
    <ReportToggleContainer>
      <Flex flexDirection={["column", "row"]} className="year-select">
        <StyledLink className={"link year-link"} to={`/reports/2020/report`} active={year == '2020'}>
          2020
        </StyledLink>
        <StyledLink className={"link year-link"} to={`/reports/2019/report`} active={year == '2019'}>
          2019
        </StyledLink>
      </Flex>
      <Flex flexDirection={["column", "row"]} pr={[10, 50]}>
        <StyledSubLink className={"link"} to={`/reports/${year}/report`} active={pathname.replace(`/reports/${year}`,"").includes('/report')}>
          {year} Impact
        </StyledSubLink>
        {year != 2019 && <StyledSubLink className={"link"} to={`/reports/${year}/ceoletter`} active={pathname.includes('/ceoletter')}>
          CEO Letter
        </StyledSubLink>}
        <StyledSubLink className={"link"} to={`/reports/${year}/financial`} active={pathname.includes('/financial')}>
          Financials
        </StyledSubLink>
        <StyledSubLink className={"link"} to={`/reports/${year}/funders`} active={pathname.includes('/funders')}>
          Funders
        </StyledSubLink>
        <StyledSubLink className={"link"} to={`/reports/${year}/globalreach`} active={pathname.includes('/globalreach')}>
          Global Reach
        </StyledSubLink>
      </Flex>
    </ReportToggleContainer>
  )
}

const ReportToggleContainer = styled.div`
    .year-select {
      border-bottom: 1px solid ${({theme}) => theme.colors.orange}
    }
`

const StyledSubLink = styled(Link)`
   ${({active}) => active ? "color: black !important;" : "color: lightgrey !important;"};
`

const StyledLink = styled(Link)`
    background: ${({theme, active}) => active ? theme.colors.orange : 'none'};
    margin: 0px !important;
    padding: 10px;
    font-size: 14px !important;

    ${({active}) => active && "color: white !important;"};
`

export default Nav
