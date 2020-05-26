const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  console.log("start");
  const UserMail = {
    service: "gmail",
    auth: {
      user: "kvikhuahin1@gmail.com",
      pass: "hdcrdkevnzihtyxm",
      // pass: "kvik1234huahin"
    },
  };
  let getHtmlPage = await readHTMLFile(__dirname + "/templates/mail7.html");
  if (getHtmlPage.err) {
    return { status: false, response: "not page html" };
  }
  let template = handlebars.compile(getHtmlPage.html);
  let replacements = {
    firstName: name,
    lastName: lastName,
    address: address,
    phone: telephone,
    email: email,
  };
  let htmlToSend = template(replacements);
  var mailOptions = {
    from: '"Form kvik" <kvikhuahin123456@gmail.com',
    to: "oat_oln@hotmail.com,fb@huahin.kvik.co.th,eb@huahin.kvik.co.th",
    subject: "Form kvik",
    html: htmlToSend,
  };
  var transporter = nodemailer.createTransport(UserMail);
  let returnSendemail = await transporter.sendMail(mailOptions).then((res) => {
    return { status: true, response: res };
  });
  res.json("boat");
});
module.exports = router;
