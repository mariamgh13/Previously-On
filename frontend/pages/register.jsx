import md5 from 'md5';

function Register() {
  const registerUser = async event => {
    event.preventDefault()

    const res = await fetch(
      "https://api.betaseries.com/members/signup",
      {
        body: JSON.stringify({
          login: event.target.login.value,
          password: md5(event.target.password.value),
          email: event.target.email.value,
          client_id: "4344d675a081"
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    )

    const result = await res.json()
    console.log(result)

  }

  return (
    <form onSubmit={registerUser} action="/login">
      <label htmlFor="login">Login</label>
      <input id="login" name="login" type="text" autoComplete="login" required />
      <label htmlFor="password">Password</label>
      <input id="password" name="password" type="password" autoComplete="password" required />
      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" autoComplete="email" required />
      <button type="submit">Register</button>
    </form>
  )
}


export default Register
