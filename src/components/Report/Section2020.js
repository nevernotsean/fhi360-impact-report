import React from "react"
import { Box, Flex } from "rebass"
import styled from "styled-components"
import { H2, H3 } from "../../elements/Type"
import FlexSectionContainer from "../FlexSectionContainer"
import BackToTop from "../BackToTop"
import ReportPullquote from "../../components/Report/Pullquote"
import StatBlock from './StatBlock';

const Project = ({ index, link, project, funder, body, result,stat, ...props }) => (
  <>
    <Box mb={3}>
      <H3 className="labelhead" mb={2}>
        Project
      </H3>
      {link ? <a href={link} className={"project label"} target={"_blank"} rel="noreferrer"  dangerouslySetInnerHTML={{ __html: project }}></a> : <p className={"project label"} style={{textDecoration: "none"}} dangerouslySetInnerHTML={{ __html: project }}></p>}
      {/* <span style={{ marginLeft: "10px", fontSize: "16px" }}>〉</span> */}
    </Box>
    {funder && <Box>
      <H3 className="labelhead" mb={2}>
        Funder
      </H3>
      <H3
        className={"funder label"}
        dangerouslySetInnerHTML={{ __html: funder }}
      ></H3>
    </Box>}
    {body && (
      <Box mt={3}><p className={"body"} dangerouslySetInnerHTML={{ __html: body }} /></Box>
    )}

    {result &&
      <Box mt={3}>
        <ReportPullquote title={"Results"} headline={result} streakDelay={index * 200}></ReportPullquote>
      </Box>
    }

    {
      stat && 
      <Box mt={3}>
          <StatBlock {...stat} content={null}>
            {stat.content}
          </StatBlock>
      </Box>
    }
  </>
)

const Section = ({
  children,
  title,
  headline,
  projects = [], // { project: "", "funder": "", link: "", body:"", result: ""}
  body,
  image,
  ...props
}) => {
  const isMultiProject = projects.length > 1
  const bodyClass = isMultiProject ? "body serif multiProject" : "body"

  return (
    <Container {...props}>
      <FlexSectionContainer minHeight={"none"}>
        <TitleRule title={title}></TitleRule>
        <Flex flexWrap={"wrap"}>
          <Box width={[1, 1 / 2]} flex={"1 0 auto"} pr={[0, 50]}>
            <Flex flexDirection={"column"}>
              <H2
                className="headline"
                fontSize={["38px", "6vw", "72px"]}
                lineHeight={["42px", "6.6vw", "80px"]}
                mb={[0, 100]}
                fontWeight={400}
                dangerouslySetInnerHTML={{__html: headline}}
              ></H2>
              {!isMultiProject && (
                <Project project={projects[0].project} funder={projects[0].funder} link={projects[0].link} />
              )}
            </Flex>
          </Box>
          <Flex
            flexDirection={"column"}
            justifyContent={"space-between"}
            width={[1, 1 / 2]}
            flex={"1 0 auto"}
            ml={[0, "auto"]}
          >
            <p className={bodyClass} dangerouslySetInnerHTML={{ __html: body }}/>
            {!isMultiProject && projects[0].result && (
            <Box mt={3}>
              <ReportPullquote title={"Results"} headline={projects[0].result} />
            </Box>
          )}

          {!isMultiProject && projects[0].stat && (
            <Box mt={3}>
                <StatBlock {...projects[0].stat} content={null}>
                  {projects[0].stat.content}
                </StatBlock>
            </Box>
          )}
          </Flex>

          {isMultiProject &&
            (
              <Flex flexWrap={"wrap"} width={[1, 1 / 2]} flex="1 0 auto">
                {projects.map((project, i) => <Box my={50} width={[1, 1 / 2]} pr={[0, 50]} key={i}><Project {...project} index={i}/></Box>)}
              </Flex>
            )}

          
        </Flex>
        {children}
        <BackToTop style={{ cursor: "pointer", textAlign: "left" }} mt={3}>
          <em>Back to top</em>
        </BackToTop>
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
  .clickable {
    cursor: pointer;
  }
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

  a {
    color: ${({ theme }) => theme.colors.black};
  }

  p.body.multiProject {
    font-size: 18pt; 
    line-height: 1.5;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    overflow: hidden;
  }
`

export default Section
