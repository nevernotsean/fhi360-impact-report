import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Masthead from "../components/Report/Masthead"
import Section from "../components/Report/Section"
import StatBlock from "../components/Report/StatBlock"
import FramedImage from "../components/Report/FramedImage"

import tribeJPG from "../images/fro-native-american.jpg"
import { Box } from "rebass"

const impactReport = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Masthead></Masthead>
      <Section {...data[0]}>
        <Box width={[1, 1 / 2]} ml={"auto"}>
          <StatBlock end={9000} duration={2} postfix={"+"}>
            People reached through community engagement activities in the
            Democratic Republic of the Congo.
          </StatBlock>
        </Box>
      </Section>
      <Section {...data[0]}>
        <FramedImage src={tribeJPG}></FramedImage>
      </Section>
    </Layout>
  )
}

const data = [
  // { id: "", title: "", headline: "", project: "", funder: "", body: "" }
  {
    id: "Ebola",
    title: "Crisis Response",
    headline: "Responding in real time to Ebola",
    project: "DRC Ebola Rapid Response",
    funder:
      "U.S. Agency for International Development,<br/>Office of U.S. Foreign Disaster Assistance",
    body:
      "Rapid response and building trust with communities are critical when stopping the spread of infectious disease. During the 2018 Ebola outbreak in the Democratic Republic of the Congo, we worked with hundreds of community leaders who mobilized their communities in prevention, surveillance and control of the disease. Local teams were trained to conduct safe and dignified burials for Ebola victims with the consent of families and communities and responded to 672 community death alerts in North Kivu and Ituri provinces. Our Ebola community engagement activities reached more than 9,000 people, including 679 community leaders in provinces most affected by the outbreak.",
  },
]

export default impactReport
