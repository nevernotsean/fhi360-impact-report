import React from "react"
import styled from "styled-components"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import Masthead from "../../../components/Report/Masthead"
import { Flex, Box, Text } from "rebass/styled-components"
import { H2 } from "../../../elements/Type"
import Nav from "../../../components/Report/Nav"
import map from "../../../images/map.jpg"
import Media from "../../../components/Media"
import Image from "./../../../components/image"

const GlobalReach = ({ location }) => {
  return (
    <Layout
      bg={"#f1f1f1"}
      hideMenuButton={true}
      pageTitle={"2020 Impact Report"}
      location={location || "/globalreach"}
      altLogo
    >
      <SEO title="Home" />
      <Nav></Nav>
      <Masthead title={"Where we work"} headline={"2020<br/>Global Reach"}>
        <Box mb={-30} maxWidth={400}>
          <p>
            FHI 360 works in more than 60 countries, including the United States.
          </p>
          <p>
            Representatives of 190 countries participated in our international exchange and scholarship programs in 2020.
          </p>
        </Box>
      </Masthead>
      {/* <Media greaterThanOrEqual={"md"}> */}
        <Box>
          <Image src={map} alt={"map of world"}></Image>
          <Box maxWidth={1200} mx={"auto"} sx={{ position: "relative" }}>
            <Box
              sx={{
                position: ["static", "absolute"],
                width: ["100%", 500],
                right: 0,
                bottom: 0,
                zIndex: 1,
                padding: "50px 20px",
              }}
            >
              <p style={{ textAlign: "right", maxWidth: "435px" }}>
                <small>
                  The boundaries and names on this page do not imply official endorsement or acceptance by <span style={{whiteSpace: 'nowrap'}}>FHI 360</span>. Countries where <span style={{whiteSpace: 'nowrap'}}>FHI 360</span> is registered but does not have an office or activity are not listed.
                </small>
              </p>
            </Box>
          </Box>
        </Box>
      {/* </Media> */}
      <Section title={"Main Offices"} px={20} mb={15}>
        <Box>
          <P>
            <strong>U.S. Offices</strong>
          </P>
          <P>
            Durham, NC (Headquarters)
            <br />
            Washington, DC
          </P>
        </Box>
        <Box>
          <P>
            <strong>Asia Pacific Regional Office</strong>
          </P>
          <P>Bangkok, Thailand</P>
        </Box>
        <Box>
          <P>
            <strong>
              East and Southern Africa
              <br />
              Regional Office
            </strong>
          </P>
          <P>Pretoria, South Africa</P>
        </Box>
      </Section>

      <Section
        title={"Where We Work (Country offices in parentheses)"}
        px={20}
      >
        <P><strong>Afghanistan</strong> (Kabul)</P>
        <P><strong>Albania</strong></P>
        <P><strong>Anguilla</strong></P>
        <P><strong>Argentina</strong></P>
        <P><strong>Australia</strong></P>
        <P><strong>Bangladesh</strong> (Dhaka)</P>
        <P><strong>Benin</strong> (Cotonou)</P>
        <P><strong>Bhutan</strong></P>
        <P><strong>Botswana</strong> (Gaborone)</P>
        <P><strong>Brazil</strong></P>
        <P><strong>Burkina Faso</strong> (Ouagadougou)</P>
        <P><strong>Burundi</strong> (Bujumbura)</P>
        <P><strong>Cambodia</strong> (Phnom Penh)</P>
        <P><strong>Cameroon</strong></P>
        <P><strong>Chad</strong> (N’Djamena)</P>
        <P><strong>China</strong> (Beijing)</P>
        <P><strong>Colombia</strong></P>
        <P><strong>Cote D'Ivoire</strong> (Abidjan)</P>
        <P><strong>Democratic Republic of the Congo</strong> (Kinshasa)</P>
        <P><strong>Denmark</strong></P>
        <P><strong>Djibouti</strong> (Djibouti City)</P>
        <P><strong>Dominican Republic</strong> (Santo Domingo)</P>
        <P><strong>Egypt</strong></P>
        <P><strong>El Salvador</strong> (San Salvador)</P>
        <P><strong>Equatorial Guinea</strong></P>
        <P><strong>Eswatini</strong> (Mbabane)</P>
        <P><strong>Ethiopia</strong> (Addis Ababa)</P>
        <P><strong>Gambia</strong></P>
        <P><strong>Germany</strong></P>


        <P><strong>Ghana</strong> (Accra)</P>
        <P><strong>Greece</strong></P>
        <P><strong>Guatemala</strong> (Guatemala City)</P>
        <P><strong>Guinea</strong> (Conakry)</P>
        <P><strong>Haiti</strong> (Port au Prince)</P>
        <P><strong>Honduras</strong> (Tegucigalpa)</P>
        <P><strong>India</strong> (New Delhi)</P>
        <P><strong>Indonesia</strong> (Jakarta)</P>
        <P><strong>Iraq</strong></P>
        <P><strong>Jamaica</strong> (Kingston)</P>
        <P><strong>Japan</strong></P>
        <P><strong>Jordan</strong> (Amman)</P>
        <P><strong>Kazakhstan</strong> (Almaty)</P>
        <P><strong>Kenya</strong> (Nairobi)</P>
        <P><strong>Kyrgyzstan</strong> (Bishkek)</P>
        <P><strong>Laos</strong> (Vientiane)</P>
        <P><strong>Lesotho</strong> (Maseru)</P>
        <P><strong>Liberia</strong> (Monrovia)</P>
        <P><strong>Madagascar</strong> (Antananarivo)</P>
        <P><strong>Malawi</strong> (Lilongwe)</P>
        <P><strong>Mali</strong> (Bamako)</P>
        <P><strong>Mexico</strong></P>
        <P><strong>Morocco</strong></P>
        <P><strong>Mozambique</strong> (Maputo)</P>
        <P><strong>Myanmar</strong> (Yangon)</P>
        <P><strong>Namibia</strong></P>
        <P><strong>Nepal</strong> (Kathmandu)</P>
        <P><strong>Niger</strong></P>


        <P><strong>Nigeria</strong> (Abuja)</P>
        <P><strong>Pakistan</strong></P>
        <P><strong>Occupied Palestinian Territory</strong></P>
        <P><strong>Papua New Guinea</strong> (Port Moresby)</P>
        <P><strong>Philippines</strong> (Makati City)</P>
        <P><strong>Rwanda</strong></P>
        <P><strong>Senegal</strong> (Dakar)</P>
        <P><strong>Serbia</strong></P>
        <P><strong>Sierra Leone</strong></P>
        <P><strong>Singapore</strong></P>
        <P><strong>South Africa</strong> (Pretoria)</P>
        <P><strong>South Korea</strong></P>
        <P><strong>Spain</strong></P>
        <P><strong>Sri Lanka</strong> (Colombo)</P>
        <P><strong>Tajikistan</strong></P>
        <P><strong>Tanzania</strong> (Dar Es Salaam)</P>
        <P><strong>Thailand</strong> (Bangkok)</P>
        <P><strong>Togo</strong> (Lomé)</P>
        <P><strong>Tunisia</strong> (Tunis)</P>
        <P><strong>Uganda</strong> (Kampala)</P>
        <P><strong>Ukraine</strong></P>
        <P><strong>United Arab Emirates</strong></P>
        <P><strong>United Kingdom</strong> (London)</P>
        <P><strong>United States</strong> (Durham, NC; Washington, DC)</P>
        <P><strong>Vietnam</strong> (Hanoi)</P>
        <P><strong>Yemen</strong> (Aden)</P>
        <P><strong>Zambia</strong> (Lusaka)</P>
        <P><strong>Zimbabwe</strong> (Harare)</P>

      </Section>
      <Box maxWidth={1200} mx={"auto"} px={20}>
        <p style={{ fontSize: "14px", fontWeight: 400, textAlign: "left" }}>
          May 2021
        </p>
      </Box>
    </Layout>
  )
}

const Section = ({ title, children, bg, ...props }) => (
  <Box backgroundColor={bg}>
    <Flex
      flexDirection={"column"}
      maxWidth={1200}
      mx={"auto"}
      mb={30}
      minHeight={"50vh"}
      py={90}
      px={20}
      {...props}
    >
      <Box sx={{ borderBottom: "1px solid black" }} mb={50}>
        <H2
          fontWeight={900}
          fontSize={[16, 18]}
          lineHeight={1}
          mb={10}
          sx={{
            textTransform: "uppercase",
            display: "inline-block",
            position: "relative",
          }}
        >
          {title}
        </H2>
      </Box>
      <Columns>{children}</Columns>
    </Flex>
  </Box>
)

const Columns = props => (
  <Box {...props} sx={{ columnCount: [1, 3], marginX: [0, -20] }}></Box>
)

const P = styled(Text)`
  font-size: 16px;
  margin-bottom: 20px;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-weight: 400;
`

P.defaultProps = {
  px: [0, 20],
}

export default GlobalReach
