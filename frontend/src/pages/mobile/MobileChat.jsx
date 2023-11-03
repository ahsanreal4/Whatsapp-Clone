import { useEffect, useRef } from "react";
import useGetChatMessages from "../../hooks/queries/useGetChatMessages";
import { useGlobalContext } from "../../context/globalContext/globalContext";
import useSendChatMessageMutation from "../../hooks/mutators/useSendChatMessageMutation";
import { toast } from "react-toastify";
import styles from './mobile.module.css'
function MobileChat({ chatId }) {
  const { messages, getChatMessages } = useGetChatMessages();
  const { sendMessage } = useSendChatMessageMutation();
  const chatInputRef = useRef(null);
  const { user } = useGlobalContext();

  useEffect(() => {
    if (!chatId) return;
    getChatMessages(chatId);
  }, [chatId]);

  useEffect(() => {
    if (messages?.length < 1) return;
    scrollChatContainer();
  }, [messages]);

  function scrollChatContainer() {
    const chatContainer = document.getElementById("user-chat-container-id");
    if (!chatContainer) return;

    chatContainer.scrollTop = chatContainer.scrollHeight;
  }

  const sendChatMessage = async () => {
    const text = chatInputRef.current.value;
    if (text === "") {
      toast.error("Please type something");
      return;
    }
    await sendMessage(chatId, text, user._id);
    chatInputRef.current.value = "";
    getChatMessages(chatId);
  };

  const Message = ({ message }) => (
    <h3
      className={`${
        message.sender._id === user._id ? styles.second_user : styles.first_color
      }`}
    >
      {message.message}
    </h3>
  );

  return (
    <div className={styles.sent_messages_container}>
      <div id="user-chat-container-id" className={styles.user_chat_container}>
        {messages.map((message, index) => (
          <Message key={`message-${index}`} message={message} />
        ))}
      </div>
      <div className={styles.input_messages_container}>
        <input
          type="text"
          ref={chatInputRef}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              sendChatMessage();
            }
          }}
        />
        <br />
        <button onClick={sendChatMessage}>➢</button>
      </div>
    </div>
  );
}

export default MobileChat
