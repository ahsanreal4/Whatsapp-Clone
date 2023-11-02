import "./App.css";
import { Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { GlobalProvider } from "./context/globalContext/globalContext.jsx";
import { PROTECTED_ROUTES } from "./routes/protectedRoutes.jsx";
import { UN_PROTECTED_ROUTES } from "./routes/unProtectedRoutes.jsx";

import UnprotectedRoute from "./routes/wrapper/unprotectedRoutes.jsx";
import ProtectedRoute from "./routes/wrapper/protectedRoute.jsx";

function App() {
  return (
    <GlobalProvider>
      <ToastContainer />
      <Routes>
        <Route element={<UnprotectedRoute />}>
          {UN_PROTECTED_ROUTES.map((route, index) => (
            <Route
              key={`unprotected-route-${index}`}
              element={route.element}
              path={route.path}
            />
          ))}
        </Route>
        <Route element={<ProtectedRoute />}>
          {PROTECTED_ROUTES.map((route, index) => (
            <Route
              element={route.element}
              path={route.path}
              key={`protected-route-${index}`}
            />
          ))}
        </Route>
      </Routes>
    </GlobalProvider>
  );
}

export default App;
