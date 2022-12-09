import React, { useState } from "react";
import "./Login.scss";

function Login() {
  const [formState, setFormState] = useState({
    mode: "signin",
    title: "Login",
    btnLabel: "Login",
    toggleLabel: "Create new account",
    email: "",
    password: "",
  });

  function toggleForm() {
    if (formState.mode === "signin")
      setFormState({
        mode: "signup",
        title: "Sign Up",
        btnLabel: "Create Account",
        toggleLabel: "Login with existing account",
        email: "",
        password: "",
      });
    else
      setFormState({
        mode: "signin",
        title: "Login",
        btnLabel: "Login",
        toggleLabel: "Create new account",
        email: "",
        password: "",
      });
  }

  function onTextChanged(e) {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="login-container">
      <form className="login-form">
        <div className="title">{formState.title}</div>
        <div>
          <div>
            <label>Your Email</label>
          </div>
          <input
            className="form-input"
            name="email"
            value={formState.email}
            onChange={onTextChanged}
          />
        </div>
        <div>
          <div>
            <label>Your Password</label>
          </div>
          <input
            className="form-input"
            type={"password"}
            name="password"
            value={formState.password}
            onChange={onTextChanged}
          />
        </div>
        <div>
          <button className="login-btn">{formState.btnLabel}</button>
        </div>
        <div>
          <span className="signup-text" onClick={toggleForm}>
            {formState.toggleLabel}
          </span>
        </div>
      </form>
    </div>
  );
}

export default Login;
