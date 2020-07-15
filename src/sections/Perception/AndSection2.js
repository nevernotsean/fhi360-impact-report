import React from "react"
import { Lead, H2 } from "../../elements/Type"
import AndSection from "./AndSection"
import { Underlined } from "../../components/WordNote"

const LeftSide = () => (
  <>
    <Lead>Let's change perception</Lead>

    <H2 className="section-title">
      FHI 360 has almost 50 years of experience
      <br />
      <span className="serif">
        solving some of the world’s most complex challenges.
      </span>
    </H2>
  </>
)

const RightSide = () => (
  <>
    <H2 className="section-title">
      FHI 360 has worked for decades
      <br />
      <span className="serif">throughout the United States</span>
    </H2>
    <span className="section-body">
      to reduce inequality and advance health, safety, education and workforce
      development — particularly among those who are{" "}
      <Underlined delay={0.5} orange>
        marginalized
      </Underlined>{" "}
      and{" "}
      <Underlined delay={1} orange>
        underserved
      </Underlined>
      .
    </span>
  </>
)

const AndSection2 = () => {
  return (
    <AndSection>
      <LeftSide />
      <RightSide />
    </AndSection>
  )
}

export default AndSection2
