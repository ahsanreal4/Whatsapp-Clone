import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import GlobalContext from "./context/globalContext/globalContext.jsx";
import { PROTECTED_ROUTES } from "./routes/protectedRoutes.jsx";
import { UN_PROTECTED_ROUTES } from "./routes/unProtectedRoutes.jsx";

function App() {
  const { user } = useContext(GlobalContext);

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          {!user &&
            UN_PROTECTED_ROUTES.map((route, index) => (
              <Route
                key={`unprotected-route-${index}`}
                element={route.element}
                path={route.path}
              />
            ))}
          {user &&
            PROTECTED_ROUTES.map((route, index) => (
              <Route
                element={route.element}
                path={route.path}
                key={`protected-route-${index}`}
              />
            ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
