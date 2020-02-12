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
    margin-bottom: 6rem;
  }
  .hero-section {
    margin-top: 6rem;
    margin-bottom: calc(6rem + 30px);
  }
  .subscribe-section > div:first-of-type {
    margin-bottom: var(--content-padding);
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
          <LogoTrain />
        </section>
      </Container>
    </Layout>
  )
}

export default IndexPage
