import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SplitSectionLongContent from "./../components/SplitSectionLongContent"
import { Box } from "rebass/styled-components"
import { Lead, H2, H3 } from "../elements/Type"
import Outro from "./../sections/Outro/index"

const TestSection = () => (
  <>
    <Lead>LEAD</Lead>
    <H2 className={"section-title"}>
      LOREM
      <br />
      <span className={"serif"}>IPSUM</span>
    </H2>
    <H3 className={"section-subtitle"}>Lorem ipsum Lorem ipsum</H3>
    <div
      className="divider"
      style={{
        borderTop: "1px solid black",
        marginBottom: "1.45rem",
      }}
    />
    <Box maxWidth={480}>
      <p className={"section-body"}>
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum
      </p>
    </Box>
  </>
)

const Debug = ({ location }) => (
  <Layout location={location}>
    <SEO title="Debug" />

    {/* <Box id="sections">
      <SplitSectionLongContent
        flip={false}
        id={"debug"}
        contentArray={[
          {
            image: "https://via.placeholder.com/2000x2000?text=1",
            imageCredits: "lorem ipsum 1",
            content: TestSection,
            mobileContent: TestSection,
          },
          {
            image: "https://via.placeholder.com/2000x2000?text=2",
            imageCredits: "lorem ipsum 2",
            content: TestSection,
            mobileContent: TestSection,
          },
          {
            image: "https://via.placeholder.com/2000x2000?text=3",
            imageCredits: "lorem ipsum 3",
            content: TestSection,
            mobileContent: TestSection,
          },
        ]}
      ></SplitSectionLongContent>
    </Box> */}
    <Outro></Outro>
  </Layout>
)

export default Debug
