import React from "react"
import { Box } from "rebass/styled-components"
import styled from "styled-components"
import { Lead, H2 } from "../../elements/Type"
import Streak from "../../assets/svg/streak.svg"
import { useInView } from 'react-intersection-observer';


const ReportPullquote = ({ title, headline, streakDelay = 0, ...props }) => {
  const [parentRef, inView] = useInView({
    rootMargin: "20% 0px -20% 0px",
    threshold: 1,
    triggerOnce: true,
  })

  return (
    <Container {...props} width={1} inView={inView} streakDelay={streakDelay}>
      <div ref={parentRef}></div>
      <Lead dangerouslySetInnerHTML={{ __html: title }} mb={30}></Lead>
      <H2
        dangerouslySetInnerHTML={{ __html: headline }}
        fontSize={[24, 48]}
        className={"quote"}
      ></H2>
      <Streak width={250} className={"streak"}></Streak>
    </Container>
  )
}

const Container = styled(Box)`
  .quote {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-weight: 400;
    line-height: 1;
    max-width: 1000px;
    font-size: 32px;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints[0]}) {
      max-width: calc(100vw - 40px);
      overflow: hidden;
    }
  }

  .large-font {
    font-size: 44px;
  }

  .break {
    margin: 15px 0;
    display: block;
  }

  .streak {
    transform-origin: 10% center;
    transition: transform 150ms linear ${({streakDelay}) => streakDelay + 300}ms;
    
    ${({inView}) => !inView && `transform: scaleX(0);`}
  }
`

export default ReportPullquote
