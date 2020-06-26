import React from "react"
import { Box, Flex } from "rebass"
import styled from "styled-components"
import { H2, H3, Lead } from "../../elements/Type"
import FlexSectionContainer from "../FlexSectionContainer"
import StatBlock from "./StatBlock"

const Section = ({
  children,
  title,
  headline,
  project,
  funder,
  body,
  ...props
}) => {
  return (
    <Container>
      <FlexSectionContainer>
        <TitleRule title={title}></TitleRule>
        <Flex>
          <Box width={[1, 1 / 2, 7 / 16]}>
            <Flex flexDirection={"column"}>
              <H2
                className="headline"
                fontSize={[24, 44, 68]}
                mb={[0, 100]}
                fontWeight={400}
              >
                {headline}
              </H2>

              <H3 className="labelhead" mb={2}>
                Project
              </H3>
              <H3
                className={"project label"}
                dangerouslySetInnerHTML={{ __html: project }}
              ></H3>
              <H3 className="labelhead" mb={2}>
                Funder
              </H3>
              <H3
                className={"funder label"}
                dangerouslySetInnerHTML={{ __html: funder }}
              ></H3>
            </Flex>
          </Box>
          <Flex
            flexDirection={"column"}
            justifyContent={"space-between"}
            width={[1, 9 / 16, 1 / 2]}
            ml={[0, "auto"]}
          >
            <p className={"body"} dangerouslySetInnerHTML={{ __html: body }} />
          </Flex>
        </Flex>
        {children}
      </FlexSectionContainer>
    </Container>
  )
}

const TitleRule = ({ children, title, ...props }) => (
  <Flex {...props} flexDirection={"column"}>
    <div className="title" dangerouslySetInnerHTML={{ __html: title }}></div>
    <div className="hr"></div>
  </Flex>
)

const Container = styled.div`
  .hr {
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
    margin-bottom: 20px;
  }

  .title {
    font-weight: 900;
    text-transform: uppercase;
  }
  .headline {
    font-family: ${({ theme }) => theme.fonts.serif};
    margin-bottom: 50px;
  }

  .label {
    font-size: 16px;
    line-height: 1.25;
    font-weight: 700;
  }
  .labelhead {
    line-height: 1;
    font-size: 16px;
    font-weight: 900;
    text-transform: uppercase;
  }
  .label-hr {
    max-width: 215px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
    margin-bottom: 20px;
  }

  .section-inner {
    margin-top: 100px;
  }

  .project {
    text-decoration: underline;
    margin-bottom: 30px;
  }
`

export default Section