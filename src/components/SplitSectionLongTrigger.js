import React from "react"
import { useInView } from "react-intersection-observer"
import { LocomotiveContext } from "./../hooks/useLocomotiveScroll"
import { Box } from "rebass/styled-components"
import shortid from "shortid"

const SectionTrigger = ({
  setActive,
  activeSection,
  setSectionProps,
  index,
  ...props
}) => {
  const [ref, isInview] = useInView({
    rootMargin: "0px 0px -100% 0px",
    threshold: 0,
  })

  const id = React.useMemo(() => shortid(), [])
  const [loaded, setLoaded] = React.useState()
  const context = React.useContext(LocomotiveContext)

  // React.useEffect(() => {
  //   if (id) console.log(id, "id")
  // }, [id])

  React.useState(() => {
    setLoaded(true)
  }, [])

  React.useEffect(() => {
    if (isInview) {
      console.log(index, "active")
      setActive(index)
    }
  }, [isInview])

  React.useEffect(() => {
    if (!loaded) return
    if (!context || !context.scroll) return

    context.scroll.on("call", (value, type, props) => {
      if (value != id) return
      if (activeSection == index) return

      // console.log(value, id, props.top)
      setSectionProps({ top: props.top, bottom: props.bottom })

      // else setSectionProps(null)
    })
  }, [loaded, isInview, setSectionProps])

  return (
    <Box
      ref={ref}
      data-scroll
      data-scroll-call={id}
      sx={{ height: "100vh", pointerEvents: "none" }}
    ></Box>
  )
}

export default SectionTrigger
