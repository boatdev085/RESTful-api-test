const express = require("express");
const router = express.Router();
const Config = require("../config/config");
const { readFileTemplate, sendEmail } = require("../controller/email");
router.post("/", async (req, res) => {
  try {
    const { from, to, message, templateID = undefined, params = {} } = req.body;
    if (!from || !to) {
      throw Error("not from and to for send email");
    }
    let mailOptions = {
      from: req.body.from,
      to: req.body.to,
      subject: `email from ${req.body.from}`,
    };
    if (!templateID) {
      mailOptions.text = message;
    } else {
      const getTemplate = await readFileTemplate(templateID, params);
      if (!getTemplate) {
        throw Error("not template for templateID");
      }
      mailOptions.html = getTemplate;
    }
    const userMail = {
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    };
    const getSendEmail = await sendEmail(userMail, mailOptions);
    if (getSendEmail === "fail") {
      throw Error("fail to send email");
    }
    res.json(Config.RESPONSE_SUCCESS);
    return;
  } catch (e) {
    res.json({ ...Config.RESPONSE_ERROR, message: e.message });
    return;
  }
});
module.exports = router;
