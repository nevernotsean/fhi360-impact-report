import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../sections/Hero"
import Perception from "../sections/Perception"
import Brave from "../sections/Brave"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero></Hero>
    <Perception></Perception>
    <Brave></Brave>
  </Layout>
)

export default IndexPage
