import React from "react"
import { LocomotiveContext } from "./../hooks/useLocomotiveScroll"
import { Box } from "rebass/styled-components"

const BackToTop = ({ ...props }) => {
  const context = React.useContext(LocomotiveContext)
  const [loaded, setLoaded] = React.useState()

  React.useEffect(() => {
    if (context.scroll) {
      // console.log("LOADED")
      setLoaded(true)
    }
  }, [context, context.scroll])

  return (
    <Box
      className={"clickable"}
      onClick={() => context.scroll && context.scroll.scrollTo(`#main-content`)}
      style={{ cursor: "pointer" }}
      {...props}
    ></Box>
  )
}

export default BackToTop
