import React, { useRef, useEffect, useContext, createContext } from "react"
import LocomotiveScroll from "locomotive-scroll"

// import { onRouteUpdate } from "../../gatsby-browser"

export const LocomotiveContext = createContext({ scroll: null })

export const useLocomotiveScroll = (options, ref) => {
  const tempRef = useRef()

  if (!ref) ref = tempRef

  const context = useContext(LocomotiveContext)

  useEffect(() => {
    var el = document.querySelector(options.query)

    if (ref.current) el = ref.current

    context.scroll = new LocomotiveScroll({
      el,
      smooth: true,
      scrollFromAnywhere: true,
      ...options,
    })

    return () => context.scroll.destroy()
  }, [ref, ref.current])

  return [ref, context]
}

export const LocomotiveScrollFull = ({ options, ...props }) => {
  const [_, context] = useLocomotiveScroll({ query: "#main-content" })

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
