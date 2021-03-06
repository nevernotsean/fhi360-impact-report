import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../sections/Hero"
import Perception from "../sections/Perception/"
import Brave from "../sections/Brave"
import Evidence from "../sections/Evidence"
import Nimble from "../sections/Nimble"
import Innovators from "../sections/Innovators"
import LiveWork from "../sections/LiveWork"
import Outro from "../sections/Outro/"
import { Box } from "rebass/styled-components"

const IndexPage = ({ location }) => (
  <Layout
    sidenavData={data}
    showIntro={true}
    location={location}
    pageTitle={"This is FHI 360"}
  >
    <SEO title="Home" />

    <Box id="sections">
      {data.map(
        ({ component: Component, id }, i) =>
          Component && (
            <React.Fragment key={id + i}>
              <div id={id}></div>
              <Component></Component>
            </React.Fragment>
          )
      )}
    </Box>
  </Layout>
)

const data = [
  {
    id: "hello",
    label: "Hello",
    component: Hero,
  },
  {
    id: "perception",
    label: "Perception",
    component: Perception,
  },
  {
    id: "Evidence",
    label: "Evidence",
    component: Evidence,
  },
  {
    id: "Brave",
    label: "Brave",
    component: Brave,
  },
  {
    id: "Nimble",
    label: "Nimble",
    component: Nimble,
  },
  {
    id: "Innovators",
    label: "Innovators",
    component: Innovators,
  },
  {
    id: "LiveWork",
    label: "Where We Live",
    component: LiveWork,
  },
  {
    id: "Outro",
    label: "Changing",
    component: Outro,
  },
  {
    id: "report",
    label: "2020 Impact Report",
    url: "/reports/2020/report",
  },
]

export default IndexPage
