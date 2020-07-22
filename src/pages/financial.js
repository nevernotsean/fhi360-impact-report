import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Masthead from "../components/Report/Masthead"
import { Flex, Box } from "rebass/styled-components"

import Image2 from "../images/2019FinancialsV2-02.jpg"
import Image3 from "../images/2019FinancialsV2-03.jpg"
import Image4 from "../images/2019FinancialsV2-04.jpg"
import Image5 from "../images/2019FinancialsV2-05.jpg"
import { H2 } from "../elements/Type"
import Nav from "../components/Report/Nav"
import styled from "styled-components"
import Image from "../components/image"

import sketch from "../images/sketch.png"

const Financial = ({ location }) => (
  <Layout
    bg={"#f1f1f1"}
    hideMenuButton={true}
    pageTitle={"2019 Impact Report"}
    location={location}
  >
    <SEO title="Home" />
    <Nav></Nav>
    <Masthead title={"(unaudited)"} headline={"2019<br/>Financial Summary"}>
      <Box mb={50}>
        <p>Twelve months ending September 30, 2019.</p>
        <p>Unaudited</p>
      </Box>
      <Flex mx={[0, -20]} flexWrap={"wrap"}>
        <Box width={[1, 1 / 2]} px={[0, 20]} flex={"1 0 auto"}>
          <StyledTable>
            <thead>
              <tr>
                <th>Revenue</th>
                <th>US Dollars</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>US Government</td>
                <td>$642,000,000</td>
              </tr>
              <tr>
                <td>Foundations/Individuals</td>
                <td>$66,000,000</td>
              </tr>
              <tr>
                <td>Corporations</td>
                <td>$39,000,000</td>
              </tr>
              <tr>
                <td>Multilateral Agencies</td>
                <td>$28,000,000</td>
              </tr>
              <tr>
                <td>Other</td>
                <td>$10,000,000</td>
              </tr>
              <tr className="no-stroke">
                <td>Other Governments</td>
                <td>$5,000,000</td>
              </tr>
              <tr className="white-bg no-stroke">
                <td>Total</td>
                <td>$790,000,000</td>
              </tr>
            </tbody>
          </StyledTable>
        </Box>

        <Box width={[1, 1 / 2]} px={[0, 20]} flex={"1 0 auto"}>
          <StyledTable>
            <thead>
              <tr>
                <th>Expenses</th>
                <th>US Dollars</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Operational Expenses</td>
                <td>$667,000,000</td>
              </tr>
              <tr>
                <td className={"nowrap"}>General and Administrative</td>
                <td>$102,000,000</td>
              </tr>
              <tr className="no-stroke">
                <td>Business Development</td>
                <td>$17,000,000</td>
              </tr>
              <tr className="white-bg no-stroke">
                <td>Total</td>
                <td>$786,000,000</td>
              </tr>
            </tbody>
          </StyledTable>
        </Box>
      </Flex>
    </Masthead>
    <Flex flexDirection={"column"}></Flex>
    <Section title={"Revenue by source"}>
      <Box width={[1, 1 / 2]}>
        <Image
          alt={"pie chart of Revenue by source"}
          src={Image5}
          width={1}
          mx={"auto"}
          sx={{ display: "block" }}
          p={20}
        ></Image>
      </Box>
      <Box width={[1, 1 / 2]} px={[0, 20]} flex={"1 0 auto"}>
        <Legend>
          <tbody>
            <LegendRow color={"teal"} stat={"64.16%"}>
              USAID
            </LegendRow>
            <LegendRow color={"orange"} stat={"8.30%"}>
              Foundations
            </LegendRow>
            <LegendRow color={"pink"} stat={"7.20%"}>
              NIH/DHHS
            </LegendRow>
            <LegendRow color={"grey"} stat={"4.88%"}>
              Corporations
            </LegendRow>
            <LegendRow color={"purple"} stat={"4.81%"}>
              US State Department
            </LegendRow>
            <LegendRow color={"lightgrey"} stat={"3.59%"}>
              Multilaterals
            </LegendRow>
            <LegendRow color={"lightpurple"} stat={"2.92%"}>
              Other US Government
            </LegendRow>
            <LegendRow color={"lightblue"} stat={"2.22%"}>
              CDC
            </LegendRow>
            <LegendRow color={"slate"} stat={"1.32%"}>
              Other
            </LegendRow>
            <LegendRow color={"bluewhite"} stat={"0.60%"}>
              Government (non-US)
            </LegendRow>
          </tbody>
        </Legend>
      </Box>
    </Section>
    <Section title={"Allocation of expenses"}>
      <Box width={[1, 1 / 2]}>
        <Image
          alt={"pie chart of Allocation of expenses"}
          src={Image4}
          width={1}
          mx={"auto"}
          sx={{ display: "block" }}
          p={20}
        ></Image>
      </Box>
      <Box width={[1, 1 / 2]} px={[0, 20]} flex={"1 0 auto"}>
        <Legend>
          <tbody>
            <LegendRow color={"orange"} stat={"84.86%"}>
              Operational Expenses
            </LegendRow>
            <LegendRow color={"teal"} stat={"13.03%"}>
              General and Administrative
            </LegendRow>
            <LegendRow color={"slate"} stat={"2.11%"}>
              Business Development
            </LegendRow>
          </tbody>
        </Legend>
      </Box>
    </Section>
    <Section title={"Work by area"}>
      <Box width={[1, 1 / 2]}>
        <Image
          alt={"pie chart of Work by area"}
          src={Image3}
          width={1}
          mx={"auto"}
          sx={{ display: "block" }}
          p={20}
        ></Image>
      </Box>
      <Box width={[1, 1 / 2]} px={[0, 20]} flex={"1 0 auto"}>
        <Legend>
          <tbody>
            <LegendRow color={"teal"} stat="35.62%">
              HIV/AIDS, TB and Malaria Programs
            </LegendRow>
            <LegendRow color={"orange"} stat="12.45%">
              Research
            </LegendRow>
            <LegendRow color={"pink"} stat="9.50%">
              Education
            </LegendRow>
            <LegendRow color={"grey"} stat="7.38%">
              Nutrition and Food Security
            </LegendRow>
            <LegendRow color={"purple"} stat="5.95%">
              Other Health
            </LegendRow>
            <LegendRow color={"lightgrey"} stat="5.57%">
              Civil Society and Peacebuilding
            </LegendRow>
            <LegendRow color={"lightpurple"} stat="5.15%">
              Workforce, Learning and Economic Participation
            </LegendRow>
            <LegendRow color={"lightblue"} stat="4.96%">
              Social Marketing and Communications
            </LegendRow>
            <LegendRow color={"#13282f"} stat="4.86%">
              Family Planning and Maternal Child Health
            </LegendRow>
            <LegendRow color={"slate"} stat="4.72%">
              International Exchanges
            </LegendRow>
            <LegendRow color={"bluewhite"} stat="3.84%">
              Other
            </LegendRow>
          </tbody>
        </Legend>
        <p style={{ maxWidth: "400px" }}>
          <small>
            Crosscutting areas, such as technology, gender and youth, are
            integrated into many of our programs.
          </small>
        </p>
      </Box>
    </Section>
    <Section title={"Work by region"}>
      <Box width={[1, 1 / 2]}>
        <Image
          alt={"pie chart of Work by region"}
          src={Image2}
          width={1}
          mx={"auto"}
          sx={{ display: "block" }}
          p={20}
        ></Image>
      </Box>
      <Box width={[1, 1 / 2]} px={[0, 20]} flex={"1 0 auto"}>
        <Legend>
          <tbody>
            <LegendRow color={"teal"} stat="36.24%">
              Global
            </LegendRow>
            <LegendRow color={"orange"} stat="23.38%">
              East/Southern Africa
            </LegendRow>
            <LegendRow color={"pink"} stat="20.75%">
              West/Central Africa and Middle East/North Africa
            </LegendRow>
            <LegendRow color={"grey"} stat="6.20%">
              Asia/Pacific
            </LegendRow>
            <LegendRow color={"purple"} stat="5.69%">
              United States
            </LegendRow>
            <LegendRow color={"lightgrey"} stat="4.99%">
              Europe/Central Asia
            </LegendRow>
            <LegendRow color={"lightpurple"} stat="2.75%">
              Latin America/Caribbean
            </LegendRow>
          </tbody>
        </Legend>
      </Box>
    </Section>
  </Layout>
)

const Section = ({ title, children, ...props }) => (
  <Flex
    flexDirection={"column"}
    maxWidth={1200}
    mx={"auto"}
    minHeight={"50vh"}
    {...props}
    px={20}
  >
    <Box sx={{ borderBottom: "1px solid black" }} width={1} mb={30}>
      <H2
        fontWeight={900}
        fontSize={[16, 18]}
        lineHeight={1}
        mb={10}
        sx={{
          textTransform: "uppercase",
          display: "inline-block",
        }}
      >
        {title}
      </H2>
    </Box>
    <Box mb={30}>
      <Flex>{children}</Flex>
    </Box>
  </Flex>
)

const StyledTable = styled.table`
  border: 2px solid ${({ theme }) => theme.colors.black};

  th {
    background: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 900;
  }
  th,
  td {
    padding-left: 20px;
    padding-right: 20px;
    border: none;

    &:nth-child(1) {
      padding-right: 0;
    }
    &:nth-child(2) {
      padding-left: 0;
    }
  }
  .white-bg {
    background: ${({ theme }) => theme.colors.white};
  }

  tr td:nth-child(2),
  tr th:nth-child(2) {
    text-align: right;
  }

  tbody tr:not(.no-stroke) td {
    padding-bottom: 0;

    &:after {
      content: "";
      display: block;
      width: 100%;
      border-bottom: 1px solid ${({ theme }) => theme.colors.black};
      padding-top: 0.725rem;
    }
  }

  .nowrap {
    white-space: nowrap;
  }
`

const Legend = styled.table`
  th,
  td {
    padding: 0;
    padding: 0 10px;
    border: none;
  }

  .dot {
    width: 25px;
  }

  .dot span {
    width: 25px;
    height: 25px;
    border-radius: 100%;
    display: inline-block;
  }
`

const LegendRow = ({ color = "teal", stat = "0", children, ...props }) => {
  const colors = {
    teal: "#2f6576",
    orange: "#e69f50",
    pink: "#f0c3ac",
    grey: "#757c93",
    purple: "#30163b",
    lightgrey: "#979ba5",
    lightpurple: "#adaec2",
    lightblue: "#72b9e1",
    slate: "#8fb0c2",
    bluewhite: "#a6cadc",
  }
  return (
    <tr {...props}>
      <td className="dot">
        <span style={{ background: colors[color] ? colors[color] : color }}>
          {/* <span
            style={{
              position: "absolute",
              background: `url(${sketch}) no-repeat center center`,
            }}
          ></span> */}
        </span>
      </td>
      <td style={{ width: "60px", textAlign: "right" }}>{stat}</td>
      <td>{children || "Lorem"}</td>
    </tr>
  )
}

export default Financial
