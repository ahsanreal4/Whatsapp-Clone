import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../data/api";
import { useNavigate } from "react-router-dom";
import { PAGES } from "../../data/pages";
import { toast } from "react-toastify";

function useSignupMutaion() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signup = async (name, email, password) => {
    setLoading(true);

    const payload = {
      name,
      email,
      password,
    };

    try {
      const response = await axios.post(`${API_URL}/noAuth/signup`, payload);
      if (response.data?.success === true) {
        navigate(PAGES.SIGN_IN);
        toast.success("Signed Up successfully");
      } else {
        toast.error("User already exists");
      }
    } catch (err) {
      toast.error("Some internal error occurred");
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading };
}

export default useSignupMutaion;
