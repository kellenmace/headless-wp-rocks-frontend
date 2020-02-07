import React from "react"

function SubscribeForm(props) {
  const { email, setEmail, handleSubmit } = props

  return (
    <form method="post" onSubmit={handleSubmit}>
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
    </form>
  )
}

export default SubscribeForm
