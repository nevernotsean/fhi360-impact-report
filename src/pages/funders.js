import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Masthead from "../components/Report/Masthead"
import { Flex, Box, Text } from "rebass/styled-components"
import { H2 } from "../elements/Type"
import styled from "styled-components"
import Nav from "../components/Report/Nav"

const Funders = () => {
  return (
    <Layout bg={"#e2e2e2"}>
      <SEO title="Home" />
      <Nav></Nav>
      <Masthead title={"Thank you"} headline={"2019<br/>Funders"}>
        <Box width={[1, 480]}>
          <p>
            FHI 360’s work would not be possible without the generous support of
            our funders and partners. We appreciate their crucial contribution
            and value their continued trust.
          </p>
        </Box>
      </Masthead>
      <Section title={"Private Sector"}>
        <P>Essity</P>
        <P>GlaxoSmithKline plc</P>
        <P>Johnson & Johnson</P>
        <P>Mona Lisa N.V.</P>
        <P>Pfizer, Inc.</P>
        <P>Procter & Gamble</P>
        <P>Qualcomm® Wireless Reach™</P>
        <P>Sanaria, Inc.</P>
        <P>Shell Nigeria Exploration and Production Company, Ltd.</P>
        <P>SK Bioscience Co., Ltd.</P>
        <P>Unilever</P>
        <P>ViiV Healthcare UK (No.3) Ltd.</P>
        <P>WCG</P>
      </Section>
      <Section title={"NONPROFIT ORGANIZATIONS"}>
        <P>American Cleaning Institute</P>
        <P>Avenir Health</P>
        <P>BRAC</P>
        <P>Business for Social Responsibility</P>
        <P>CONRAD</P>
        <P>The END Fund</P>
        <P>Girl Scouts of Greater New York</P>
        <P>PATH</P>
        <P>PATH Vaccine Solutions</P>
        <P>Philanthropy U</P>
        <P>WaterAid</P>
      </Section>
      <Section title={"Educational Institutions"}>
        <P>Cornell Cooperative Extension of Oneida County</P>
        <P>Emory University</P>
        <P>Hempstead Union Free School District</P>
        <P>Liverpool School of Tropical Medicine</P>
      </Section>
      <Section title={"MULTILATERAL ORGANIZATIONS"}>
        <P>The Global Fund to Fight AIDS, Tuberculosis and Malaria</P>
        <P>UNAIDS</P>
        <P>UNHCR</P>
        <P>UNICEF</P>
        <P>UNOPS/Water Supply & Sanitation Collaborative Council</P>
        <P>The World Bank/IFC</P>
      </Section>
      <Section title={"U.S. FEDERAL AND LOCAL GOVERNMENT AGENCIES"}>
        <P>AmeriCorps NCCC</P>
        <P>Millennium Challenge Corporation</P>
        <P>National Science Foundation</P>
        <P>New York City Department of Education</P>
        <P>Open World Leadership Center</P>
        <P>U.S. Agency for International Development</P>
        <P>U.S. Department of Agriculture</P>
        <P>U.S. Department of Defense</P>
        <P>U.S. Army Medical Research and Material Command</P>
        <P>U.S. Navy</P>
        <P>U.S. Department of Education</P>
        <P>U.S. Department of Health and Human Services</P>
        <P>Centers for Disease Control and Prevention</P>
        <P>Health Resources and Services Administration</P>
        <P>National Institutes of Health</P>
        <P>National Institute of Allergy and Infectious Diseases</P>
        <P>Substance Abuse and Mental Health Services Administration</P>
        <P>U.S. Department of Labor</P>
        <P>U.S. Department of State</P>
      </Section>
      <Section title={"PARTNER COUNTRY GOVERNMENTS AND BILATERAL AGENCIES"}>
        <P>Department of Foreign Affairs and Trade (Australia)</P>
        <P>Department for International Development (U.K.)</P>
        <P>Foreign and Commonwealth Office (U.K.)</P>
        <P>Government of Equatorial Guinea</P>
        <P>Government of the Netherlands</P>
        <P>International Development Research Centre (Canada)</P>
        <P>National Cancer Centre Singapore</P>
        <P>Secretary of State for Health and Social Care (U.K.)</P>
      </Section>
      <Box width={1} maxWidth={1200} mx={"auto"}>
        <Box width={1} maxWidth={480} mr={"auto"}>
          <p>
            We express our gratitude to the individuals who support FHI 360
            programs. These gifts enable us to expand our reach while deepening
            our search for solutions to today’s most challenging issues in human
            development. Operating funders for calendar year 2019.
          </p>
        </Box>
      </Box>
    </Layout>
  )
}

const Section = ({ title, children, ...props }) => (
  <Flex
    flexDirection={"column"}
    maxWidth={1200}
    {...props}
    mx={"auto"}
    mb={30}
    minHeight={"50vh"}
    px={20}
  >
    <Box sx={{ borderBottom: "1px solid black" }} mb={50}>
      <H2
        fontWeight={900}
        fontSize={[18, 24]}
        lineHeight={1}
        mb={0}
        sx={{
          textTransform: "uppercase",
          display: "inline-block",
          position: "relative",
        }}
      >
        {title}
        <Box
          sx={{
            height: "15px",
            width: "100%",
            background: "black",
            position: "absolute",
            bottom: 0,
            marginBottom: "-18px",
          }}
        ></Box>
      </H2>
    </Box>
    <Flex flexWrap={"wrap"}>{children}</Flex>
  </Flex>
)

const P = styled(Text)`
  font-size: 14px;
  margin-bottom: 20px;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-weight: 700;
`

P.defaultProps = {
  width: [1, 1 / 3],
  px: 20,
}

export default Funders
