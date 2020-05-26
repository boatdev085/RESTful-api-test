const express = require("express");
const models = express.Router();
// models.use("/user", require("../api/user"));
models.use("/email", require("../api/email"));
models.use("/taxincome", require("../api/tax-income"));

module.exports = models;
