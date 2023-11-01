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

module.exports = router;
