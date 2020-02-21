import React from "react"
import styled from "styled-components"

const Container = styled.div`
  overflow: hidden;
  padding-bottom: 0.75rem;
  h1 {
    display: block;
    margin: 0;
    text-align: center;
    transform: rotate(-5deg);
    font-size: 3.5rem;
    span {
      display: block;
    }
    .yellow {
      display: inline-block;
      padding-left: 0.75rem;
      padding-right: 0.75rem;
      background: var(--color-yellow-6);
    }
  }
`

function Hero() {
  return (
    <Container className="content-area">
      <h1>
        <span>Headless</span>
        <span>WordPress</span>
        <span className="yellow">
          <span>ROCKS.</span>
        </span>
      </h1>
    </Container>
  )
}

export default Hero
