import React from "react";
import "./Profile.scss";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-title">Your User Profile</div>
      <form className="password-form">
        <div className="form-input-wrapper">
          <div>
            <label>New Password</label>
          </div>
          <input className="password-input" type={"password"} />
        </div>
        <div>
          <button className="submit-btn">Change Password</button>
        </div>
      </form>
    </div>
  );
}

export default Profile;
