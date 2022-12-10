import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import "./NotFound.scss";

function NotFound() {
  return (
    <div className="not-found-container">
      <Header />
      <div className="not-found-wrapper">
        <div className="img-wrapper">
          <img
            alt="Not Found"
            src="https://static.vecteezy.com/system/resources/previews/007/162/540/original/error-404-page-not-found-concept-illustration-web-page-error-creative-design-modern-graphic-element-for-landing-page-infographic-icon-free-vector.jpg"
          />
        </div>
        <div className="error-code">404</div>
        <div className="error-text">Sorry! Page not found...</div>
        <Link to={"/"}>Return to Home page</Link>
      </div>
    </div>
  );
}

export default NotFound;
