import React, { useState } from "react"
import styled from "styled-components"

import DecisionToolScore from "./decisionToolScore"

const StyledForm = styled.form`
  ol {
    margin-bottom: 3rem;
  }
  input[type="radio"] + label {
    border: 2px solid var(--color-gray-6);
    color: var(--color-gray-6);
    border-radius: var(--border-radius);
    display: inline-block;
    padding: 0.5rem 1.25rem;
    min-width: 84px;
    text-align: center;
    cursor: pointer;
  }
  input[type="radio"]:checked + label {
    border-color: var(--color-blue-6);
    color: var(--color-blue-6);
    background-color: rgba(64, 152, 215, 0.1);
    font-weight: 900;
  }
  .radio-container + .radio-container {
    margin-left: 0.5rem;
  }
  .score-container {
    margin-bottom: 3rem;
  }
  button[type="reset"] {
    margin-bottom: 3rem;
  }
`

function DecisionTool() {
  const [answers, setAnswers] = useState([])

  function handleChange(event) {
    const id = Number(event.target.name)
    const value = Number(event.target.value)
    const otherAnswers = answers.filter(answer => answer.id !== id)
    setAnswers([...otherAnswers, { id, value }])
  }

  return (
    <StyledForm method="post" onSubmit={event => event.preventDefault()}>
      <ol>
        {questions.map(question => {
          const { id, text, choices } = question
          const answer = answers.find(answer => answer.id === id)
          return (
            <li key={id}>
              <p>{text}</p>
              {choices.map((choice, index) => {
                const { label, value } = choice
                const isChecked = !!answer && answer.value === value
                return (
                  <span key={label} className="radio-container">
                    <input
                      type="radio"
                      id={`question-${id}-${index}`}
                      className="screen-reader"
                      name={id}
                      value={value}
                      checked={isChecked}
                      onChange={handleChange}
                    />
                    <label htmlFor={`question-${id}-${index}`}>{label}</label>
                  </span>
                )
              })}
            </li>
          )
        })}
      </ol>
      <div className="score-container">
        <DecisionToolScore answers={answers} />
      </div>
      <button
        type="reset"
        onClick={event => {
          event.preventDefault()
          setAnswers([])
        }}
      >
        Reset
      </button>
    </StyledForm>
  )
}

export default DecisionTool

const questions = [
  {
    id: 1,
    text: `Will data from WordPress need to be consumed by multiple platforms (main website, other/partner websites, native desktop apps, iOS/Android apps, etc.)?`,
    choices: [
      {
        label: `No`,
        value: 0,
      },
      {
        label: `Yes`,
        value: 3,
      },
    ],
  },
  {
    id: 2,
    text: `Will the site need to pull in data from other sources beyond WordPress (a Shopify store, a CRM, social media accounts, Amazon S3, etc.)?`,
    choices: [
      {
        label: `No`,
        value: 0,
      },
      {
        label: `Yes`,
        value: 3,
      },
    ],
  },
  {
    id: 3,
    text: `Is the architecture of this site temporary, and does the client plan to move the frontend or backend to another platform eventually (move the backend off of WP, or move the frontend to a different framework)?`,
    choices: [
      {
        label: `No`,
        value: 0,
      },
      {
        label: `Yes`,
        value: 2,
      },
    ],
  },
  {
    id: 4,
    text: `Does the project have a very tight deadline, and is getting a website out the door extremely quickly more important than concerns about optimizing speed, scalability, maintainability, etc.?`,
    choices: [
      {
        label: `No`,
        value: 0,
      },
      {
        label: `Yes`,
        value: -2,
      },
    ],
  },
  {
    id: 5,
    text: `Does the project have a very tight budget and is getting a website out the door for very little money more important than concerns about optimizing speed, scalability, maintainability, etc.?`,
    choices: [
      {
        label: `No`,
        value: 0,
      },
      {
        label: `Yes`,
        value: -2,
      },
    ],
  },
  {
    id: 6,
    text: `Does the client have the expectation that they will be able to select a traditional WordPress theme, and that the theme will control how the site is displayed?`,
    choices: [
      {
        label: `No`,
        value: 0,
      },
      {
        label: `Yes`,
        value: -3,
      },
    ],
  },
  {
    id: 7,
    text: `Does the client have the expectation that their team will be able to install WordPress plugins in order to add visual components to the site themselves, such as sliders, galleries, etc.?`,
    choices: [
      {
        label: `No`,
        value: 0,
      },
      {
        label: `Yes`,
        value: -3,
      },
    ],
  },
  {
    id: 8,
    text: `Does the client have the expectation that their team will be able to use a page builder tool like Beaver Builder or Elementor to fully customize the content areas on every page?`,
    choices: [
      {
        label: `No`,
        value: 0,
      },
      {
        label: `Yes`,
        value: -3,
      },
    ],
  },
  {
    id: 9,
    text: `Does the client have the expectation that their team will be able to use the WordPress Customizer to manage content and preview their changes?`,
    choices: [
      {
        label: `No`,
        value: 0,
      },
      {
        label: `Yes`,
        value: -3,
      },
    ],
  },
  {
    id: 10,
    text: `Are the developers who will build the frontend of the site skilled in writing ES6+ JavaScript and using a modern framework like React or Vue?`,
    choices: [
      {
        label: `No`,
        value: -2,
      },
      {
        label: `Yes`,
        value: 2,
      },
    ],
  },
  {
    id: 11,
    text: `Will a frontend developer skilled in ES6+ JavaScript and a modern JS framework be on board to maintain the project in the future?`,
    choices: [
      {
        label: `No`,
        value: -2,
      },
      {
        label: `Yes`,
        value: 2,
      },
    ],
  },
  {
    id: 12,
    text: `Are the developers who will build the backend of the site skilled in working with PHP and WPGraphQL to expose a GraphQL API that can be consumed by a frontend app?`,
    choices: [
      {
        label: `No`,
        value: -2,
      },
      {
        label: `Yes`,
        value: 2,
      },
    ],
  },
  {
    id: 13,
    text: `Will a backend developer skilled in working with PHP and WPGraphQL be on board to maintain the project in the future?`,
    choices: [
      {
        label: `No`,
        value: -2,
      },
      {
        label: `Yes`,
        value: 2,
      },
    ],
  },
]
