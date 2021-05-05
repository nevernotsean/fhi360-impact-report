import React from "react"
import styled from "styled-components"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import Masthead from "../../../components/Report/Masthead"
import { Flex, Box } from "rebass/styled-components"
import Nav from "../../../components/Report/Nav"
import PatrickAvatar from "../../../images/report-2020/patrick-avatar.png"

import Sig from "../../../images/sig.png"
import { Image } from "rebass/styled-components"

const CeoLetter = ({ location }) => (
  <Layout
    bg={"#f1f1f1"}
    hideMenuButton={true}
    pageTitle={"2020 IMPACT REPORT"}
    location={location}
    altLogo
  >
    <SEO title="Home" />
    <Nav></Nav>
    <Masthead headline={"2020<br/>CEO Letter"}>
      <Container mt={[0,100]}>
        <Flex flexDirection={['column', 'row']}>
          <Box width={[1, 1 / 4]}>
            <Image
              width={[120, "100%"]}
              maxWidth={200}
              src={PatrickAvatar}
              alt={"Patrick Fine"}
            />
          </Box>
          <Box
            width={[1, 3 / 4]}
            px={[0, 25]}
            py={20}
          >
            {introLetter.map((body, i) => (
              <p key={i}>{body}</p>
            ))}
            <p>Warm regards,</p>
            <Image
          width={275}
          mr={"auto"}
          mb={-10}
          ml={-20}
          mt={-35}
          src={Sig}
          alt={"patrick fine"}
        ></Image>
        <p className={"bold mb0"}>Patrick C. Fine</p>
        <p className={"light"}>Chief Executive Officer, FHI 360</p>
        <br/>
        <br/>
        <br/>
        <br/>
        
        <hr />
        <p className="light small">Credit: Joshua Woodson/FHI 360</p>
          </Box>
        </Flex>
        
      </Container>
    </Masthead>

  </Layout>
)

const introLetter = [
  "Dear friends and colleagues,",

  "In a year that will forever be remembered for the human development crises wrought by the COVID-19 pandemic and the rising awareness of how systemic inequality harms everyone, delivering positive impact has never been more important. I am proud to share with you a few examples of how FHI 360’s dedicated staff and global reach made a difference when it mattered most. ",

  "With disruption already a buzzword, the pandemic brought tectonic changes to our work and daily lives. Driven by our commitment to equity, scientific excellence and improving lives, FHI 360 adapted in ways that will shape our work for years to come. I am particularly proud of how our teams contributed to understanding and responding to COVID-19; ensured that youth around the world continue to learn despite pandemic-imposed school closings; contributed to improving access to family planning through new products; protected fragile livelihoods by helping small businesses pivot to e-commerce; stood side by side with civil society organizations working for accountable governance; protected access to lifesaving HIV testing, care and treatment; and so much more. ",

  "This year, FHI 360 celebrates 50 years of service to the international community. What began as the International Fertility Research Program (IFRP) has evolved into a diversified social enterprise and family of companies dedicated to advancing human development in the United States and around the world. With more than 4,000 dedicated changemakers, operations in more than 60 countries and a deep well of expertise, FHI 360 is creating and sharing knowledge, practices and innovative products in everything from infant nutrition to crisis response and peacebuilding.",

  "We will be guided by our commitment to add value to our partners and funders through agile, locally driven and evidence-informed programs that tackle humanity’s ever-evolving challenges. ",

  "At FHI 360, we are powered by science and designed for the future. Learn how in our 2020 impact report. ",
]

const Container = styled(Box)`
  p.light {
    color: grey;
    margin-bottom: 0;
    font-weight: 700;
    font-size: 16px;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints[0]}) {
      font-size: 12px;
      line-height: 1;
    }
  }

  .mb0 { margin-bottom: 0;}

  p.small {
    font-size: 14px;
    font-weight: 400;
  }

  hr { max-width: 100px;}
`


export default CeoLetter
