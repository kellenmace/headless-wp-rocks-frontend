import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledImg = styled(Img)`
  filter: saturate(0.3) hue-rotate(180deg);
`

function CommunityImage() {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "community.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <StyledImg fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default CommunityImage
