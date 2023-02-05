import React from "react";
import Input from "./input";

function Login() {
  return (
    <form className="form">
      <Input type="text" name="username" />
      <Input type="password" name="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
