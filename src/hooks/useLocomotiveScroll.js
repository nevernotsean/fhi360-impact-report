import React, {
  useRef,
  useEffect,
  useContext,
  createContext,
  useCallback,
} from "react"
import LocomotiveScroll from "locomotive-scroll"
import styled, { createGlobalStyle } from "styled-components"

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
  const [_, context] = useLocomotiveScroll({ query: "#___gatsby" })

  return (
    <div id="sidebar-target">
      <FullStyle />
      <LocomotiveContext.Provider
        value={context}
        {...props}
      ></LocomotiveContext.Provider>
    </div>
  )
}

const FullStyle = createGlobalStyle`
  /*! locomotive-scroll v3.5.1 | MIT License | https://github.com/locomotivemtl/locomotive-scroll */
html.has-scroll-smooth {
  overflow: hidden; }

html.has-scroll-dragging {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none; }

.has-scroll-smooth body {
  overflow: hidden; }

.has-scroll-smooth [data-scroll-container] {
  min-height: 100vh; }

.c-scrollbar {
  position: absolute;
  right: 0;
  top: 0;
  width: 11px;
  height: 100vh;
  transform-origin: center right;
  transition: transform 0.3s, opacity 0.3s;
  opacity: 0; }
  .c-scrollbar:hover {
    transform: scaleX(1.45); }
  .c-scrollbar:hover, .has-scroll-scrolling .c-scrollbar, .has-scroll-dragging .c-scrollbar {
    opacity: 1; }

.c-scrollbar_thumb {
  position: absolute;
  top: 0;
  right: 0;
  background-color: black;
  opacity: 0.5;
  width: 7px;
  border-radius: 10px;
  margin: 2px;
  cursor: -webkit-grab;
  cursor: grab; }
  .has-scroll-dragging .c-scrollbar_thumb {
    cursor: -webkit-grabbing;
    cursor: grabbing; }
`

export default useLocomotiveScroll
