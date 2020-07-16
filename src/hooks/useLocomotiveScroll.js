import React, { useEffect, useContext, createContext } from "react"
import LocomotiveScroll from "locomotive-scroll"

// import { onRouteUpdate } from "../../gatsby-browser"

export const LocomotiveContext = createContext({ scroll: null })

export const useLocomotiveScroll = ({ location, ...options }) => {
  const context = useContext(LocomotiveContext)

  useEffect(() => {
    console.log("scroll updated")
    var el = document.querySelector(options.query)

    context.scroll = new LocomotiveScroll({
      el,
      smooth: true,
      smoothMobile: false,
      getDirection: true,
      touchMultiplier: 2.5,
      lerp: 0.15,
      ...options,
    })
    context.scroll.update()

    context.scroll.on("scroll", func => {
      // Update `data-direction` with scroll direction.
      document.documentElement.setAttribute("data-direction", func.direction)
    })

    return () => context.scroll && context.scroll.destroy()
  }, [location])

  return context
}

export const LocomotiveScrollFull = ({ options, location, ...props }) => {
  const context = useLocomotiveScroll({
    query: "#main-content",
    location: location,
  })

  return (
    <>
      <LocomotiveContext.Provider
        value={context}
        {...props}
      ></LocomotiveContext.Provider>
    </>
  )
}

export default useLocomotiveScroll
