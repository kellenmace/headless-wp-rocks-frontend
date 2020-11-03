import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DecisionTool from "../components/decisionTool"

const Container = styled.div`
  margin-top: 4rem;
  .content-area {
    max-width: var(--content-max-width-narrow);
    margin: 0 auto 3rem;
    padding-left: var(--content-padding);
    padding-right: var(--content-padding);
  }
`

function DecisionToolPage() {
  return (
    <Layout>
      <SEO title="Decision Tool" />
      <Container>
        <div className="content-area">
          <h1>Headless WP Decision Tool</h1>
        </div>
        <div className="content-area">
          <p>
            Use this tool to help determine whether you should go with a
            traditional WordPress vs. headless WordPress architecture for your
            next project.
          </p>
        </div>
        <div className="content-area">
          <DecisionTool />
        </div>
      </Container>
    </Layout>
  )
}

export default DecisionToolPage
