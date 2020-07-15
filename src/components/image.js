import React from "react"
import { Image as RebassImage } from "rebass/styled-components"
import { LocomotiveContext } from "./../hooks/useLocomotiveScroll"

const Image = props => {
  const [loaded, setLoaded] = React.useState()
  const context = React.useContext(LocomotiveContext)

  React.useEffect(() => {
    if (loaded && context.scroll) {
      console.log("update")
      context.scroll.update()
    }
  }, [loaded])
  return <RebassImage {...props} onLoad={() => setLoaded(true)}></RebassImage>
}

export default Image
