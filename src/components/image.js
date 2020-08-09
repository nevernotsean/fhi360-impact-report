import React from "react"
import { Image as RebassImage } from "rebass/styled-components"
import { LocomotiveContext } from "./../hooks/useLocomotiveScroll"
import { useInView } from "react-intersection-observer"

const Image = ({
  onInView,
  onLoad,
  lazyload = true,
  src,
  darkSection = false,
  rootMargin = "0% 0px 0% 0px",
  debug,
  sx,
  ...props
}) => {
  const context = React.useContext(LocomotiveContext)

  const [loaded, setLoaded] = React.useState()

  const [imageSrc, setSrc] = React.useState(lazyload ? "" : src)

  const [inViewRef, inView] = useInView({
    rootMargin: darkSection ? "0% 0px 100% 0px" : rootMargin,
    threshold: 0,
    triggerOnce: true,
  })

  React.useEffect(() => {
    if (loaded && context.scroll) {
      // console.log("image loaded")
      context.scroll.update()
    }
  }, [loaded])

  // React.useEffect(() => {
  //   console.log(imageSrc)
  // }, [imageSrc])

  React.useEffect(() => {
    if (inView) {
      if (onInView) onInView()
      debug && console.log("in view", inViewRef)
      setSrc(src)
    }
  }, [inView])

  return (
    <>
      <span ref={inViewRef}></span>
      <RebassImage
        sx={{ visibility: imageSrc == "" && "hidden", ...sx }}
        {...props}
        src={imageSrc}
        onLoad={e => {
          // debug && console.log("LOADED")
          if (onLoad) {
            var dims = e.target.getBoundingClientRect().toJSON()
            // debug && console.log(dims)
            onLoad(dims)
          }
          setLoaded(true)
        }}
        className={inView && "inView"}
      ></RebassImage>
    </>
  )
}

export default Image
