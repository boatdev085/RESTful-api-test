const fs = require("fs");
const readHTMLFile = async (path) => {
  return new Promise((resolve) => {
    fs.readFile(path, { encoding: "utf-8" }, async (err, html) => {
      if (err) {
        resolve({ err, html });
      } else {
        resolve({ err: null, html });
      }
    });
  });
};

module.exports = { readHTMLFile };
