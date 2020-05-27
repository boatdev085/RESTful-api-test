const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./router");
const app = express();
const dotenv = require("dotenv");
const checkHeader = require("./middleware/check-header");
dotenv.config();
const db = require("./model/index");
const port = process.env.PORT || 3005;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(checkHeader);
app.use("/api", routes);
db.sequelize
  .sync
  // ({ force: true });
  ();
app.listen(port);

console.log("App is listening on port " + port);
