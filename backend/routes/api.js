const { Router } = require("express");
const chat = require("./chat");
const { authenticateJWT } = require("../middleware/auth");

const router = Router();

router.use(authenticateJWT);

router.use("/chat", chat);

module.exports = router;
