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

const Financial = () => {
  return (
    <Layout bg={"#e2e2e2"}>
      <SEO title="Home" />
      <Nav></Nav>
      <Masthead
        title={"(unaudited)"}
        headline={"2019<br/>Financial Summary"}
      ></Masthead>
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
}

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

export default Financial
