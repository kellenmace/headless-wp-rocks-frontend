import React from "react"
import styled from "styled-components"

import CommunityImage from "../components/communityImage"
import Emoji from "../components/emoji"
import WaveDividerTop from "../components/waveDividerTop"
import WaveDividerBottom from "../components/waveDividerBottom"

const Container = styled.div`
  position: relative;
  margin-top: 150px;
  background-color: var(--color-gray-8);
  p {
    font-size: 1.1rem;
  }
  .comm-image-container {
    padding-left: var(--content-padding);
    padding-right: var(--content-padding);
    padding-top: 1px;
  }
  .comm-image-wrap {
    margin-top: -60px;
  }
  .copy {
    padding-left: var(--content-padding);
    padding-right: var(--content-padding);
  }
`

function Community() {
  return (
    <Container>
      <WaveDividerTop fill="var(--color-gray-10)" />
      <div className="comm-image-container">
        <div className="comm-image-wrap">
          <CommunityImage />
        </div>
      </div>
      <div className="copy">
        <p>
          We're building a community of folks excited to learn how to use
          WordPress as a modern, headless CMS.
        </p>
        <p>
          The best part? You're invited!{` `}
          <Emoji symbol="💌" label="love letter" />
        </p>
      </div>
      <WaveDividerBottom fill="var(--color-gray-10)" />
    </Container>
  )
}

export default Community
