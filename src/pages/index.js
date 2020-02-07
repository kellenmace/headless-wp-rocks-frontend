import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Subscribe from "../components/subscribe"
import Card from "../components/card"

function IndexPage() {
  return (
    <Layout>
      <SEO />
      <Hero />
      <Card>
        <Subscribe />
      </Card>
    </Layout>
  )
}

export default IndexPage
