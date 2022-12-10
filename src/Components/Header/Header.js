import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header(props) {
  return (
    <div className="header-container">
      <ul>
        <li className="option title">
          <Link to={"/"}>React Auth</Link>
        </li>
        {!props.isAuth ? (
          <li className="option">
            <Link to={"/login"}>Login</Link>
          </li>
        ) : (
          <>
            <li className="option">
              <Link to={"/profile"}>Profile</Link>
            </li>
            <li className="option logout">Logout</li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Header;
