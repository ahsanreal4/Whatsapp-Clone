import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../data/api";
import { storeToken } from "../../utils/auth";
import { useNavigate } from "react-router-dom";
import { PAGES } from "../../data/pages";
import { toast } from "react-toastify";
import { useGlobalContext } from "../../context/globalContext/globalContext";

function useLoginMutation() {
  const [loading, setLoading] = useState(false);
  const { setUser } = useGlobalContext();
  const navigate = useNavigate();

  const login = async (email, password) => {
    setLoading(true);

    const payload = {
      email,
      password,
    };

    try {
      const response = await axios.post(`${API_URL}/noAuth/login`, payload);
      if (response.data?.success === true) {
        storeToken(response.data.token);
        setUser(response.data.user);
        navigate(PAGES.CHAT);
        toast.success("Signed in successfully");
      } else {
        toast.error("User does not exist");
      }
    } catch (err) {
      toast.error("Some internal error occurred");
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
}

export default useLoginMutation;
