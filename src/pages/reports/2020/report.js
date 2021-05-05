import React from "react"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import Section from "../../../components/Report/Section2020"
import Nav from "../../../components/Report/Nav"

import data from '../../../data/IR-2020.json'
import hero2020 from '../../../images/hero-report-2020.jpg'
import HeroImageMasthead from '../../../components/Report/HeroImageMasthead';
import report5 from '../../../images/report-2020/AP-DVS-0015.jpg'
import report3 from '../../../images/report-2020/GettyImages-1300391710.jpg'
import report1 from '../../../images/report-2020/Jamaica SCS photo - fhikin_135.jpg'
import report4 from '../../../images/report-2020/Passerelles - tippy tap.jpg'
import report2 from '../../../images/report-2020/photo 21-ACEA.jpg'
import report6 from '../../../images/report-2020/RS2451__MG_7928-hpr.jpg'
import FramedImage from "../../../components/Report/FramedImage"

const images = [
  report1,
  report2,
  report3,
  report4,
  report5,
  report6
]

const impactReport = ({ location }) => {
  return (
    <Layout
      bg={"#f1f1f1"}
      sidenavData={data}
      pageTitle={"2020 Impact Report"}
      location={location}
      altLogo={true}
    >
      <SEO title="Home" />
      <Nav></Nav>
      <HeroImageMasthead headline={"2020<br />Impact Report"} image={hero2020} />
      {data.map((entry, i) => (
        <Section {...entry} key={i}>
          {
            entry.image &&
            <FramedImage
              src={images[entry.image.id]}
              alt={entry.image.alt}
              credit={entry.image.credit}
              objectPosition={'top center'}
            />
          }
        </Section>
      ))}
    </Layout>
  )
}

export default impactReport
