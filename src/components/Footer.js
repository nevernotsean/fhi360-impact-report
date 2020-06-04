import React from "react"
import { Flex, Box } from "reflexbox"

const Footer = () => {
  return (
    <footer>
      <Flex>
        <Box width={1} p={3} textAlign={"center"}>
          © {new Date().getFullYear()}, FHI360
        </Box>
      </Flex>
    </footer>
  )
}

export default Footer
