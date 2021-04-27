import React from "react"
import styled from "styled-components"
import { Flex, Box, Text } from "rebass/styled-components"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import Masthead from "../../../components/Report/Masthead"
import { H2 } from "../../../elements/Type"
import Nav from "../../../components/Report/Nav"

const Funders = ({ location }) => (
  <Layout
    bg={"#f1f1f1"}
    hideMenuButton={true}
    pageTitle={"2020 Impact Report"}
    location={location}
    altLogo
  >
    <SEO title="Home" />
    <Nav></Nav>
    <Container>
      <Masthead title={"Thank you"} headline={"2020<br/> Funders"}>
        <Box width={[1, 480]}>
          <p>
            FHI 360’s work would not be possible without the generous support of our funders and partners. We appreciate their crucial contribution and value their continued trust.
          </p>
        </Box>
      </Masthead>
      <Section title={"Private Sector"} bg={"#fff"}>
        <P>International Initiative for Impact Evaluation, Inc. (3ie)</P>
        <P>AWR Lloyd</P>
        <P>Converse</P>
        <P>GlaxoSmithKline plc</P>
        <P>Insight Policy Research</P>
        <P>Johnson & Johnson</P>
        <P>Mona Lisa N.V.</P>
        <P>Qualcomm®Wireless Reach™</P>
        <P>Reckitt Benckiser Healthcare (UK) Ltd. (RB)</P>
        <P>Shell Nigeria Exploration and Production Company, Ltd.</P>
        <P>Unilever</P>
        <P>ViiV Healthcare UK (No.3) Ltd.</P>
        <P>Whānau Tahi</P>
        <P>Qualcomm®Wireless Reach™</P>
        <P>Reckitt Benckiser Healthcare (UK) Ltd. (RB)</P>
        <P>Shell Nigeria Exploration and Production Company, Ltd.</P>
        <P>Unilever</P>
        <P>ViiV Healthcare UK (No.3) Ltd.</P>
        <P>Whānau Tahi</P>
      </Section>
      <Section title={"Foundations"}>
        <P>Bill & Melinda Gates Foundation</P>
        <P>CDC Foundation</P>
        <P>Children's Investment Fund Foundation</P>
        <P>The David and Lucile Packard Foundation</P>
        <P>Eleanor Crook Foundation</P>
        <P>FHI Foundation</P>
        <P>GE Foundation</P>
        <P>GHR Foundation</P>
        <P>Gordon and Betty Moore Foundation</P>
        <P>Henry E. Niles Foundation</P>
        <P>The JPB Foundation</P>
        <P>LEGO Foundation</P>
        <P>Margaret A. Cargill Philanthropies</P>
        <P>National Governors Association Center for Best Practices</P>
        <P>Novartis Foundation</P>
        <P>Philanthropy U, Inc.</P>
        <P>The Pfizer Foundation, Inc.</P>
        <P>Robert Wood Johnson Foundation</P>
        <P>Tanoto Foundation</P>
        <P>The Wallace Foundation</P>
        <P>Wallace Genetic Foundation</P>
      </Section>
      <Section title={"NONPROFIT ORGANIZATIONS"} bg={"#fff"}>
        <P>BRAC</P>
        <P>Clinton Health Access Initiative</P>
        <P>Desire Line</P>
        <P>DKT WomanCare (DKT International)</P>
        <P>Dubai Cares</P>
        <P>Girl Scouts of Greater New York</P>
        <P>Infectious Disease Research Institute (IDRI)</P>
        <P>InterAction</P>
        <P>MCI</P>
        <P>PSI</P>
        <P>The END Fund</P>
      </Section>
      <Section title={"Educational Institutions"}>
        <P>Cornell Cooperative Extension of Oneida County</P>
        <P>Johns Hopkins University</P>
        <P>Liverpool School of Tropical Medicine</P>
        <P>Nagasaki University</P>
        <P>Shanghai Institute of Planned Parenthood Research (SIPPR)</P>
        <P>Tufts University</P>
        <P>University of Georgia</P>
        <P>University of Massachusetts Donahue Institute</P>
      </Section>
      <Section title={"MULTILATERAL ORGANIZATIONS"} bg={"#fff"} columnCount={1}>
        <P>The Global Fund to Fight AIDS, Tuberculosis and Malaria</P>
        <P>UNFPA</P>
        <P>UNHCR</P>
        <P>UNICEF</P>
        <P>World Health Organization </P>
        <P>World Bank/IDA</P>
      </Section>
      <Section title={"U.S. FEDERAL AND LOCAL GOVERNMENT AGENCIES"} columnCount={1}>
        <P>Consumer Financial Protection Bureau</P>
        <P>Millennium Challenge Corporation</P>
        <P>New York City Department of Education</P>
        <P>Open World Leadership Center</P>
        <P>U.S. Agency for International Development</P>
        <P>U.S. Department of Agriculture</P>
        <P>U.S. Department of Defense</P>
        <P className="indent1">Department of the Navy</P>
        <P>U.S. Department of Education</P>
        <P>U.S. Department of Health and Human Services</P>
        <P className="indent1">Centers for Disease Control and Prevention</P>
        <P className="indent2">CDC/PEPFAR</P>
        <P className="indent1">Health Resources and Services Administration</P>
        <P className="indent1">National Institutes of Health</P>
        <P className="indent2">National Institute of Allergy and Infectious Diseases</P>
        <P className="indent2">National Institute of Mental Health</P>
        <P className="indent2">National Institute for Health Development</P>
        <P className="indent1">Substance Abuse and Mental Health Services Administration</P>
        <P>U.S. Department of the Interior</P>
        <P>U.S. Department of Labor</P>
        <P>U.S. Department of States</P>
      </Section>
      <Section
        title={"PARTNER COUNTRY GOVERNMENTS AND BILATERAL AGENCIES"}
        bg={"#fff"}
      >
        <P>Department of Foreign Affairs and Trade (Australia)</P>
        <P>Department of Health & Social Care (U.K.)</P>
        <P>Foreign, Commonwealth & Development Office (U.K.)</P>
        <P>Government of Madagascar</P>
        <P>Government of the Netherlands, Ministry of Foreign Trade and Development Cooperation</P>
        <P>International Development Research Centre (Canada)</P>
        <P>Irish Aid, via the Embassy of Ireland in Vietnam</P>
        <P>National Department of Health (Papua New Guinea)</P>
        <P>Newark Trust for Education</P>
      </Section>
      <Box px={20}>
        <p>
          <small>Operating funders for calendar year 2020</small>
        </p>
      </Box>
    </Container>
  </Layout>
)

const Section = ({ title, children, bg, columnCount, ...props }) => (
  <Box backgroundColor={bg}>
    <Flex
      flexDirection={"column"}
      maxWidth={1200}
      {...props}
      mx={"auto"}
      mb={30}
      minHeight={"50vh"}
      py={90}
      px={20}
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
      <Columns columnCount={columnCount}>{children}</Columns>
    </Flex>
  </Box>
)

const Columns = ({columnCount, ...props}) => (
  <Box {...props} sx={{ columnCount: columnCount || [1, 2], marginX: [0, -20] }}></Box>
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
