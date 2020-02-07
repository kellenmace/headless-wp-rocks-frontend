import React from "react"
import styled from "styled-components"

import CommunityImage from "../components/communityImage"
import Emoji from "../components/emoji"

const Container = styled.div`
  h1 {
    display: block;
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
  p {
    font-size: 1.1rem;
  }
`

function Hero() {
  return (
    <Container className="content-wrap">
      <h1>
        <span>Headless</span>
        <span>WordPress</span>
        <span className="yellow">
          <span>ROCKS.</span>
        </span>
      </h1>
      <CommunityImage />
      <p>
        We're building a community of folks excited to learn how to use
        WordPress as a modern, headless CMS.
      </p>
      <p>
        The best part? You're invited!{` `}
        <Emoji symbol="💌" label="love letter" />
      </p>
    </Container>
  )
}

export default Hero
