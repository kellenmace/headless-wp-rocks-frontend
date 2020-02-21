import React from "react"
import styled from "styled-components"

const Container = styled.div`
  padding: calc(var(--content-padding) * 2) var(--content-padding);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow-10);
  background-color: var(--color-white);
`

function Card({ children }) {
  return <Container>{children}</Container>
}

export default Card
