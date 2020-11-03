import React from "react"
import styled from "styled-components"

const StyledForm = styled.form`
  display: flex;
  input[type="email"] {
    flex: 6;
    background-color: var(--color-gray-10);
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    @media (max-width: 370px) {
      max-width: 65%;
    }
    /* When input is in focus, also show border around button. */
    &:focus + button {
      box-shadow: 0 0 0 2px var(--color-blue-9);
    }
  }
  button {
    flex: 1;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
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
