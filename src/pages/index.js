import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../sections/Hero"
import Perception from "../sections/Perception"
import Brave from "../sections/Brave"
import Evidence from "../sections/Evidence"
import Nimble from "../sections/Nimble"
import Innovators from "../sections/Innovators"
import LiveWork from "../sections/LiveWork"
import Outro from "../components/Outro"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero></Hero>
    <Perception></Perception>
    <Brave></Brave>
    <Evidence></Evidence>
    <Nimble></Nimble>
    <Innovators></Innovators>
    <LiveWork></LiveWork>
    <Outro></Outro>
  </Layout>
)

export default IndexPage
