import React from "react";
import "./Header.scss";

function Header(props) {
  return (
    <div className="header-container">
      <ul>
        <li className="option title">React Auth</li>
        {!props.isAuth ? (
          <li className="option">Login</li>
        ) : (
          <>
            <li className="option">Profile</li>
            <li className="option logout">Logout</li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Header;
