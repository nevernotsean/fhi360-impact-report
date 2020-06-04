import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import { Flex, Box } from "reflexbox"
import styled from "styled-components"

// import theme from "../styles/index"
import Hero from "../components/Hero"
import Perception from "../components/Perception"
import Brave from "../components/Brave"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero></Hero>
    <Perception></Perception>
    <Brave></Brave>
  </Layout>
)

export default IndexPage
