import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../data/api";
import { toast } from "react-toastify";
import { getAuthToken } from "../../utils/auth";

function useGetChats() {
  const [loading, setLoading] = useState(false);
  const [chats, setChats] = useState([]);

  const getChats = async () => {
    setLoading(true);

    try {
      const response = await axios.get(`${API_URL}/api/chat/get`, {
        headers: { Authorization: getAuthToken() },
      });
      if (response.data?.success == true) {
        setChats(response.data.data);
      } else {
        toast.error("Some internal error occurred");
      }
    } catch (err) {
      toast.error("Some internal error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getChats();
  }, []);

  return { chats, loading };
}

export default useGetChats;
