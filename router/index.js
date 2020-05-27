const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();
const appRoot = path.dirname(require.main.filename);
fs.readdirSync(appRoot + "/api").forEach(function (route) {
  const replaceNameRoute = route.replace(".js", "");
  router.use(
    "/" + replaceNameRoute,
    require("../api/" + replaceNameRoute + ".js")
  );
});

module.exports = router;
