import "./App.scss";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layouts/GeneralLayout/Layout";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import IsAuth from "./Components/Auth/IsAuth";
import Home from "./Pages/Home/Home";
import IsUnAuth from "./Components/Auth/IsUnAuth";
import Profile from "./Pages/Profile/Profile";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />} errorElement={<NotFound />}>
        <Route
          path="/"
          element={
            <IsAuth>
              <Home />
            </IsAuth>
          }
        />
        <Route
          path="/login"
          element={
            <IsUnAuth>
              <Login />
            </IsUnAuth>
          }
        />

        <Route
          path="/profile"
          element={
            <IsAuth>
              <Profile />
            </IsAuth>
          }
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
