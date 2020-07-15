import React, { useEffect, useContext, createContext } from "react"
import LocomotiveScroll from "locomotive-scroll"

// import { onRouteUpdate } from "../../gatsby-browser"

export const LocomotiveContext = createContext({ scroll: null })

export const useLocomotiveScroll = ({ location, ...options }) => {
  const context = useContext(LocomotiveContext)

  useEffect(() => {
    // console.log("update")
    var el = document.querySelector(options.query)

    let scroll = new LocomotiveScroll({
      el,
      smooth: true,
      scrollFromAnywhere: true,
      ...options,
    })
    scroll.update()

    scroll.on("scroll", func => {
      // Update `data-direction` with scroll direction.
      document.documentElement.setAttribute("data-direction", func.direction)
    })

    context.scroll = scroll
    window.scroll = scroll

    return () => context.scroll.destroy()
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
