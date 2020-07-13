import { createMedia } from "@artsy/fresnel"

const AppMedia = createMedia({
  breakpoints: {
    sm: 0,
    md: 768,
    lg: 1020,
    xl: 1200,
  },
})

export const { MediaContextProvider, Media } = AppMedia

// Make styles for injection into the header of the page
export const mediaStyles = AppMedia.createMediaStyle()

export default Media
