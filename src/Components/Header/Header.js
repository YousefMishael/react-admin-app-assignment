import React from "react";
import "./Header.scss";
import { useGlobalContext } from "../../Utils/Utils";
import { Link } from "react-router-dom";

function Header(props) {
  const context = useGlobalContext();

  function logout() {
    context.setToken("");
    localStorage.removeItem("token");
  }

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
            <li className="option logout" onClick={logout}>
              Logout
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Header;
