import React from "react"
import styled from "styled-components"

const StyledForm = styled.form`
  input[type="email"] {
    background-color: var(--color-gray-10);
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  /* When input is in focus, also show border around button. */
  input[type="email"]:focus + button {
    box-shadow: 0 0 0 2px var(--color-blue-9);
  }
`

function SubscribeForm(props) {
  const { email, setEmail, handleSubmit } = props

  return (
    <StyledForm method="post" onSubmit={handleSubmit}>
      <label htmlFor="email-field" className="screen-reader">
        Email address
      </label>
      <input
        type="email"
        id="email-field"
        name="email"
        autoComplete="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <button type="submit">Join</button>
    </StyledForm>
  )
}

export default SubscribeForm
