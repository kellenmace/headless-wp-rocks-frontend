import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import styled from "styled-components"

import SubscribeForm from "./subscribeForm"
import Emoji from "./emoji"

const Container = styled.div`
  h2 {
    margin-top: 0;
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
      <p>
        Sign up to receive free email updates on building modern JavaScript apps
        with a headless WordPress backend.
      </p>
      {isSubmitted ? (
        <p>
          Thanks!{` `}
          <Emoji symbol="😊" label="smile" />
          <Emoji symbol="🙌🝼" label="praise hands" />
        </p>
      ) : (
        <SubscribeForm
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      )}
    </Container>
  )
}

export default Subscribe
