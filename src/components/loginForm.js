import { useState } from "react";
import React from "react";

import { usernameInput } from "./usernameInput";

export const LoginForm = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div>Login Form</div>
      <form className="formName" onSubmit={handleSubmit}>
        <label>
          <h2>Login</h2>
        </label>

        <label>UserName</label>
        <br />
        <input
          type="text"
          className="inputBar"
          value={name}
          placeholder="User1023"
          onChange={(e) => setName(e.target.value)}
        />

        <br />

        <label>Password</label>
        <br />
        <input
          type="password"
          className="inputBar"
          value={pass}
          placeholder="Password"
          onChange={(e) => setPass(e.target.value)}
        />

        <br />

        <button type="Submit">Submit</button>
      </form>
    </div>
  );
};
