import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Masthead from "../components/Report/Masthead"
import { Flex, Box, Image } from "rebass/styled-components"

import Image2 from "../images/2019FinancialsV2-02.jpg"
import Image3 from "../images/2019FinancialsV2-03.jpg"
import Image4 from "../images/2019FinancialsV2-04.jpg"
import Image5 from "../images/2019FinancialsV2-05.jpg"
import { H2 } from "../elements/Type"
import Nav from "../components/Report/Nav"
import styled from "styled-components"

const Financial = () => (
  <Layout bg={"#e2e2e2"} hideMenuButton={true}>
    <SEO title="Home" />
    <Nav></Nav>
    <Masthead title={"(unaudited)"} headline={"2019<br/>Financial Summary"}>
      <Box mb={50}>
        <p>Twelve months ending September 30 2019</p>
      </Box>
      <Flex mx={[0, -20]}>
        <Box width={[1, 1 / 2]} px={20}>
          <StyledTable>
            <thead>
              <tr>
                <th>Revenue</th>
                <th>US Dollars</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Us Government</td>
                <td>$000,000,000</td>
              </tr>
              <tr>
                <td>Foundations/Individuals</td>
                <td>$000,000,000</td>
              </tr>
              <tr>
                <td>Multilateral Agencies</td>
                <td>$000,000,000</td>
              </tr>
              <tr>
                <td>Corporations</td>
                <td>$000,000,000</td>
              </tr>
              <tr>
                <td>Other</td>
                <td>$000,000,000</td>
              </tr>
              <tr className="no-stroke">
                <td>Other Governments</td>
                <td>$000,000,000</td>
              </tr>
              <tr className="white-bg no-stroke">
                <td>Total</td>
                <td>$000,000,000</td>
              </tr>
            </tbody>
          </StyledTable>
        </Box>

        <Box width={[1, 1 / 2]} px={20}>
          <StyledTable>
            <thead>
              <tr>
                <th>Expenses</th>
                <th>US Dollars</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Program Expenses</td>
                <td>$000,000,000</td>
              </tr>
              <tr>
                <td>General & Administrative</td>
                <td>$000,000,000</td>
              </tr>
              <tr className="no-stroke">
                <td>Business Development</td>
                <td>$000,000,000</td>
              </tr>
              <tr className="white-bg no-stroke">
                <td>Total</td>
                <td>$000,000,000</td>
              </tr>
            </tbody>
          </StyledTable>
        </Box>
      </Flex>
    </Masthead>
    <Flex flexDirection={"column"}></Flex>
    <Section title={"Revenue by source"}>
      <Image src={Image5}></Image>
    </Section>
    <Section title={"Allocation of expenses"}>
      <Image src={Image4}></Image>
    </Section>
    <Section title={"Work by area"}>
      <Image src={Image3}></Image>
    </Section>
    <Section title={"Work by region"}>
      <Image src={Image2}></Image>
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
        fontSize={[18, 24]}
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
    <Box mb={30}>{children}</Box>
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
`

export default Financial
