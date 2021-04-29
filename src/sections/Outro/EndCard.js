import React from "react"
import styled from "styled-components"

import ThisIsFHI from "../../assets/svg/this-is-fhi.svg"
import { Flex, Box } from "rebass/styled-components"
import HandDrawnSVG from "./../../components/HandDrawnSVG"
import FHILogo from "../../assets/svg/FHI360_Logo_NewTag_Horiz.svg"
import { useInView } from "react-intersection-observer"
import { Link } from "gatsby"

const Endcard = ({ triggered, ...props }) => {
  const [ref, inView] = useInView({
    // rootMargin: "90% 0px 10% 0px",
    threshold: 0,
  })

  return (
    <StyledEndcard
      id="endcard"
      height={["50vh", "calc(100vh - 150px)"]}
      justifyContent={"center"}
      alignItems={"center"}
      triggered={inView || triggered}
      ref={ref}
    >
      <Box width={1} maxWidth={["unset", 600]} className="relative">
        <Box px={[20, 0]} id="this-is">
          <HandDrawnSVG
            svg={ThisIsFHI}
            delay2={1.5}
            duration={1.5}
            duration2={1.5}
            useInviewTrigger={false}
            animated={inView || triggered}
            ease={"linear"}
          ></HandDrawnSVG>
        </Box>
        <Flex id={"impact-link-container"} justifyContent="center" alignItems="center" flexDirection={'column'}>
          <Flex flexDirection={['column', 'row']}>
            <Box id="impact-link-past">
              <p className="uppercase light">Past Reports</p>
              <Link to={"/reports/2019/report"}>2019 Impact Report</Link>
            </Box>
            <Box id="impact-link">
              <p className="font-1">View our</p>
              <p className="font-2">2020 Impact Report</p>
              <Link to={"/reports/2020/report"} className="button">Learn More {'>'}</Link>
            </Box>
          </Flex>
          <a href={"https://www.fhi360.org/"} id="logo">
            <FHILogo></FHILogo>
          </a>
        </Flex>
      </Box>
    </StyledEndcard>
  )
}

const isTriggered = ({ triggered }) => (triggered ? 1 : 0)
const isTriggeredOneMinus = ({ triggered }) => (triggered ? 0 : 1)

const StyledEndcard = styled(Flex)`
  .relative {
    position: relative;
  }

  #impact-link-container {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100vw;
    transform: translate(-50%, -50%);

    opacity: ${isTriggered};

    a {
      color: black;
      text-transform: uppercase;
      font-weight: 900;
      font-family: ${({ theme }) => theme.fonts.sans};
      text-decoration: none;

      font-size: 28px;

      @media only screen and (max-width: ${({ theme }) =>
          theme.breakpoints[0]}) {
        font-size: 18px;
      }
    }
  }

  #this-is,
  #impact-link-container {
    transition: opacity 1s linear 4s;
  }

  #this-is {
    opacity: ${isTriggeredOneMinus};
  }

  #logo {
    /* position: absolute; */
    /* text-align: center; */
    width: 180px;
    /* padding: 20px; */
    /* bottom: 0; */
    /* left: 50%; */
    /* transform: translateX(-50%); */
    /* transition: opacity 1s linear 6s; */
    /* opacity: ${isTriggered}; */

    margin-top: 50px;

    @media only screen and (max-width: ${({ theme }) => theme.breakpoints[0]}) {
      width: 100px;
    }
  }

  .uppercase  {
    text-transform: uppercase;
  }
  
  .light {
    color: #777;
    font-weight: 700;
    font-size: 11px;
    margin-bottom: 0;
  }

  #impact-link-past {
    a {
      font-size: 14px;
      text-transform: none;
      &:hover {
        color: ${({ theme }) => theme.colors.orange}
      }
    }
  }

  .font-1, .font-2 {
    color: black;
    font-weight: 900;
    margin-bottom: 0;
  }

  .font-1 {
    text-transform: uppercase;
    margin-bottom: 5px;
  }

  .font-2 {
    font-size: 30px;
    margin-bottom: 20px;
  }

  #impact-link, #impact-link-past {
    padding: 40px;
  }

  #impact-link {
    border-left: 2px solid lightgray;

    @media only screen and (max-width: ${({ theme }) => theme.breakpoints[0]}) {
      border-left: none;
      border-bottom: 2px solid lightgray;
    }

    .button {
      background: ${({theme}) => theme.colors.orange};
      color: white;
      font-size: 12px;
      padding: 12px 20px;
      font-weight: 900;
      letter-spacing: 0.5px;
      display: inline-block;
      margin-bottom: 10px;

      &:hover {
        background: lightgrey;
        color: black;
      }
    }
  }
`

export default Endcard