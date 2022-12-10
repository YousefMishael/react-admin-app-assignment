import React, { useState } from "react";
import "./Login.scss";
import { request } from "../../Utils/APIUtils";
import { useGlobalContext } from "../../Utils/Utils";

function Login() {
  const [formState, setFormState] = useState({
    mode: "signin",
    title: "Login",
    btnLabel: "Login",
    toggleLabel: "Create new account",
    email: "",
    password: "",
  });
  const context = useGlobalContext();

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

  async function onSubmit(e) {
    e.preventDefault();

    if (formState.mode === "signin") {
    } else {
      //signup
      if (!formState.email || !formState.password) return;

      const resp = await request(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=API_KEY",
        "POST",
        {
          email: formState.email,
          password: formState.password,
          returnSecureToken: true,
        }
      );

      if (resp.status === 200) {
        context.setToken(resp.data.idToken);
        localStorage.setItem("token", JSON.stringify(resp.data.idToken));
      } else {
        alert(
          "An error occured while creating your account. Please make sure that your password is at least 6 characters"
        );
      }
    }
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={onSubmit}>
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
