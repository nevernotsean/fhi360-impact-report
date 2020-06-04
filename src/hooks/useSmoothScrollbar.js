import React, { useRef, useEffect } from "react"
import Scrollbar from "smooth-scrollbar"
import styled, { createGlobalStyle } from "styled-components"

const useSmoothScrollbar = (query, options) => {
  const ref = useRef()

  useEffect(() => {
    var dom = document.querySelector(query)

    if (ref.current) dom = ref.current

    Scrollbar.init(dom, options)
  }, [ref, ref.current])

  return ref
}

export const SmoothScrollFull = props => {
  const ref = useRef()

  useSmoothScrollbar("#___gatsby")

  return <FullStyle />
}

const FullStyle = createGlobalStyle`
  #___gatsby {
    width: 100vw;
  height: 100vh;
  overflow: auto;
  }

  #gatsby-focus-wrapper {
    height: auto;
  width: 100%;
  }
`

export default useSmoothScrollbar
