'use strict';
const {
  Model
} = require('sequelize');

const { SALT } = require("../config/server-config");
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Role, {
        through: "UserRole",
        as: "role",
        foreignKey: "userId",
        onDelete: "CASCADE"
      });
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      require: true,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      require: true,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      require: true,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      require: true,
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate((user) => {
    user.password = bcrypt.hashSync(user.password, SALT);
  });

  return User;
};