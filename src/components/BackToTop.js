import React from "react"
import { LocomotiveContext } from "./../hooks/useLocomotiveScroll"

const BackToTop = ({ children = "Back to top", ...props }) => {
  const context = React.useContext(LocomotiveContext)
  const [loaded, setLoaded] = React.useState()

  React.useEffect(() => {
    if (context.scroll) {
      // console.log("LOADED")
      setLoaded(true)
    }
  }, [context, context.scroll])

  if (!loaded) return null

  return (
    <div
      className={"clickable"}
      onClick={() => context.scroll && context.scroll.scrollTo(`#main-content`)}
      style={{ cursor: "pointer" }}
      {...props}
    >
      {children}
    </div>
  )
}

export default BackToTop
