import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Masthead from "../components/Report/Masthead"
import Section from "../components/Report/Section"
import StatBlock from "../components/Report/StatBlock"
import FramedImage from "../components/Report/FramedImage"

import tribeJPG from "../images/fro-native-american.jpg"
import { Box } from "rebass"
import ReportPullquote from "./../components/Report/Pullquote"
import Nav from "../components/Report/Nav"

const impactReport = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Nav></Nav>
      <Masthead></Masthead>
      <Section {...data[0]}>
        <Box width={[1, 1 / 2]} ml={"auto"}>
          <StatBlock end={9000} duration={2} postfix={"+"}>
            People reached through community engagement activities in the
            Democratic Republic of the Congo.
          </StatBlock>
        </Box>
      </Section>
      <Section {...data[1]}>
        <FramedImage src={tribeJPG}></FramedImage>
      </Section>
      <Section {...data[2]}>
        <Box py={5}>
          <ReportPullquote
            title={"Lorem Ipsum"}
            headline={
              "pull quote lorem ipsum changing fpo lorem ipsum human engagement placeholder only fpo lorem ipsum."
            }
          ></ReportPullquote>
        </Box>
      </Section>
      <Section {...data[3]}>
        <Box width={[1, 1 / 2]} ml={"auto"}>
          <StatBlock end={32.9} decimals={1} duration={2} postfix={"M"}>
            People reached through social media
          </StatBlock>
        </Box>
      </Section>
      <Section {...data[4]}></Section>
      <Section {...data[5]}></Section>
      <Section {...data[6]}></Section>
      <Section {...data[7]}></Section>
      <Section {...data[8]}></Section>
      <Section {...data[9]}></Section>
    </Layout>
  )
}

const data = [
  // { id:"", title:"", headline:"", project:"", funder:"", body:"" }
  {
    title: "Crisis Response",
    headline: "Responding in real time to Ebola",
    body:
      "Rapid response and building trust with communities are critical when stopping the spread of infectious disease. During the 2018 Ebola outbreak in the Democratic Republic of the Congo, we worked with hundreds of community leaders who mobilized their communities in prevention, surveillance and control of the disease. Local teams were trained to conduct safe and dignified burials for Ebola victims with the consent of families and communities and responded to 672 community death alerts in North Kivu and Ituri provinces. Our Ebola community engagement activities reached more than 9,000 people, including 679 community leaders in provinces most affected by the outbreak.",
    project: "DRC Ebola Rapid Response",
    funder:
      "U.S. Agency for International Development<br/>Office of U.S. Foreign Disaster Assistance",
  },
  {
    title: "EDUCATION – U.S.",
    headline: "Building community among Native American tribes",
    body:
      "Across the United States, less than 2 percent of the 46,000 Native American and Alaskan native children who are enrolled in Head Start and Early Head Start programs speak their tribal languages at home. Through the American Indian and Alaska Native Head Start Collaboration Office, FHI 360 is assisting tribal communities to incorporate native languages and cultural traditions into the classroom across 26 states. Learning these languages serves as a protective factor for well-being for native children and aids academic success. Reawakening this cultural heritage also helps bring healing to trauma-induced communities. FHI 360 brings together tribal members, educators and researchers to discuss educational challenges, solutions and practices tailored to participants’ contexts. In 2019, the Collaboration Office developed and co-hosted four statewide early childhood tribal language summits.",

    project: "Head Start",
    funder: "U.S. Department of Health and Human Services",
  },

  {
    title: "EDUCATION – U.S.",
    headline: "Reducing recidivism among young Americans",
    body:
      "Reentering the community after incarceration is difficult and too often unsuccessful. The Compass Rose Collaborative is an FHI 360 initiative supported by the U.S. Department of Labor’s Reentry Program. Compass Rose helps young adults ages 18 to 24 in nine states transition from the justice system into educational programs and jobs. Of the 613 young adults being served in the collaborative’s first cohort, 75 percent have gone back to school, engaged in an apprenticeship or found a job. Less than 1 percent of the participants have been convicted of a new crime within body: 12 months of release from incarceration or being placed on probation.",

    project: "Compass Rose Collaborative",
    funder: "U.S. Department of Labor",
  },

  {
    title: "HEALTH – U.S.",
    headline: "Using social media to end HIV stigma",
    body:
      "Stigma and complacency continue to be major obstacles to addressing HIV in the United States. FHI 360 supports the U.S. Centers for Disease Control and Prevention (CDC) national awareness and antistigma campaign, Let’s Stop HIV Together, which features all aspects of HIV education and many different campaign strategies. FHI 360 has particularly helped reach new audiences with body: essential messaging through social media: The campaign has attained an estimated total of 32.9 million post impressions and more than 13,000 Instagram followers.",

    project: "Let’s Stop HIV Together",
    funder: "U.S. Centers for Disease Control and Prevention",
  },

  {
    title: "EDUCATION – GLOBAL",
    headline: "Building literacy in Ghanaian early learners",
    body:
      "Literacy and numeracy are the foundation of all learning, yet far too many children fail to master these critical skills. During the 2017-2019 academic years, more than 7,200 Ghanaian schools in 100 districts introduced a high-quality early grade reading program. By the end of 2019, 707,843 pupils in kindergarten and primary grades 1 and 2 had been taught using the new reading methods, and more than 51,000 teachers, head teachers and curriculum directors received instructional materials and training in advanced reading instruction methods. An independent evaluation of the early grade reading program found that students in primary grades 1 and 2 significantly increased their average scores on all reading skills tested in a Ghanaian language. In fact, the evaluation noted body: that, “compared with similar programs worldwide, Learning has one of the largest program impacts measured to date.”",

    project: "USAID Partnership for Education: Learning",
    funder: "U.S. Agency for International Development",
  },

  {
    title: "HEALTH – GLOBAL",
    headline: "Reducing costs through private-sector partnerships",
    body:
      "Tuberculosis (TB) is the world’s most deadly infectious disease. Expanding access to state-of-the-art case detection is critical to reducing its spread. Through USAID’s TB Innovations Health Systems Strengthening project, private hospitals and laboratories formed the Philippines Private Sector Diagnostic Consortium to mobilize and coordinate efforts to fight TB. By joining together, consortium members were able to negotiate a 70 percent price reduction for GeneXpert TB diagnostic tests, from an average cost of US$152 per test to US$42, making TB care and treatment more body: affordable for all.",

    project: "TB Innovations Health Systems Strengthening",
    funder: "U.S. Agency for International Development",
  },

  {
    title: "RESEARCH",
    headline: "Leading trailblazing research",
    body:
      "The ECHO Study was the first large-scale, randomized, clinical trial designed to yield high-quality data on the long-standing question of whether hormonal contraception is linked to greater risk of HIV infection. The study found similar risks and benefits associated with use of two hormonal contraceptives — the injectable depot-medroxyprogesterone acetate (DMPA) and a levonorgestrel implant — and one nonhormonal method — the copper intrauterine device (IUD). These data led the World Health Organization to recommend that women at high risk of HIV infection can use all contraceptive methods without restrictions, allowing women to make informed choices. A consortium of global and national institutions, led by FHI 360, the University of Washington, Wits body: Reproductive Health and HIV Institute, and the World Health Organization collaborated with 12 sites in Eswatini, Kenya, South Africa and Zambia.",

    project: "Evidence for Contraceptive Options and HIV Outcomes (ECHO) Study",
    funder:
      "Bill & Melinda Gates Foundation<br/>U.S. Agency for International Development<br/>U.S. President's Emergency Plan for AIDS Relief",
  },

  {
    title: "HEALTH – HIV",
    headline: "Supporting high-impact HIV interventions",
    body:
      "Accessing safe, effective and quality HIV and AIDS services is critical to reducing the spread of HIV. Yet, far too many people who are at risk do not have access to services. Since 2014, the LINKAGES project has reached more than 2 million individuals who are at risk, tested more than 1.3 million people who are at high risk, diagnosed almost 90,000 new infections, and initiated or linked to treatment more than 60,000 people living with HIV. In addition, LINKAGES supports locally led and trusted partners, some of whom have grown into self-reliant, independent organizations body: sustaining the HIV response in their countries.",

    project:
      "Linkages across the Continuum of HIV Services for Key Populations Affected by HIV",
    funder:
      "U.S. Agency for International Development<br/>U.S. President's Emergency Plan for AIDS Relief",
  },

  {
    title: "FHI SOLUTIONS",
    headline: "Measuring the cost of not breastfeeding",
    body:
      "Breastfeeding saves lives and substantially improves the health of both infants and mothers. A new research study, online tool and more than 30 accompanying advocacy briefs illustrate the dramatic costs, both in lives and to the global economy, of not breastfeeding. The interactive online tool, which has been used nearly 5,000 times, shows that almost 700,000 lives annually and 1 billion U.S. dollars a day could be saved through optimal breastfeeding. Policymakers and advocates can use these resources and open-access data to provide persuasive evidence in favor of body: protecting, promoting and supporting breastfeeding best practices.",

    project: "Alive & Thrive",
    funder:
      "Bill & Melinda Gates Foundation<br/>Irish Aid<br/>the Tanoto Foundation, UNICEF, World Bank",
  },
  {
    title: "TECHNOLOGY",
    headline: "Enhancing fishery outcomes",
    body:
      "Artisanal fishers in Senegal typically lack access to timely market prices and have little information on improved processing techniques and limited access to financial services. They also endure higher health risks and poor hygiene at processing sites. FHI 360 partnered with Qualcomm Wireless Reach and the Senegalese Food Security Commission on the development of a mobile app to provide fishermen and fish processors with real-time market information, emergency and early warning weather alerts, and information on healthy processing practices. This new digital tool is now in use at four major fish landing and processing sites. Participants realized a tenfold increase in production and up to 35 percent increases in revenue. The government is planning to extend the body: project to other locales and industries to improve the economic outlook for thousands of Senegalese.",

    project: "Wireless Solutions for Fisheries in Senegal",
    funder: "Qualcomm® Wireless Reach™",
  },
  {
    title: "CIVIL SOCIETY",
    headline: "Activating civil society",
    body:
      "Civil society organizations play a vital role in democratic societies, enabling citizens to solve their own problems, influence policy and hold leaders accountable. Under the Strengthening Civil Society Globally (SCS Global) cooperative agreement with USAID, the project released three new tools focused on more effective youth programming and organizational self-reliance, augmenting a library of more than 50 tools that development practitioners are using to increase the capacity and technical effectiveness of civil society organizations and to enhance young people’s media literacy skills. The tools include the Youth Programming Assessment Tool, and Guidance on Local Philanthropy and Self-Reliance. SCS Global promotes self-reliance among more than 1,000 local civil body: society organizations and media partners across 82 countries.",

    project: "Strengthening Civil Society Globally",
    funder: "U.S. Agency for International Development",
  },
]

export default impactReport
