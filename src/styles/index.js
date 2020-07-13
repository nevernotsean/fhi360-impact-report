import colors from "./theme/colors"
import fonts from "./theme/fonts"

const theme = {
  breakpoints: ["768px", "1020px", "1200px"],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fontWeights: {
    body: 400,
    heading: 900,
    bold: 900,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  colors,
  fonts,
}

export default theme
