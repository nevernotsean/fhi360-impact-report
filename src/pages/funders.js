import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Masthead from "../components/Report/Masthead"
import { Flex, Box, Text } from "rebass/styled-components"
import { H2, Lead } from "../elements/Type"
import styled from "styled-components"
import Nav from "../components/Report/Nav"
import { H3 } from "./../elements/Type"
import Streak from "../assets/svg/streak.svg"
import HandDrawnSVG from "./../components/HandDrawnSVG"
import { LocomotiveContext } from "../hooks/useLocomotiveScroll"
const Funders = () => (
  <Layout bg={"#e2e2e2"} hideMenuButton={true}>
    <SEO title="Home" />
    <Nav></Nav>
    <Container>
      <Masthead title={"Thank you"} headline={"2019<br/>Funders"}>
        <Box width={[1, 480]}>
          <p>
            FHI 360’s work would not be possible without the generous support of
            our funders and partners. We appreciate their crucial contribution
            and value their continued trust.
          </p>
        </Box>
      </Masthead>
      <Section title={"Private Sector"} bg={"#fff"}>
        <Box width={[1, 1 / 3]}>
          <P>Essity</P>
          <P>GlaxoSmithKline plc</P>
          <P>Johnson & Johnson</P>
          <P>Mona Lisa N.V.</P>
          <P>Pfizer, Inc.</P>
        </Box>
        <Box width={[1, 1 / 3]}>
          <P>Procter & Gamble</P>
          <P>Qualcomm® Wireless Reach™</P>
          <P>Sanaria, Inc.</P>
          <P>Shell Nigeria Exploration and Production Company, Ltd.</P>
        </Box>
        <Box width={[1, 1 / 3]}>
          <P>SK Bioscience Co., Ltd.</P>
          <P>Unilever</P>
          <P>ViiV Healthcare UK (No.3) Ltd.</P>
          <P>WCG</P>
        </Box>
      </Section>
      <Section title={"Foundations"}>
        <Box width={[1, 1 / 3]}>
          <P>Bill & Melinda Gates Foundation</P>
          <P>CDC Foundation</P>
          <P>Children’s Investment Fund</P>
          <P>Foundation</P>
          <P>FHI Foundation</P>
          <P>GHR Foundation</P>
        </Box>
        <Box width={[1, 1 / 3]}>
          <P>Gordon and Betty Moore</P>
          <P>Foundation</P>
          <P>Henry E. Niles Foundation</P>
          <P>The JPB Foundation</P>
          <P>Margaret A. Cargill Philanthropies</P>
          <P>Medicines for Malaria Venture</P>
        </Box>

        <Box width={[1, 1 / 3]}>
          <P>National Governors Association</P>
          <P>Center for Best Practices</P>
          <P>The Pfizer Foundation</P>
          <P>Robert Wood Johnson Foundation</P>
          <P>The Rockefeller Foundation</P>
          <P>Wallace Genetic Foundation, Inc.</P>
        </Box>
      </Section>
      <Section title={"NONPROFIT ORGANIZATIONS"} bg={"#fff"}>
        <Box width={[1, 1 / 3]}>
          <P>American Cleaning Institute</P>
          <P>Avenir Health</P>
          <P>BRAC</P>
          <P>Business for Social Responsibility</P>
          <P>CONRAD</P>
          <P>The END Fund</P>
        </Box>
        <Box width={[1, 1 / 3]}>
          <P>Girl Scouts of Greater New York</P>
          <P>PATH</P>
          <P>PATH Vaccine Solutions</P>
          <P>Philanthropy U</P>
          <P>WaterAid</P>
        </Box>
      </Section>
      <Section title={"Educational Institutions"}>
        <Box width={[1, 1 / 3]}>
          <P>Cornell Cooperative Extension of Oneida County</P>
          <P>Emory University</P>
          <P>Hempstead Union Free School District</P>
          <P>Liverpool School of Tropical Medicine</P>
        </Box>
      </Section>
      <Section title={"MULTILATERAL ORGANIZATIONS"} bg={"#fff"}>
        <Box width={[1, 1 / 3]}>
          <P>The Global Fund to Fight AIDS, Tuberculosis and Malaria</P>
          <P>UNAIDS</P>
          <P>UNHCR</P>
          <P>UNICEF</P>
          <P>UNOPS/Water Supply & Sanitation Collaborative Council</P>
          <P>The World Bank/IFC</P>
        </Box>
      </Section>
      <Section title={"U.S. FEDERAL AND LOCAL GOVERNMENT AGENCIES"}>
        <Box width={[1, 1 / 3]}>
          <P>AmeriCorps NCCC</P>
          <P>Millennium Challenge Corporation</P>
          <P>National Science Foundation</P>
          <P>New York City Department of Education</P>
          <P>Open World Leadership Center</P>
          <P>U.S. Agency for International Development</P>
          <P>U.S. Department of Agriculture</P>
          <P>U.S. Department of Defense</P>
          <P className="indent1">
            U.S. Army Medical Research and Material Command
          </P>
          <P className="indent1">U.S. Navy</P>
          <P>U.S. Department of Education</P>
          <P>U.S. Department of Health and Human Services</P>
          <P className="indent1">Centers for Disease Control and Prevention</P>
          <P className="indent1">
            Health Resources and Services Administration
          </P>
          <P className="indent1">National Institutes of Health</P>
          <P className="indent2">
            National Institute of Allergy and Infectious Diseases
          </P>
          <P className="indent1">
            Substance Abuse and Mental Health Services Administration
          </P>
          <P>U.S. Department of Labor</P>
          <P>U.S. Department of State</P>
        </Box>
      </Section>
      <Section
        title={"PARTNER COUNTRY GOVERNMENTS AND BILATERAL AGENCIES"}
        bg={"#fff"}
      >
        <Box width={[1, 1 / 3]}>
          <P>Department of Foreign Affairs and Trade (Australia)</P>
          <P>Department for International Development (U.K.)</P>
          <P>Foreign and Commonwealth Office (U.K.)</P>
          <P>Government of Equatorial Guinea</P>
          <P>Government of the Netherlands</P>
          <P>International Development Research Centre (Canada)</P>
          <P>National Cancer Centre Singapore</P>
          <P>Secretary of State for Health and Social Care (U.K.)</P>
        </Box>
      </Section>
      <Box width={1} minHeight={"100vh"}>
        <Flex
          width={1}
          maxWidth={1200}
          mx={"auto"}
          minHeight={"100vh"}
          flexDirection={"column"}
          justifyContent="center"
          alignItems="center"
          sx={{ textAlign: "center" }}
        >
          <Lead>
            Operating funders
            <br />
            for calendar year 2019
          </Lead>
          <H2 className={"section-title"}>
            We express our
            <br />
            gratitude to the individuals
            <br />
            <span className="serif">who support FHI 360 programs.</span>
          </H2>
          <p>
            These gifts enable us to expand our reach while deepening our search
            <br />
            for solutions to today’s most challenging issues in human
            development.
          </p>
          <Box width={1 / 2} maxWidth={300} mx={"auto"}>
            <HandDrawnSVG svg={Streak} duration={0.3}></HandDrawnSVG>
          </Box>
        </Flex>
      </Box>
    </Container>
  </Layout>
)

const Section = ({ title, children, bg, ...props }) => (
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
      <Flex sx={{ marginX: [0, -20] }}>{children}</Flex>
    </Flex>
  </Box>
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
