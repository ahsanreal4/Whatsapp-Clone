import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../data/api";
import { toast } from "react-toastify";
import { getAuthToken } from "../../utils/auth";

function useGetChatMessages() {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  const getChatMessages = async (chatId) => {
    setLoading(true);

    try {
      const response = await axios.get(
        `${API_URL}/api/chat/get-messages/${chatId}`,
        {
          headers: { Authorization: getAuthToken() },
        }
      );
      if (response.data?.success === true) {
        setMessages(response.data.data);
      } else {
        toast.error("Some internal error occurred");
      }
    } catch (err) {
      toast.error("Some internal error occurred");
    } finally {
      setLoading(false);
    }
  };

  return { messages, loading, getChatMessages };
}

export default useGetChatMessages;
