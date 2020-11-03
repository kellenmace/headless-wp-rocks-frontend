import React from "react"
import styled from "styled-components"

const Container = styled.section`
  background: var(--color-gray-9);
  border-radius: var(--border-radius);
  padding: 3rem 2rem;
  .headings {
    display: flex;
  }
  .headings h3 {
    flex: 1;
    margin-top: 0;
  }
  .headings h3 + h3 {
    text-align: right;
  }
  .score-bar {
    display: flex;
    height: 2rem;
    border-radius: var(--border-radius);
    overflow: hidden;
  }
`

function DecisionToolScore(props) {
  const { answers } = props

  function getScore() {
    const total = answers.reduce((total, answer) => total + answer.value, 0)
    if (total === 0) return 0
    const denominator = answers.reduce(
      (total, answer) => total + Math.abs(answer.value),
      0
    )
    return Math.round((total / denominator) * 100)
  }

  const score = getScore()
  const percentagePoints = [...Array(201).keys()].map(x => x - 100)

  return (
    <Container>
      <div className="headings">
        <h3>Traditional</h3>
        <h3>Headless</h3>
      </div>
      <div className="score-bar">
        {percentagePoints.map(number => {
          if (number === score) {
            return (
              <div
                key={number}
                style={{ flex: `1`, background: `var(--color-yellow-6)` }}
              />
            )
          }
          if (number === 0) {
            return (
              <div
                key={number}
                style={{ flex: `1`, background: `var(--color-gray-9)` }}
              />
            )
          }
          return (
            <div
              key={number}
              style={{ flex: `1`, background: `var(--color-gray-10)` }}
            />
          )
        })}
      </div>
    </Container>
  )
}

export default DecisionToolScore
