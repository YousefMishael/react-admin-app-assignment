import React from "react";
import { Navigate } from "react-router-dom";
import { useGlobalContext } from "../../Utils/Utils";

function IsAuth(props) {
  const context = useGlobalContext();

  return (
    <div>{!context.token ? <Navigate to={"/login"} /> : props.children}</div>
  );
}

export default IsAuth;
