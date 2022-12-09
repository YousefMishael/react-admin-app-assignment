import React from "react";
import { Navigate } from "react-router-dom";
import { useGlobalContext } from "../../Utils/Utils";

function IsUnAuth(props) {
  const context = useGlobalContext();

  return (
    <div>{context.token === "" ? props.children : <Navigate to={"/"} />}</div>
  );
}

export default IsUnAuth;
