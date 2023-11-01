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

module.exports = { getChats, createChat };
