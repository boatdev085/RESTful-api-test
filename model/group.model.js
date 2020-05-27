module.exports = (sequelize, Sequelize) => {
  const group = sequelize.define("group", {
    group_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    group_name: {
      type: Sequelize.STRING,
    },
    group_description: {
      type: Sequelize.STRING,
    },
    group_count: {
      type: Sequelize.INTEGER,
    },
    group_flag: {
      type: Sequelize.BOOLEAN,
    },
  });

  return group;
};
