// imports seqialize for the model
const { Model, DataTypes } = require('sequelize');
// uses the connection.js in Config to connect to postgres
const sequelize = require('../config/connection');

// imports encryption for passwords
const bcrypt = require('bcrypt');

// creates the class Comment as an extemtion of a sequalize model
class User extends Model {}

// the model for a user
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  // {
  //   hooks: {
  //     async beforeCreate(newData) {
  //       newData.password = await bcrypt.hash(newData.password, 10);
  //         return newData;
  //     },
  //     async beforeUpdate(updatedData) {
  //       updatedData.password = await bcrypt.hash(updatedData.password, 10);
  //         return updatedData;
  //     }
  //   },
  // },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

// exports the model
module.exports = User;