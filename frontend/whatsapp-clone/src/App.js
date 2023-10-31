import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./pages/welcome/Welcome";
import SignUp from "./pages/SignUp/SignUp.jsx";
import SignIn from "./pages/signin/SignIn";
import Chat from "./pages/chat/Chat";
import { PAGES } from "./data/pages";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path={PAGES.WELCOME} element={<Welcome />} />
          <Route path={PAGES.SIGN_UP} element={<SignUp />} />
          <Route path={PAGES.SIGN_IN} element={<SignIn />} />
          <Route path={PAGES.CHAT} element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
