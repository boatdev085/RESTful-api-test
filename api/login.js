const express = require("express");
const router = express.Router();
const Config = require("../config/config");
const { generateToken } = require("../utils/jwt-verify");
router.get("/", async (req, res, next) => {
  try {
    const newToken = await generateToken({ test: "123" });
    res.json({ ...Config.RESPONSE_SUCCESS, data: { token: newToken } });
    return;
  } catch (e) {
    res.json({ ...Config.RESPONSE_ERROR, message: e.message });
    return;
  }
});
module.exports = router;
