import { useNavigate } from "react-router-dom";
import { removeToken } from "../utils/auth";
import { PAGES } from "../data/pages";

function useLogout() {
  const navigate = useNavigate();

  const logout = () => {
    removeToken();
    navigate(PAGES.WELCOME);
  };

  return { logout };
}

export default useLogout;
