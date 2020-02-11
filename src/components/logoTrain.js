import React from "react"
import styled from "styled-components"

import ReactIcon from "../components/reactIcon"
import GraphQLIcon from "../components/graphQLIcon"
import WordPressIcon from "../components/wordpressIcon"
import WpGraphQLIcon from "../components/wpGraphQLIcon"
import ApolloIcon from "../components/apolloIcon"
import GatsbyIcon from "../components/gatsbyIcon"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 250px;
  margin: 0 auto;
  .logo-container {
    width: 14%;
  }
  .tech-icon {
    filter: url(#grayscale-filter);
  }
`

function LogoTrain() {
  return (
    <Container>
      <div className="logo-container">
        <ReactIcon />
      </div>
      <div className="logo-container">
        <GraphQLIcon />
      </div>
      <div className="logo-container">
        <WordPressIcon />
      </div>
      <div className="logo-container">
        <WpGraphQLIcon />
      </div>
      <div className="logo-container">
        <ApolloIcon />
      </div>
      <div className="logo-container">
        <GatsbyIcon />
      </div>
    </Container>
  )
}

export default LogoTrain
