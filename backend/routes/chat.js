const { Router } = require("express");
const chat = require("../controller/chat");
const asyncJsonController = require("../utils/asyncJsonController");

const router = Router();

router.get(
  "/get",
  asyncJsonController((req) => chat.getChats(req))
);

router.post(
  "/create",
  asyncJsonController((req) => chat.createChat(req))
);

router.post(
  "/create-message",
  asyncJsonController((req) => chat.createMessage(req))
);

router.get(
  "/get-messages/:id",
  asyncJsonController((req) => chat.getChatMessages(req))
);

module.exports = router;
