const path = require("path");
const handlebars = require("handlebars");
const nodemailer = require("nodemailer");
const { readHTMLFile } = require("../utils/index");
const appRoot = path.dirname(require.main.filename);

const readFileTemplate = async (templateID, params) => {
  let getHtmlPage = await readHTMLFile(
    appRoot + `/utils/templates/email/template${templateID}.html`
  );
  if (getHtmlPage.err) {
    return null;
  }
  let template = handlebars.compile(getHtmlPage.html);
  return template(params);
};
const sendEmail = async (userMail, mailOptions) => {
  try {
    let transporter = nodemailer.createTransport(userMail);
    await transporter.sendMail(mailOptions).then((res) => console.log(res));
  } catch (e) {
    return "fail";
  }
};
module.exports = { readFileTemplate, sendEmail };
