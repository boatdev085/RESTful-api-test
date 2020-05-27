module.exports = (sequelize, Sequelize) => {
  const contact = sequelize.define("contact", {
    contact_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    group_id: {
      type: Sequelize.INTEGER,
    },
    contact_first_name: {
      type: Sequelize.STRING,
    },
    contact_last_name: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    contact_birthday: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    contact_phone: {
      type: Sequelize.STRING,
    },
    contact_email: {
      type: Sequelize.STRING,
    },
    contact_url: {
      type: Sequelize.STRING,
    },
  });

  return contact;
};
