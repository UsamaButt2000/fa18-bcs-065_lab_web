import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../axios";
import "./SigninScreen.css";

function SigninScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory()

  const signIn = (e) => {
    // e.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:4000/api/users/login",
      data: {
        email: email,
        password: password,
      },
    })
    history.push("/home")

  };

  return (
    <div className="signInScreen">
      <form>
        <h1>Log In</h1>
        <input
          type="email"
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button onClick={() => signIn()}>Sign In</button>
      </form>
    </div>
  );
}

export default SigninScreen;
