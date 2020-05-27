const db = require("../model/index");
const moment = require("moment");
const Group = db.group;
const Contact = db.contact;

const getGroupAll = async (params) => {
  return await Group.findAll({});
};
const getGroupFindOne = async (id) => {
  return await Group.findAll({
    limit: 1,
    where: {
      group_id: id,
    },
    order: [["createdAt", "DESC"]],
  }).then((group) => {
    return (group && group.length > 0 && group[0]) || {};
  });
};
const insertGroup = async (params) => {
  return await Group.create({
    group_name: params.group_name || "",
    group_description: params.group_description || "",
    group_count: 0,
    group_flag: true,
  }).then(async (res) => await res.group_id);
};
const updateGroup = async (params) => {
  return await Group.update(
    {
      group_name: params.group_name,
      group_description: params.group_description,
    },
    { where: { group_id: params.group_id } }
  );
};
const deleteGroup = async (id) => {
  return await Group.destroy({
    where: { group_id: id },
  });
};
const getContactAll = async (params) => {
  return await Contact.findAll({});
};
const getContactFindOne = async (id) => {
  return await Contact.findAll({
    limit: 1,
    where: {
      contact_id: id,
    },
    order: [["createdAt", "DESC"]],
  }).then((contact) => {
    return (contact && contact.length > 0 && contact[0]) || {};
  });
};
const insertContact = async (params) => {
  const convertBirthday = params.contact_birthday
    ? moment(params.contact_birthday)
    : null;
  return await Contact.create({
    group_id: params.group_id,
    contact_first_name: params.contact_first_name,
    contact_last_name: params.contact_last_name || "",
    contact_birthday: convertBirthday,
    contact_phone: params.contact_phone,
    contact_email: params.contact_email,
    contact_url: params.contact_url,
  }).then(async (res) => await res.contact_id);
};
const updateContact = async (params) => {
  const convertBirthday = params.contact_birthday
    ? moment(params.contact_birthday)
    : null;
  return await Contact.update(
    {
      group_id: params.group_id,
      contact_first_name: params.contact_first_name,
      contact_last_name: params.contact_last_name,
      contact_birthday: convertBirthday,
      contact_phone: params.contact_phone,
      contact_email: params.contact_email,
      contact_url: params.contact_url,
    },
    { where: { contact_id: params.contact_id } }
  );
};
const deleteContact = async (id) => {
  return await Contact.destroy({
    where: { contact_id: id },
  });
};
module.exports = {
  getGroupAll,
  getGroupFindOne,
  getContactAll,
  getContactFindOne,
  insertGroup,
  insertContact,
  updateGroup,
  deleteGroup,
  updateContact,
  deleteContact,
};
