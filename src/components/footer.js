import React from "react"
import styled from "styled-components"

import AsciiArtLogo from "./asciiArtLogo"
import WaveDividerTop from "./waveDividerTop"

const StyledFooter = styled.footer`
  background-color: var(--color-gray-2);
  color: var(--color-gray-6);
  .wrap {
    padding: var(--content-padding);
  }
`

function Footer() {
  return (
    <StyledFooter>
      <WaveDividerTop fill="var(--color-gray-10)" />
      <div className="wrap">
        <AsciiArtLogo />
      </div>
    </StyledFooter>
  )
}

export default Footer
