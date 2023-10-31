const { Router } = require("express");
const user = require("../controller/user");
const asyncJsonController = require("../utils/asyncJsonController");

const router = Router();

router.post(
  "/login",
  asyncJsonController((req) => user.login(req.body))
);

router.post(
  "/signup",
  asyncJsonController((req) => user.signup(req.body))
);

module.exports = router;
