import React from "react"
import styled from "styled-components"

const Container = styled.div`
  position: relative;
  height: 30px;
  .svg-wrap {
    position: absolute;
    left: 0px;
    width: 100vw;
    min-width: 800px;
    bottom: -11px;
  }
`

/**
 * The `fill` prop is the color on the bottom of the wave.
 */
function WaveDividerBottom(props) {
  const { fill } = props

  return (
    <Container>
      <div className="svg-wrap">
        <svg viewBox="0 0 1695 57" preserveAspectRatio="none">
          <path
            d="M0 23c135.4 19 289.6 28.5 462.5 28.5C721.9 51.5 936.7 1 1212.2 1 1395.8.9 1556.7 8.3 1695 23v34H0V23z"
            fill={fill}
            fill-rule="evenodd"
          ></path>
        </svg>
      </div>
    </Container>
  )
}

export default WaveDividerBottom
