import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../data/api";
import { toast } from "react-toastify";

function useSendChatMessageMutation() {
  const [loading, setLoading] = useState(false);

  const sendMessage = async (chatId, message, senderId) => {
    setLoading(true);

    const payload = {
      chatId,
      message,
      senderId,
    };

    try {
      await axios.post(`${API_URL}/api/chat/create-message`, payload);
    } catch (err) {
      toast.error("Some internal error occurred");
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
}

export default useSendChatMessageMutation;
