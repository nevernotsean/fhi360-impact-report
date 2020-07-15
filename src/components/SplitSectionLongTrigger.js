import React from "react"
import { useInView } from "react-intersection-observer"
import { LocomotiveContext } from "./../hooks/useLocomotiveScroll"
import { Box } from "rebass/styled-components"

const SectionTrigger = ({
  setActive,
  setSectionProps,
  index,
  id,
  ...props
}) => {
  const [ref, isInview] = useInView({
    rootMargin: "0px 0px -100% 0px",
    threshold: 0,
  })

  React.useEffect(() => {
    if (isInview) setActive(index)
  }, [isInview])

  return (
    <Box
      ref={ref}
      sx={{ height: "100vh", pointerEvents: "none" }}
      {...props}
    ></Box>
  )
}

export default SectionTrigger
