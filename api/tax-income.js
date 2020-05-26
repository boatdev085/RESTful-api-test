const express = require("express");
const router = express.Router();
const Config = require("../config/config");
const { summaryIncome } = require("../controller/tax-income");

router.get("/:income", async (req, res, next) => {
  try {
    if (!req.params.income || req.params.income === 0) {
      throw Error("Not enter income");
    }
    const convertIncome = parseFloat(req.params.income);
    const getSummaryIncome = summaryIncome(convertIncome || 0);
    res.status(Config.RESPONSE_SUCCESS.code).json({
      ...Config.RESPONSE_SUCCESS,
      data: { summary: getSummaryIncome, unit: "บาท" },
    });
    return;
  } catch (e) {
    res
      .status(Config.RESPONSE_ERROR.code)
      .json({ ...Config.RESPONSE_ERROR, message: e.message });
    return;
  }
});
module.exports = router;
