import React from "react"
import styled from "styled-components"

import GuitarIcon from "./guitarIcon"

const Container = styled.div`
  font-size: 2.1rem;
  font-weight: 900;
  line-height: 1.15;
  .outer-span {
    display: inline-block;
    border-top: 15px solid;
    line-height: 0.95;
    padding-right: 3px;
  }
  .inner-span {
    display: inline-block;
    margin-left: -2px;
  }
  svg {
    fill: var(--color-gray-2);
    height: 1.5em;
    width: 0.6em;
    position: relative;
    left: -7px;
  }
  .icon-container {
    display: inline-flex;
  }
`

function HwpLogo() {
  return (
    <Container>
      <span className="outer-span">
        <span className="inner-span">HWP</span>
      </span>
      <div className="icon-container">
        <GuitarIcon />
      </div>
    </Container>
  )
}

export default HwpLogo
