import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Community from "../components/community"
import Subscribe from "../components/subscribe"
import Card from "../components/card"
import LogoTrain from "../components/logoTrain"

const Container = styled.div`
  section {
    margin-bottom: var(--vertical-spacing);
  }
  .hero-section {
    margin-top: var(--vertical-spacing);
    margin-bottom: calc(var(--vertical-spacing) + 30px);
  }
  .subscribe-section > div:first-of-type {
    max-width: 486px;
    margin: 0 var(--content-padding) 2rem;
    padding: 2rem 1.5rem;
    @media (min-width: 486px) {
      margin-left: auto;
      margin-right: auto;
      padding: 3rem;
    }
  }
`

function IndexPage() {
  return (
    <Layout>
      <SEO />
      <Container>
        <section className="hero-section">
          <Hero />
        </section>
        <section>
          <Community />
        </section>
        <section className="subscribe-section">
          <Card>
            <Subscribe />
          </Card>
          <LogoTrain className="content-area" />
        </section>
      </Container>
    </Layout>
  )
}

export default IndexPage
