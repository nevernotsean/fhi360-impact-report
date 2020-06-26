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
import Outro from "../sections/Outro"
import { Image } from "rebass"

import welcome from "../images/welcome-fpo.gif"

const IndexPage = () => (
  <Layout sidenavData={data}>
    <SEO title="Home" />
    <Image
      width={1}
      height={"100vh"}
      src={welcome}
      sx={{
        objectFit: "cover",
        objectPosition: "center center",
        display: "block",
      }}
    ></Image>
    {data.map(
      ({ component: Component, id }, i) =>
        Component && (
          <React.Fragment key={id + i}>
            <div id={id}></div>
            <Component></Component>
          </React.Fragment>
        )
    )}
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
    label: "LiveWork",
    component: LiveWork,
  },
  {
    id: "Outro",
    label: "Outro",
    component: Outro,
  },
  {
    id: "report",
    label: "Impact Report",
    url: "/report",
  },
]

export default IndexPage
