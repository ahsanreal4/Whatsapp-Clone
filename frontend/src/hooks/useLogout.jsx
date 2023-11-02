import { useNavigate } from "react-router-dom";
import { removeToken } from "../utils/auth";
import { PAGES } from "../data/pages";
import { useGlobalContext } from "../context/globalContext/globalContext";

function useLogout() {
  const navigate = useNavigate();
  const { setUser } = useGlobalContext();

  const logout = () => {
    removeToken();
    setUser(null);
    navigate(PAGES.WELCOME);
  };

  return { logout };
}

export default useLogout;
