const chatService = require("../service/chat");

const getChats = async (req) => {
  try {
    const chats = await chatService.getChats(req.user);
    return { success: true, data: [...chats] };
  } catch (err) {
    console.error(err.message);
    return { success: false };
  }
};

const getChatMessages = async (req) => {
  try {
    const { id } = req.params;

    if (!id) return { success: false, message: "Chat id not provided" };

    const messages = await chatService.getChatMessages(id);
    return { success: true, data: [...messages] };
  } catch (err) {
    console.error(err.message);
    return { success: false };
  }
};

const createChat = async (req) => {
  try {
    const { participants } = req.body;

    if (!participants)
      return { success: false, message: "Participants list not provided" };

    await chatService.createChat(participants);
    return { success: true };
  } catch (err) {
    console.error(err.message);
    return { success: false };
  }
};

const createMessage = async (req) => {
  try {
    const { chatId, message, senderId } = req.body;

    if (!chatId) return { success: false, message: "Chat id not provided" };
    if (!message) return { success: false, message: "Message not provided" };
    if (!senderId) return { success: false, message: "Sender id not provided" };

    await chatService.createMessage(message, chatId, senderId);
    return { success: true };
  } catch (err) {
    console.error(err.message);
    return { success: false };
  }
};

module.exports = { getChats, createChat, createMessage, getChatMessages };
