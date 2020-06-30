import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Masthead from "../components/Report/Masthead"
import { Flex, Box, Image } from "rebass/styled-components"
import { H2 } from "../elements/Type"
import Nav from "../components/Report/Nav"
import styled from "styled-components"

import map from "../images/map.jpg"

const GlobalReach = () => {
  return (
    <Layout bg={"#e2e2e2"} hideMenuButton={true}>
      <SEO title="Home" />
      <Nav></Nav>
      <Masthead title={"Where we work"} headline={"2019<br/>Global Reach"}>
        <Box mb={50} maxWidth={400}>
          <p>
            FHI 360 serves more than 60 countries, including the United States.
          </p>
          <p>
            Representatives of 170 countries participated in our international
            exchange and scholarship programs in 2019.
          </p>
        </Box>
      </Masthead>
      <Image src={map}></Image>
      <Section px={20}>
        <StyledTable border="0" cellspacing="0" cellpadding="0">
          <thead>
            <tr>
              <th align="left" valign="top">
                Activities
              </th>
              <th align="left" valign="top">
                Offices
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td width="50%" align="left" valign="top">
                Afghanistan{" "}
              </td>
              <td width="50%" align="left" valign="top">
                Kabul
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Angola
              </td>
              <td width="50%" align="left" valign="top">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Argentina
              </td>
              <td width="50%" align="left" valign="top">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Azerbaijan
              </td>
              <td width="50%" align="left" valign="top">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Bahamas
              </td>
              <td width="50%" align="left" valign="top">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Bangladesh
              </td>
              <td width="50%" align="left" valign="top">
                Dhaka
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Barbados
              </td>
              <td width="50%" align="left" valign="top">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Benin
              </td>
              <td width="50%" align="left" valign="top">
                Cotonou
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Bosnia and Herzegovina
              </td>
              <td width="50%" align="left" valign="top">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Botswana
              </td>
              <td width="50%" align="left" valign="top">
                Gabarone
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Brazil{" "}
              </td>
              <td width="50%" align="left" valign="top">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Burkina Faso
              </td>
              <td width="50%" align="left" valign="top">
                Ouagadougou
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Burundi
              </td>
              <td width="50%" align="left" valign="top">
                Bujumbura
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Cambodia
              </td>
              <td width="50%" align="left" valign="top">
                Phnom Penh
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Cameroon{" "}
              </td>
              <td width="50%" align="left" valign="top">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Chad{" "}
              </td>
              <td width="50%" align="left" valign="top">
                N’Djamena
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Chile{" "}
              </td>
              <td width="50%" align="left" valign="top">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                China{" "}
              </td>
              <td width="50%" align="left" valign="top">
                Beijing
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                The Congo{" "}
              </td>
              <td width="50%" align="left" valign="top">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Colombia{" "}
              </td>
              <td width="50%" align="left" valign="top">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Costa Rica{" "}
              </td>
              <td width="50%" align="left" valign="top">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Côte d'Ivoire{" "}
              </td>
              <td width="50%" align="left" valign="top">
                Abidjan
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Democratic Republic of the Congo{" "}
              </td>
              <td width="50%" align="left" valign="top">
                Kinshasa
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Djibouti{" "}
              </td>
              <td width="50%" align="left" valign="top">
                Djibouti City
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Dominican Republic{" "}
              </td>
              <td width="50%" align="left" valign="top">
                Santo Domingo
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Ecuador{" "}
              </td>
              <td width="50%" align="left" valign="top">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                El Salvador{" "}
              </td>
              <td width="50%" align="left" valign="top">
                San Salvador
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Equatorial Guinea{" "}
              </td>
              <td width="50%" align="left" valign="top">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Eswatini{" "}
              </td>
              <td width="50%" align="left" valign="top">
                Mbabane
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Ethiopia{" "}
              </td>
              <td width="50%" align="left" valign="top">
                Addis Ababa
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                France*
              </td>
              <td width="50%" align="left" valign="top">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Gabon{" "}
              </td>
              <td width="50%" align="left" valign="top">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                The Gambia{" "}
              </td>
              <td width="50%" align="left" valign="top">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Ghana{" "}
              </td>
              <td width="50%" align="left" valign="top">
                Accra
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Guatemala{" "}
              </td>
              <td width="50%" align="left" valign="top">
                Guatemala City
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Guinea{" "}
              </td>
              <td width="50%" align="left" valign="top">
                Conakry
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Haiti{" "}
              </td>
              <td width="50%" align="left" valign="top">
                Port au Prince
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Honduras{" "}
              </td>
              <td width="50%" align="left" valign="top">
                Tegucigalpa
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                India{" "}
              </td>
              <td width="50%" align="left" valign="top">
                New Delhi
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Indonesia{" "}
              </td>
              <td width="50%" align="left" valign="top">
                Jakarta
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Ireland{" "}
              </td>
              <td width="50%" align="left" valign="top">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Israel{" "}
              </td>
              <td width="50%" align="left" valign="top">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Jamaica{" "}
              </td>
              <td width="50%" align="left" valign="top">
                Kingston
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Jordan{" "}
              </td>
              <td width="50%" align="left" valign="top">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Kenya{" "}
              </td>
              <td width="50%" align="left" valign="top">
                Nairobi
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Kosovo{" "}
              </td>
              <td width="50%" align="left" valign="top">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Kyrgyzstan{" "}
              </td>
              <td width="50%" align="left" valign="top">
                Bishkek
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Laos{" "}
              </td>
              <td width="50%" align="left" valign="top">
                Vientiane
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Lesotho
              </td>
              <td width="50%" align="left" valign="top">
                Maseru
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Liberia{" "}
              </td>
              <td width="50%" align="left" valign="top">
                Monrovia
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Madagascar{" "}
              </td>
              <td width="50%" align="left" valign="top">
                Antananarivo
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Malawi{" "}
              </td>
              <td width="50%" align="left" valign="top">
                Lilongwe
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Mali{" "}
              </td>
              <td width="50%" align="left" valign="top">
                Bamako
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Mexico{" "}
              </td>
              <td width="50%" align="left" valign="top">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Montenegro{" "}
              </td>
              <td width="50%" align="left" valign="top">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Morocco{" "}
              </td>
              <td width="50%" align="left" valign="top">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Mozambique
              </td>
              <td width="50%" align="left" valign="top">
                Maputo
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Myanmar (Burma)
              </td>
              <td width="50%" align="left" valign="top">
                Yangon
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Namibia
              </td>
              <td width="50%" align="left" valign="top">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Nepal
              </td>
              <td width="50%" align="left" valign="top">
                Kathmandu
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                New Zealand
              </td>
              <td width="50%" align="left" valign="top">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Nicaragua
              </td>
              <td width="50%" align="left" valign="top">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Niger
              </td>
              <td width="50%" align="left" valign="top">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Nigeria
              </td>
              <td width="50%" align="left" valign="top">
                Abuja
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                North Macedonia
              </td>
              <td width="50%" align="left" valign="top">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Panama
              </td>
              <td width="50%" align="left" valign="top">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Papua New Guinea
              </td>
              <td width="50%" align="left" valign="top">
                Port Moresby
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Peru
              </td>
              <td width="50%" align="left" valign="top">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Philippines
              </td>
              <td width="50%" align="left" valign="top">
                Makati City
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Qatar
              </td>
              <td width="50%" align="left" valign="top">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Rwanda
              </td>
              <td width="50%" align="left" valign="top">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Senegal
              </td>
              <td width="50%" align="left" valign="top">
                Dakar
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Serbia
              </td>
              <td width="50%" align="left" valign="top">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Sierra Leone
              </td>
              <td width="50%" align="left" valign="top">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                South Africa
              </td>
              <td width="50%" align="left" valign="top">
                Pretoria
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Sri Lanka
              </td>
              <td width="50%" align="left" valign="top">
                Colombo
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Suriname
              </td>
              <td width="50%" align="left" valign="top">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Sweden
              </td>
              <td width="50%" align="left" valign="top">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Tanzania
              </td>
              <td width="50%" align="left" valign="top">
                Dar Es Salaam
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Thailand&nbsp;
              </td>
              <td width="50%" align="left" valign="top">
                Bangkok
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Togo
              </td>
              <td width="50%" align="left" valign="top">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Trinidad and Tobago
              </td>
              <td width="50%" align="left" valign="top">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Tunisia
              </td>
              <td width="50%" align="left" valign="top">
                Tunis
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Uganda
              </td>
              <td width="50%" align="left" valign="top">
                Kampala
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Ukraine
              </td>
              <td width="50%" align="left" valign="top">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                United Kingdom
              </td>
              <td width="50%" align="left" valign="top">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                United States**
              </td>
              <td width="50%" align="left" valign="top">
                Durham, NC; Washington, DC
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Vietnam
              </td>
              <td width="50%" align="left" valign="top">
                Hanoi
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Yemen
              </td>
              <td width="50%" align="left" valign="top">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Zambia
              </td>
              <td width="50%" align="left" valign="top">
                Lusaka
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                Zimbabwe
              </td>
              <td width="50%" align="left" valign="top">
                Harare
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                FHI 360 Asia Pacific Regional Office
              </td>
              <td width="50%" align="left" valign="top">
                Bangkok, Thailand
              </td>
            </tr>
            <tr>
              <td width="50%" align="left" valign="top">
                FHI 360 East and Southern Africa Regional Office
              </td>
              <td width="50%" align="left" valign="top">
                Pretoria, South Africa
              </td>
            </tr>
          </tbody>
        </StyledTable>
      </Section>
      <Box maxWidth={1200} mx={"auto"} px={20}>
        <p style={{ fontSize: "14px", fontWeight: 400, textAlign: "right" }}>
          JUNE 2020
        </p>
        <p style={{ fontSize: "14px", fontWeight: 400 }}>
          *Guadeloupe and Martinique, not mainland France.
          <br />
          **Includes Puerto Rico.
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
      {...props}
      mx={"auto"}
      mb={30}
      minHeight={"50vh"}
      pt={90}
      px={20}
    >
      <Flex sx={{ marginX: [0, -20] }} {...props}>
        {children}
      </Flex>
    </Flex>
  </Box>
)

const StyledTable = styled.table`
  th {
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 900;
    border-color: ${({ theme }) => theme.colors.black};
  }
  tbody tr td {
    font-size: 14px;
    border-color: ${({ theme }) => theme.colors.white};

    padding-top: 0.525rem;
    padding-bottom: calc(0.525rem - 1px);
  }
  td:first-child {
    font-weight: bold;
  }
`

export default GlobalReach
