const SOCKET_ACTIONS = {
  JOIN_CHAT: "join_chat",
  LEAVE_CHAT: "leave_chat",
  SEND_MESSAGE: "send_message",
  RECEIVE_MESSAGE: "receive_message",
};

const init = (server) => {
  const io = require("socket.io")(server, {
    cors: {
      origin: "*",
    },
  });

  io.on("connection", (socket) => {
    socket.on(SOCKET_ACTIONS.JOIN_CHAT, async (data) => {
      const { chatId } = data;

      if (!chatId) return;

      await socket.join(chatId);
    });

    socket.on(SOCKET_ACTIONS.LEAVE_CHAT, async (data) => {
      const { chatId } = data;

      if (!chatId) return;

      await socket.leave(chatId);
    });

    socket.on(SOCKET_ACTIONS.SEND_MESSAGE, (data) => {
      const { chatId, text, user } = data;

      if (!chatId || !text || !user) return;

      io.to(chatId).emit(SOCKET_ACTIONS.RECEIVE_MESSAGE, {
        text: text,
        user: user,
      });
    });
  });
};

module.exports = { init };
