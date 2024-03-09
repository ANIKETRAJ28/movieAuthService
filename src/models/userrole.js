'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserRole extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserRole.init({
    UserId: {
      type: DataTypes.INTEGER,
      require: true,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "User",
        key: "id"
      }
    },
    RoleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      require: true,
      primaryKey: true,
      references: {
        model: "Role",
        key: "id"
      }
    }
  }, {
    sequelize,
    modelName: 'UserRole',
  });
  return UserRole;
};