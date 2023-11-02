import { PAGES } from "../data/pages";
import SignIn from "../pages/signin/SignIn";
import SignUp from "../pages/signup/SignUp";
import Welcome from "../pages/welcome/Welcome";

export const UN_PROTECTED_ROUTES = [
  {
    path: PAGES.WELCOME,
    element: <Welcome />,
  },
  {
    path: PAGES.SIGN_IN,
    element: <SignIn />,
  },
  {
    path: PAGES.SIGN_UP,
    element: <SignUp />,
  },
];
