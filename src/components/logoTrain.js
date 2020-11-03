import React from "react"
import styled from "styled-components"

import ReactIcon from "../components/reactIcon"
import GraphQLIcon from "../components/graphQLIcon"
import WordPressIcon from "../components/wordpressIcon"
import WpGraphQLIcon from "../components/wpGraphQLIcon"
import ApolloIcon from "../components/apolloIcon"
import GatsbyIcon from "../components/gatsbyIcon"
import NextJsIcon from "../components/nextJsIcon"

const Container = styled.div`
  max-width: 280px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  .logo-container {
    width: 12%;
  }
`

function LogoTrain() {
  return (
    <Container>
      <div className="logo-container">
        <ReactIcon />
      </div>
      <div className="logo-container">
        <WpGraphQLIcon />
      </div>
      <div className="logo-container">
        <GraphQLIcon />
      </div>
      <div className="logo-container">
        <WordPressIcon />
      </div>
      <div className="logo-container">
        <ApolloIcon />
      </div>
      <div className="logo-container">
        <GatsbyIcon />
      </div>
      <div className="logo-container">
        <NextJsIcon />
      </div>
    </Container>
  )
}

export default LogoTrain
