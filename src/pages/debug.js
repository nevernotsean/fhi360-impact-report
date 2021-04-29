import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box } from "rebass/styled-components"
import Endcard from './../sections/Outro/EndCard';

const Debug = ({ location }) => (
  <Layout location={location}>
    <SEO title="Debug" />
    <Box sx={{position: 'relative'}}>
      <Endcard triggered={true} />
    </Box>
  </Layout>
)

export default Debug
