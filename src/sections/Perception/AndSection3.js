import React from "react"
import { Lead, H2 } from "../../elements/Type"
import AndSection from "./AndSection"
import { Underlined } from "./../../components/WordNote"

const LeftSide = () => (
  <>
    <Lead>Let's change perception</Lead>
    <H2 className="section-title">
      FHI 360 has been a longtime partner
      <br />
      <span className="serif">of U.S. federal and local governments.</span>
    </H2>
  </>
)

const RightSide = () => (
  <>
    <H2 className="section-title">
      FHI 360 collaborates
      <br />
      <span className="serif">with the private sector, foundations, </span>
    </H2>
    <span className="section-body">
      educational institutions, faith-based organizations, local communities,
      non-U.S. governments and{" "}
      <Underlined duration={0.3} delay={0.5} orange>
        more.
      </Underlined>
    </span>
  </>
)

const AndSection3 = () => {
  return (
    <AndSection>
      <LeftSide />
      <RightSide />
    </AndSection>
  )
}

export default AndSection3
