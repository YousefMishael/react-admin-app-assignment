import React, { useState } from "react";
import "./Profile.scss";
import { useGlobalContext } from "../../Utils/Utils";
import { request } from "../../Utils/APIUtils";

function Profile() {
  const [password, setPassword] = useState("");
  const context = useGlobalContext();

  async function resetPassword(e) {
    e.preventDefault();

    if (!password) return;

    const resp = await request(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=API_KEY",
      "POST",
      {
        idToken: context.token,
        password,
        returnSecureToken: true,
      }
    );

    if (resp.status === 200) {
      context.setToken(resp.data.idToken);
      localStorage.setItem("token", JSON.stringify(resp.data.idToken));
      setPassword("");
      alert("Password changed successfully");
    } else {
      alert(resp.data?.error?.message || "An Error occured");
    }
  }

  function onTextChanged(e) {
    setPassword(e.target.value);
  }

  return (
    <div className="profile-container">
      <div className="profile-title">Your User Profile</div>
      <form className="password-form" onSubmit={resetPassword}>
        <div className="form-input-wrapper">
          <div>
            <label>New Password</label>
          </div>
          <input
            className="password-input"
            type={"password"}
            value={password}
            onChange={onTextChanged}
          />
        </div>
        <div>
          <button className="submit-btn">Change Password</button>
        </div>
      </form>
    </div>
  );
}

export default Profile;
