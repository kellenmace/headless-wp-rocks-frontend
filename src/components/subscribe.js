import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import styled from "styled-components"

import SubscribeForm from "./subscribeForm"
import Emoji from "./emoji"

const Container = styled.div`
  h2,
  p {
    margin-top: 0;
    margin-bottom: 1.5rem;
  }
`

function Subscribe() {
  const [email, setEmail] = useState(``)
  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setIsSubmitted(true)
    addToMailchimp(email)
  }

  return (
    <Container>
      <h2>Join</h2>
      {isSubmitted ? (
        <p>
          Thanks! You rule!{` `}
          <Emoji symbol="😊" label="smile" />
          <Emoji symbol="🙌" label="praise hands" />
        </p>
      ) : (
        <>
          <p>
            Sign up to receive free email updates on how to build amazing modern
            JavaScript apps powered by headless WordPress backends.
          </p>
          <SubscribeForm
            email={email}
            setEmail={setEmail}
            handleSubmit={handleSubmit}
          />
        </>
      )}
    </Container>
  )
}

export default Subscribe
