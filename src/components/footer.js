import React from "react"
import styled from "styled-components"

import AsciiArtLogo from "./asciiArtLogo"

const StyledFooter = styled.footer`
  padding: var(--content-padding);
  background-color: var(--color-gray-2);
  color: var(--color-gray-6);
`

function Footer() {
  return (
    <StyledFooter>
      <AsciiArtLogo />
    </StyledFooter>
  )
}

export default Footer
