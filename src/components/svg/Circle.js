import React from "react"
import shortid from "shortid"

const Circle = () => {
  const id = React.useMemo(() => shortid())
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 208.41 102.1">
      <defs>
        <clipPath
          id={`clip-path-circle-${id}`}
          transform="translate(6.31 5.95)"
        >
          <path
            id="circle-clip"
            d="M25.22,64.64c.83.25,1.68.43,2.48.74,1.82.72,3.61,1.49,5.41,2.25C34,68,35,68,35.44,69.05c.27.58,1.47.45,1.76-.34.48,1.88,1.87,1,2.89,1.25a113.23,113.23,0,0,0,18.63,2.23c3.31.15,6.68,0,9.91.6a59.63,59.63,0,0,0,9.69.47c6.3.1,12.61-.32,18.9-.76,6.11-.42,12.21-1.06,18.3-1.76,3.76-.43,7.49-1.18,11.23-1.74,2.68-.41,5.37-.73,8.05-1.13,1.26-.19,2.5-.48,3.74-.73,4.8-1,9.59-2,14.4-3,1.65-.32,3.35-.41,5-.6l.1.43-7.85,1.77,0,.58h3.17c1-.34,2-.79,3.06-1,2.7-.64,5.43-1.2,8.14-1.78,3.9-.83,7.79-1.68,11.69-2.47a6.93,6.93,0,0,1,2.91,0,13.36,13.36,0,0,0,1.34.87,1.26,1.26,0,0,1,0,2.11,9.19,9.19,0,0,1-2.22,1.15c-3.55,1.21-7.12,2.33-10.66,3.53-.83.29-1.6.76-2.63,1.25,2.4-.46,4.49-.89,6.59-1.26s3.8-1.93,6.33-1.56c-.36.3-.45.43-.58.48a85.24,85.24,0,0,1-13,4c-3.13.63-6.22,1.42-9.34,2.11-4,.89-8.09,1.85-12.17,2.58-7.1,1.27-14.23,2.42-21.35,3.53-4.88.77-9.83,1.18-14.66,2.16-5.14,1-10.35,1.19-15.52,1.76-1.94.21-3.91.23-5.87.26-7.51.1-15,.38-22.53.18-7.93-.21-15.87-.74-23.78-1.43a47.39,47.39,0,0,1-8.69-2.09c-2.75-.79-5.43-1.79-8.15-2.7l-.18.43,10,4.28-.06.25a1.44,1.44,0,0,1-.51,0c-3.94-1.73-8-3.24-11.76-5.31-2.46-1.35-4.47-3.53-6.69-5.33a1.91,1.91,0,0,0-.56-.44c-2.42-.82-3.41-3.07-4.9-4.82-.67-.78-1.26-1.63-1.89-2.44a8.92,8.92,0,0,1-.68-.84C4,61.88,2.87,60,1.79,58.06a8.07,8.07,0,0,1-.52-1.81C1,55.12.6,54,.41,52.87a16.77,16.77,0,0,1-.1-2.66c0-.23.17-.51.09-.68-.85-1.69-.15-3.31.28-4.89.57-2.06,1.31-4.07,2.07-6.08a11.06,11.06,0,0,1,1.17-1.77C5.11,35,6.28,33.11,7.46,31.27l.24.35c.37.08.92.34,1.09.19a1.5,1.5,0,0,0,.5-1.2c-.25-1,.22-1,.7-.89a29,29,0,0,1,2.88-2.81c2.23-1.66,4.55-3.21,6.86-4.76,2.1-1.4,4.17-2.86,6.38-4.09a75.76,75.76,0,0,1,7.27-3.49c2-.86,4.17-1.48,6.26-2.2l-1.65,1,.07.15,1-.29-.09.54.24.14,1.4-1.44-1-.09c1.69-.73,3.38-1.49,5.09-2.21,1.11-.47,2.25-.9,3.38-1.35a1.38,1.38,0,0,1,.45-.17,7.88,7.88,0,0,0,4-1.22c.07-.05.22,0,.42.09l-.21,1.6L57.28,7l.18.34-.65.4,0,.22,1.36-.25-.13-1.09-2.74.59-.08-.26c1-.3,1.91-.6,2.88-.87.16-.05.51,0,.53.14.35,1.53,1.4,1,2.32.81,1.36-.24,2.56-.95,4-1.15,1.1-.16,2.09-1,3.34-1.69l-3.76.68a64.29,64.29,0,0,1,18-3.36L73.1,3.07l0,.4h2.53a2.09,2.09,0,0,1,3.07-.35A16.72,16.72,0,0,1,81,2.2c.32-.08.74.32,1.12.34s.92-.19,1.38-.15A24.85,24.85,0,0,1,86,2.76,2.47,2.47,0,0,0,88.44,2,1,1,0,0,1,90,1.87c.45.46.92.62,1.35-.09a.94.94,0,0,1,.76-.36c3.15.31,6.27-.19,9.4-.25,4.7-.08,9.42-.06,14.1.26,3.77.26,7.56.18,11.31.67,5,.67,10.05,1.37,15.07,2.07,1.54.22,3.09.43,4.61.75a116.35,116.35,0,0,1,17.95,4.94.92.92,0,0,1,.56.57l-3.53-1c-1.19-.32-2.38-.64-3.58-.92s-2.46-.5-3.69-.75l-.09.37c2.25.62,4.53,1.16,6.75,1.87,3.11,1,6.19,2.11,9.28,3.2,1.47.52,2.93,1,4.37,1.65,2.31,1,4.91,1.63,6.8,3.14,1.48,1.18,3.31,1.31,4.64,2.49a4.28,4.28,0,0,1,1.12,1.5c-4.86-.53-9.19-2.86-14-3.48,1.5,1.66,3.8,1.49,5.69,2.18l-.18.42-9.21-2.64.35-1.07-.31-.26-1.12,1.15L167,18.06q-6.1-1.15-12.21-2.29c-1.26-.23-2.53-.33-3.78-.6s-2.44.29-3.52-.56c-.05,0-.91-.44-.74.43a4.76,4.76,0,0,1-.75.07c-.57,0-1.14-.13-1.71-.19l-.06.44L152,16.48l-.05.38c-4.57-.72-9.25-.58-13.77-1.73l.05-.46,4.49.45.07-.27c-.57-.15-1.14-.35-1.72-.45-.75-.12-1.51-.17-2.26-.26s-1.44-.13-1.23,1c-2.83-.19-5.52-.38-8.23-.53-1.82-.11-3.66-.16-5.49-.23-3-.13-6-.34-9-.36-4.62,0-9.24,0-13.87.12-2.5.05-5,.18-7.51.33-.85.05-1.69.29-2.54.4a1.88,1.88,0,0,1-.6-.12,2.59,2.59,0,0,1,.45-.43c.45-.29.93-.54,1.39-.8L92,13.14l-3.36,1.31.22.44a39.25,39.25,0,0,1-4.51,1.36c-2.08.38-4.21.43-6.29.76s-3.94.79-5.9,1.25c-1.09.26-2.15.64-3.23.93-1.38.36-2.8.63-4.17,1s-2.53.94-3.82,1.35c-1,.32-2.09.5-3.13.77-1.74.44-3.5.83-5.2,1.39-.79.26-1.4,1.1-2.18,1.26a43.62,43.62,0,0,0-6.81,2.2,6.85,6.85,0,0,1-.91.1,12.89,12.89,0,0,0-1.38.41c-.24.1-.44.31-.69.39-2.14.68-4.33,1.21-6.41,2-1.87.75-3.59,1.86-5.41,2.75a6.18,6.18,0,0,0-2.77,1.83c-.63.87-2,1.13-2.95,1.82-3.53,2.59-7.33,4.89-10.2,8.27-1.34,1.57-3,3.06-3.5,5.16-.69,2.78-.4,3.19,2,4.9.66.48,1,1.33,1.65,1.91a22.66,22.66,0,0,0,2.88,2.49c2.92,2,5.75,4.19,9.2,5.28A.29.29,0,0,1,25.22,64.64Zm85.88,7.73.07.5,16.32-2.46-.06-.44ZM92.45,11.14l-.15-.41L85,11.7l0,.33c2.23-.11,4.47-.2,6.7-.34C92,11.67,92.22,11.33,92.45,11.14Zm9.79,2a3.09,3.09,0,0,0-4.16.4Zm31.85,56,0,.44a15,15,0,0,0,1.89-.23c.23-.06.4-.43.59-.65-.26-.12-.56-.39-.77-.32A13.79,13.79,0,0,0,134.09,69.13ZM12.43,28.72c1.39.35,1.48-.81,2-1.46C13.34,27.14,12.76,27.65,12.43,28.72ZM143.9,67.59c.91-.06,1.65-.08,2.38-.17a1,1,0,0,0,.65-.39.61.61,0,0,0-.23-.57,1.21,1.21,0,0,0-.87-.07A21.37,21.37,0,0,0,143.9,67.59Zm-3.07,1c-1.05-1.48-1.88-.45-2.7-.3v.3ZM104.19,73.1l0,.32c1.37.25,3.27-.07,3.55-.67Zm-54.43-64c1.35,1.41,1.64-.14,2.31-.73Zm17.67,6.28,0,.17h2.81l.28-1.1ZM19.19,23.72l.23.22,1.77-1.3-.11-.19-1.7.29ZM128.37,69.8l0,.38,2.54-.29-.07-.5ZM13.76,75.22l-1,1a24.46,24.46,0,0,1,2.93,1.32,72.56,72.56,0,0,0,13.9,6C37.21,86.16,45,87,53,87.31c.31,0,.62-.27.84-.38a5.46,5.46,0,0,0,1.44.52c3.53.2,7.07.37,10.61.49,1,0,2.27.28,2.87-.22,1.1-.92,1.63.92,2.46.19l-.6-.51a272.8,272.8,0,0,0,48.77-4.25l-.06-.58-15.07,2.12-.06-.36,1.06-.28a12.5,12.5,0,0,0-2,.11c-2.53.32-5.06.73-7.6,1-4.16.35-8.33.66-12.5.85-4,.19-8,.3-11.95.3s-7.9-.19-11.84-.34c-4.11-.15-8.23-.22-12.32-.57A59.16,59.16,0,0,1,33.9,83.09a1.81,1.81,0,0,0-.89,0c-.19,1.2-.9.41-1.29.29-2.51-.79-5-1.59-7.48-2.5s-4.52-2.5-7.12-3.12c-1.26-.3-2.27-1.65-3.39-2.53Zm20.49,10.7a76.81,76.81,0,0,1-18.2-7c11.47,7.23,24.25,9.29,37.56,9.27C47.13,87.63,40.6,87.53,34.25,85.92Zm58.22,1.84a196,196,0,0,0,26.1-3.38l-26.11,3ZM48.09,69.86a2.48,2.48,0,0,0,.74.31q10,.61,20,1.21c.11,0,.23-.08.62-.23l-.77-.1c-3.74-.23-7.48-.47-11.22-.68-3.14-.18-6.28-.33-9.42-.49ZM13.73,75.23C9,72.1,5.94,67.65,3.62,62.57a5,5,0,0,0,.14.67,24.86,24.86,0,0,0,4.31,7.9,12.55,12.55,0,0,0,5.69,4.08ZM120.25,83,133,80.73c-.84-.7-8.34.59-12.82,1.9ZM69.72,88.5,54.9,88v.38l14.81.38Zm94.55-26,8.37-2-.07-.33c-2,.41-4,.75-6,1.25a11.79,11.79,0,0,0-2.31,1.14Zm-139.65.73c-1.74-.91-3.43-1.93-5.13-2.9l0,0a4.73,4.73,0,0,0,.88,1.16c1.55,1.07,3.16,2.06,4.75,3.08a.29.29,0,0,1,.08.08A1,1,0,0,0,24.62,63.24Zm56.13,24.6c-.91,0-2.38-.34-2.63.06-.61,1-1.36.58-2,.61-1.66.08-3.33,0-5,0a19.66,19.66,0,0,0,4.4.08c1.23-.17,2.64.78,3.76-.57.21-.25,1,0,1.49,0Zm47.35-5.38-7.3,1.32.06.34,7.27-1.38ZM108.38.34h7.14V.15h-7.14Zm55.89,62.18c-.4-.13-.83-.43-1.2-.36a20.61,20.61,0,0,0-2.75.72,3,3,0,0,0-.71.48l.11.32,4.55-1.17ZM107.16,0h-7.6V.22h7.6ZM48.07,69.89l-5.21-1-.08.65,5.31.27ZM85.79,87.67a3.14,3.14,0,0,0-.53,0,13.27,13.27,0,0,1-1.63.38c-1.2.11-2.4.13-3.6.19l0,.35c1.92-.24,3.91.15,5.77-.62Zm43.62-5.13,5-1-.05-.23-5,.92ZM94.16,70.86l-4.52.27,0,.34,4.47-.62ZM19.48,60.34,15.67,58l-.2.38,4,1.93ZM94.14,70.86h5.11v-.34l-5.08.34ZM129.22,1.2,126,.89l0,.31,3.23.25ZM90,87.77h1.65v-.32H90Zm-1.24-.31-2.13.6,0,.19L88.88,88Z"
            style={{ fill: "none" }}
          />
        </clipPath>
      </defs>
      <title>circle</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="assets">
          <g id="circle">
            <g style={{ clipPath: `url(#clip-path-circle-${id})` }}>
              <path
                className="animate"
                d="M195.15,24.71s-43-22.47-102.7-13.57S8.38,34.08,8.69,45.5s3.88,40.22,83.76,35,97-22.53,97-22.53"
                transform="translate(6.31 5.95)"
                style={{
                  fill: "none",
                  stroke: "#f08a20",
                  strokeMiterlimit: 10,
                  strokeWidth: "30px",
                }}
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default Circle
