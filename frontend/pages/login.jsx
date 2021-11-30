import md5 from "md5";
import { checkToken } from "../utils/token";
import cookie from "js-cookie";
import { useRouter } from "next/router";

export default function Login({ token }) {
  const router = useRouter();

  const loginUser = async (event) => {
    event.preventDefault();

    const res = await fetch("https://api.betaseries.com/members/auth", {
      body: JSON.stringify({
        login: event.target.login.value,
        password: md5(event.target.password.value),
        client_id: "4344d675a081",
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.errors.length <= 0) {
          cookie.set("token", JSON.stringify(response), { path: "/" });
          location.reload()
          router.push("/");
        } else if (response.errors[0])
          if (
            response.errors[0].code === 4002 ||
            response.errors[0].code === 4003
          ) {
            alert(response.errors[0].text);
          } else {
            alert(response.errors[0].text);
          }
      });
  };

  return (
    <form onSubmit={loginUser}>
      <label htmlFor="login">Login</label>
      <input
        id="login"
        name="login"
        type="text"
        autoComplete="login"
        required
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        autoComplete="password"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}
