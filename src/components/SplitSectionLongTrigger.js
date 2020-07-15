import React from "react"
import { useInView } from "react-intersection-observer"
import { LocomotiveContext } from "./../hooks/useLocomotiveScroll"
import { Box } from "rebass/styled-components"

const SectionTrigger = ({
  setActive,
  activeSection,
  setSectionProps,
  index,
  id,
  ...props
}) => {
  const [ref, isInview] = useInView({
    rootMargin: "0px 0px -100% 0px",
    threshold: 0,
  })

  const sectionId = `${id}-${index}`
  const [loaded, setLoaded] = React.useState()
  const context = React.useContext(LocomotiveContext)

  React.useState(() => {
    setLoaded(true)
  }, [])

  React.useEffect(() => {
    if (isInview) {
      // console.log(index, "active")
      setActive(index)
    }
  }, [isInview])

  const callback = React.useCallback(
    (value, type, props) => {
      if (value !== sectionId) return

      // console.log(props.top, props.bottom, activeSection, index)

      setSectionProps({ top: props.top, bottom: props.bottom })
    },
    [setSectionProps, sectionId]
  )

  React.useEffect(() => {
    if (!loaded) return
    if (!context || !context.scroll) return

    context.scroll.on("call", callback)
  }, [loaded, setSectionProps, isInview])

  return (
    <Box
      ref={ref}
      data-scroll
      data-scroll-call={sectionId}
      sx={{ height: "100vh", pointerEvents: "none" }}
    ></Box>
  )
}

export default SectionTrigger
