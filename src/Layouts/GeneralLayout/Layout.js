import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { GlobalContext } from "../../Utils/Utils";

function Layout() {
  const [globalState, setGlobalState] = useState({
    token: "",
  });

  return (
    <GlobalContext.Provider value={globalState}>
      <Header isAuth={globalState.token} />
      <Outlet />
    </GlobalContext.Provider>
  );
}

export default Layout;
