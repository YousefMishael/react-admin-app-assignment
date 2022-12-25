import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { GlobalContext } from "../../Utils/Utils";

function Layout() {
  const [token, setToken] = useState(
    JSON.parse(JSON.stringify(localStorage.getItem("token")))
  );

  return (
    <GlobalContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      <Header isAuth={token} />
      <Outlet />
    </GlobalContext.Provider>
  );
}

export default Layout;
