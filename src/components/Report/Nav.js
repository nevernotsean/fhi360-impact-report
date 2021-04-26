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
    text-transform: uppercase;
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
        <StyledLink className={"link year-link"} to={`/reports/2020/report`} isActive={year == '2020'}>
          2020
        </StyledLink>
        <StyledLink className={"link year-link"} to={`/reports/2019/report`} isActive={year == '2019'}>
          2019
        </StyledLink>
      </Flex>
      <Flex flexDirection={["column", "row"]} pr={[10, 50]}>
        <StyledSubLink className={"link"} to={`/reports/${year}/report`} isActive={pathname.replace(`/reports/${year}`,"").includes('/report')}>
          {year} Impact
        </StyledSubLink>
        {year != 2019 && <StyledSubLink className={"link"} to={`/reports/${year}/ceoletter`} isActive={pathname.includes('/ceoletter')}>
          CEO Letter
        </StyledSubLink>}
        <StyledSubLink className={"link"} to={`/reports/${year}/financial`} isActive={pathname.includes('/financial')}>
          Financials
        </StyledSubLink>
        <StyledSubLink className={"link"} to={`/reports/${year}/funders`} isActive={pathname.includes('/funders')}>
          Funders
        </StyledSubLink>
        <StyledSubLink className={"link"} to={`/reports/${year}/globalreach`} isActive={pathname.includes('/globalreach')}>
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
   ${({isActive}) => isActive ? "color: black !important;" : "color: lightgrey !important;"};
`

const StyledLink = styled(Link)`
    background: ${({theme, isActive}) => isActive ? theme.colors.orange : 'none'};
    margin: 0px !important;
    padding: 10px;
    font-size: 17px !important;

    ${({isActive}) => isActive && "color: white !important;"};
`

export default Nav
