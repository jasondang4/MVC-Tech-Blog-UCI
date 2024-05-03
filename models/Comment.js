//imports seqialize for the model
const { Model, DataTypes } = require('sequelize');
//users the connection.js in Config to connect to postgres
const sequelize = require('../config/connection');

//creates the class Comment as an extemtion of a sequalize model
class Comment extends Model {}

//the model for a comment
Comment.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      //foreign key to link to the users id
      user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'comment',
    }
  )
    
    //exports the model
    module.exports = Comment;