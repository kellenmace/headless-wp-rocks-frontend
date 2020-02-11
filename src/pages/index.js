import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Community from "../components/community"
import Subscribe from "../components/subscribe"
import Card from "../components/card"
import LogoTrain from "../components/logoTrain"

function IndexPage() {
  return (
    <Layout>
      <SEO />
      <Hero />
      <Community />
      <Card>
        <Subscribe />
      </Card>
      <LogoTrain />
    </Layout>
  )
}

export default IndexPage
