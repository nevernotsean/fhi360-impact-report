import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Masthead from "../components/Report/Masthead"
import { Flex, Box, Text } from "rebass/styled-components"
import { H2 } from "../elements/Type"
import styled from "styled-components"
import Nav from "../components/Report/Nav"
const Funders = ({ location }) => (
  <Layout bg={"#f1f1f1"} hideMenuButton={true} location={location}>
    <SEO title="Home" />
    <Nav></Nav>
    <Container>
      <Masthead headline={"Final Photo<br/>Credits"}>
        {/* <Box width={[1, 480]}>
          <p>Lorem ipsum</p>
        </Box> */}
      </Masthead>
      <Section title={"Central Photo"} minHeight={"unset"}>
        <P>Jessica Scranton/FHI 360</P>
      </Section>
      <Section title={"Clockwise from top"}>
        <P>Jessica Scranton/FHI 360</P>
        <P>Jessica Scranton/FHI 360</P>
        <P>Mbuto Machili/FHI 360</P>
        <P>Jessica Scranton/FHI 360</P>
        <P>Kiana Hayeri/The Verbatim Agency for FHI 360</P>
        <P>Kiana Hayeri/The Verbatim Agency for FHI 360</P>
        <P>Jessica Scranton/FHI 360</P>
        <P>Jessica Scranton/FHI 360</P>
      </Section>
    </Container>
  </Layout>
)

const Section = ({ title, children, bg, ...props }) => (
  <Box backgroundColor={bg}>
    <Flex
      flexDirection={"column"}
      maxWidth={1200}
      mx={"auto"}
      mb={30}
      minHeight={"50vh"}
      py={90}
      px={20}
      {...props}
    >
      <Box sx={{ borderBottom: "1px solid black" }} mb={50}>
        <H2
          fontWeight={900}
          fontSize={[16, 18]}
          lineHeight={1}
          mb={10}
          sx={{
            textTransform: "uppercase",
            display: "inline-block",
            position: "relative",
          }}
        >
          {title}
        </H2>
      </Box>
      <Columns>{children}</Columns>
    </Flex>
  </Box>
)

const Columns = props => (
  <Box {...props} sx={{ columnCount: [1, 2], marginX: [0, -20] }}></Box>
)

const P = styled(Text)`
  font-size: 16px;
  margin-bottom: 20px;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-weight: 700;
`

P.defaultProps = {
  px: 20,
}

const Container = styled.div`
  .indent1 {
    margin-left: 50px;
  }

  .indent2 {
    margin-left: 100px;
  }

  @media screen and (max-width: 1024px) {
    .indent1 {
      margin-left: 30px;
    }

    .indent2 {
      margin-left: 15px;
    }
  }
`

export default Funders
