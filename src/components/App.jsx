import React from "react";
import Login from "./login";

var logged = false;

function App() {
  return <div className="container">{logged ? <h1>Hello</h1> : <Login />}</div>;
}

export default App;
