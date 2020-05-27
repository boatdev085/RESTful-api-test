const express = require("express");
const router = express.Router();
const Config = require("../config/config");
const {
  getGroupAll,
  getGroupFindOne,
  insertGroup,
  updateGroup,
  deleteGroup,
  getContactAll,
  getContactFindOne,
  insertContact,
  updateContact,
  deleteContact,
} = require("../controller/group");
router.get("/group", async (req, res, next) => {
  try {
    const getGroup = await getGroupAll();
    res.status(Config.RESPONSE_SUCCESS.code).json({
      ...Config.RESPONSE_SUCCESS,
      data: { groups: getGroup },
    });
    return;
  } catch (e) {
    res
      .status(Config.RESPONSE_ERROR.code)
      .json({ ...Config.RESPONSE_ERROR, message: e.message });
    return;
  }
});
router.get("/group/:id", async (req, res, next) => {
  try {
    if (!req.params.id) {
      throw Error("Not id");
    }
    const getGroup = await getGroupFindOne(req.params.id);
    res.status(Config.RESPONSE_SUCCESS.code).json({
      ...Config.RESPONSE_SUCCESS,
      data: { group: getGroup },
    });
    return;
  } catch (e) {
    res
      .status(Config.RESPONSE_ERROR.code)
      .json({ ...Config.RESPONSE_ERROR, message: e.message });
    return;
  }
});
router.post("/group", async (req, res, next) => {
  try {
    if (!req.body.group_name) {
      throw Error("Not enter group name");
    }
    const getId = await insertGroup(req.body);
    res.status(Config.RESPONSE_SUCCESS.code).json({
      ...Config.RESPONSE_SUCCESS,
      data: { id: getId },
    });
    return;
  } catch (e) {
    res
      .status(Config.RESPONSE_ERROR.code)
      .json({ ...Config.RESPONSE_ERROR, message: e.message });
    return;
  }
});
router.patch("/group", async (req, res, next) => {
  try {
    if (!req.body.group_id) {
      throw Error("Not id");
    }
    await updateGroup(req.body);
    res.status(Config.RESPONSE_SUCCESS.code).json({
      ...Config.RESPONSE_SUCCESS,
    });
    return;
  } catch (e) {
    res
      .status(Config.RESPONSE_ERROR.code)
      .json({ ...Config.RESPONSE_ERROR, message: e.message });
    return;
  }
});
router.delete("/group/:id", async (req, res, next) => {
  try {
    if (!req.params.id) {
      throw Error("Not id");
    }
    await deleteGroup(req.params.id);
    res.status(Config.RESPONSE_SUCCESS.code).json({
      ...Config.RESPONSE_SUCCESS,
    });
    return;
  } catch (e) {
    res
      .status(Config.RESPONSE_ERROR.code)
      .json({ ...Config.RESPONSE_ERROR, message: e.message });
    return;
  }
});
router.get("/contact", async (req, res, next) => {
  try {
    const getContacts = await getContactAll();
    res.status(Config.RESPONSE_SUCCESS.code).json({
      ...Config.RESPONSE_SUCCESS,
      data: { contacts: getContacts },
    });
    return;
  } catch (e) {
    res
      .status(Config.RESPONSE_ERROR.code)
      .json({ ...Config.RESPONSE_ERROR, message: e.message });
    return;
  }
});
router.get("/contact/:id", async (req, res, next) => {
  try {
    if (!req.params.id) {
      throw Error("Not id");
    }
    const getContact = await getContactFindOne(req.params.id);
    res.status(Config.RESPONSE_SUCCESS.code).json({
      ...Config.RESPONSE_SUCCESS,
      data: { contact: getContact },
    });
    return;
  } catch (e) {
    res
      .status(Config.RESPONSE_ERROR.code)
      .json({ ...Config.RESPONSE_ERROR, message: e.message });
    return;
  }
});
router.post("/contact", async (req, res, next) => {
  try {
    console.log("req.body", req.body);
    const {
      group_id,
      contact_first_name,
      contact_phone,
      email,
      contact_url,
    } = req.body;

    if (
      !group_id &&
      !contact_first_name &&
      !contact_phone &&
      !email &&
      !contact_url
    ) {
      throw Error("data fail");
    }
    const getId = await insertContact(req.body);
    res.status(Config.RESPONSE_SUCCESS.code).json({
      ...Config.RESPONSE_SUCCESS,
      data: { id: getId },
    });
    return;
  } catch (e) {
    res
      .status(Config.RESPONSE_ERROR.code)
      .json({ ...Config.RESPONSE_ERROR, message: e.message });
    return;
  }
});
router.patch("/contact", async (req, res, next) => {
  try {
    if (!req.body.contact_id) {
      throw Error("Not id");
    }
    await updateContact(req.body);
    res.status(Config.RESPONSE_SUCCESS.code).json({
      ...Config.RESPONSE_SUCCESS,
    });
    return;
  } catch (e) {
    res
      .status(Config.RESPONSE_ERROR.code)
      .json({ ...Config.RESPONSE_ERROR, message: e.message });
    return;
  }
});
router.delete("/contact/:id", async (req, res, next) => {
  try {
    if (!req.params.id) {
      throw Error("Not id");
    }
    await deleteContact(req.params.id);
    res.status(Config.RESPONSE_SUCCESS.code).json({
      ...Config.RESPONSE_SUCCESS,
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
