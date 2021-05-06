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
        <Box px={[0, 10]} width={[1, 'unset']}>
          <ReportToggle />
          <MobileReportToggle />
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

  .report-nav-dtop { display: none; }
  .report-nav-mobile { display: block; }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
      .report-nav-dtop { display: block; }
      .report-nav-mobile { display: none; }
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
  
  // TODO Change to dropdown select for mobile

  return (
    <ReportToggleContainer className="report-nav-dtop">
      <Flex flexDirection={["column", "row"]} className="year-select">
        <StyledLink className={"link year-link"} to={`/reports/2020/report`} selected={year == '2020'}>
          2020
        </StyledLink>
        <StyledLink className={"link year-link"} to={`/reports/2019/report`} selected={year == '2019'}>
          2019
        </StyledLink>
      </Flex>
      <Flex flexDirection={["column", "row"]} pr={[10, 50]}>
        <StyledSubLink className={"link"} to={`/reports/${year}/report`} selected={pathname.replace(`/reports/${year}`,"").includes('/report')}>
          {year} Impact
        </StyledSubLink>
        {year != 2019 && <StyledSubLink className={"link"} to={`/reports/${year}/ceoletter`} selected={pathname.includes('/ceoletter')}>
          CEO Letter
        </StyledSubLink>}
        <StyledSubLink className={"link"} to={`/reports/${year}/financial`} selected={pathname.includes('/financial')}>
          Financials
        </StyledSubLink>
        <StyledSubLink className={"link"} to={`/reports/${year}/funders`} selected={pathname.includes('/funders')}>
          Funders
        </StyledSubLink>
        <StyledSubLink className={"link"} to={`/reports/${year}/globalreach`} selected={pathname.includes('/globalreach')}>
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
   ${({selected}) => selected ? "color: black !important;" : "color: lightgrey !important;"};
`

const StyledLink = styled(Link)`
    background: ${({theme, selected}) => selected ? theme.colors.orange : 'none'};
    margin: 0px !important;
    padding: 10px;
    font-size: 17px !important;

    ${({selected}) => selected && "color: white !important;"};
`

const pages = [
  { value: '', label: '2020' },
  { value: '/reports/2020/report', label: '2020 Impact' },
  { value: '/reports/2020/ceoletter', label: 'CEO Letter' },
  { value: '/reports/2020/financial', label: 'Financials' },
  { value: '/reports/2020/funders', label: 'Funders' },
  { value: '/reports/2020/globalreach', label: 'Global Reach' },
  { value: '', label: '2019' },
  { value: '/reports/2019/report', label: '2019 Impact' },
  { value: '/reports/2019/financial', label: 'Financials' },
  { value: '/reports/2019/funders', label: 'Funders' },
  { value: '/reports/2019/globalreach', label: 'Global Reach' }
]

const MobileReportToggle = props => {
  const {pathname} = useLocation();
  const [year, setYear] = useState('2020');
  const [active, setActive] = useState();

  useEffect(() => {
    if (pathname.includes('2020'))
      setYear('2020')
    else if (pathname.includes('2019'))
      setYear('2019')
  },[pathname])

  return (
    <MobileReportToggleContainer className="report-nav-mobile" active={active}>
      <Flex className={"mobile-current-year"} justifyContent={'space-between'} onClick={() => setActive(!active)}><p>{year}</p><p style={{color: '#777', transform: 'scaleY(0.75)'}}>{active ? '▲':'▼'}</p></Flex>
      <Flex flexDirection={"column"} className={"mobile-select"}>
      {pages.map(({value, label}) => {
          if (value === '') 
          return (<p className="mobile-year" >{label}</p>)
          else return (<Link  className="mobile-link" to={value} children={label} style={{ color: pathname.includes(value) && 'black' }}/>)
      })}
      </Flex>
    </MobileReportToggleContainer>
  )
}

const MobileReportToggleContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 20px;

  .mobile {
    &-year, &-link {
      padding: 10px 20px;
      font-weight: 700; 
      margin-bottom: 0px;
      letter-spacing: 1px;
    }

    &-select {
      width: calc(100% - 40px);
      position: absolute;
      z-index: 99;
      background: lightgray;
      margin-top: 5px;
      border-radius: 3px;
      overflow: hidden;

      ${({active}) => !active && 'display: none'}
    }

    &-current-year {
      background: lightgrey;
      padding: 10px 20px;
      border-radius: 3px;
      p { 
        font-size: 20px;
        margin-bottom: 0; 
        letter-spacing: 1px;
        font-weight: 700; 
      }
    }
    &-year {
      color: white;
      font-size: 20px;
      background: ${({theme}) => theme.colors.orange};
    }
    &-link {
      text-decoration: none;
      color: #555;
      margin-left: 10px;
    }
  }

  
`

export default Nav
