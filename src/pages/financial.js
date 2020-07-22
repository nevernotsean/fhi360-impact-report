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
        ></Image>
      </Box>
      <Box width={[1, 1 / 2]} px={[0, 20]} flex={"1 0 auto"}>
        <Legend>
          <tbody>
            <LegendRow stat={"64.16"}>USAID</LegendRow>
            <LegendRow stat={"8.30"}>Foundations</LegendRow>
            <LegendRow stat={"7.20"}>NIH/DHHS</LegendRow>
            <LegendRow stat={"4.88"}>Corporations</LegendRow>
            <LegendRow stat={"4.81"}>US State Department</LegendRow>
            <LegendRow stat={"3.59"}>Multilaterals</LegendRow>
            <LegendRow stat={"2.92"}>Other US Government</LegendRow>
            <LegendRow stat={"2.22"}>CDC</LegendRow>
            <LegendRow stat={"1.32"}>Other</LegendRow>
            <LegendRow stat={"0.60"}>Government (non-US)</LegendRow>
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
        ></Image>
      </Box>
      <Box width={[1, 1 / 2]} px={[0, 20]} flex={"1 0 auto"}>
        <Legend>
          <tbody>
            <LegendRow stat={""}></LegendRow>
            <LegendRow stat={""}></LegendRow>
            <LegendRow stat={""}></LegendRow>
            <LegendRow stat={""}></LegendRow>
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
        ></Image>
      </Box>
      <Box width={[1, 1 / 2]} px={[0, 20]} flex={"1 0 auto"}>
        <Legend>
          <tbody>
            <LegendRow stat={""}></LegendRow>
            <LegendRow stat={""}></LegendRow>
            <LegendRow stat={""}></LegendRow>
            <LegendRow stat={""}></LegendRow>
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
        ></Image>
      </Box>
      <Box width={[1, 1 / 2]} px={[0, 20]} flex={"1 0 auto"}>
        <Legend>
          <tbody>
            <LegendRow stat={""}></LegendRow>
            <LegendRow stat={""}></LegendRow>
            <LegendRow stat={""}></LegendRow>
            <LegendRow stat={""}></LegendRow>
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

const LegendRow = ({ color = "#aaa", stat = "0", children, ...props }) => {
  return (
    <tr {...props}>
      <td className="dot">
        <span style={{ background: color }}></span>
      </td>
      <td style={{ width: "60px", textAlign: "right" }}>{stat}%</td>
      <td>{children || "Lorem"}</td>
    </tr>
  )
}

export default Financial
