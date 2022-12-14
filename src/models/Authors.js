import {DataTypes } from 'sequelize';
import {sequelize} from '../database/courses_db.js';

export const Authors = sequelize.define('authors',{
  id: {
    type:DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
    validate: {
      //valida si contiene la estructura de un email
      isEmail: true, 
    }
  },
  website:{
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
    isUrl: true
  },
  
 
},
{
  timestamps: true
}
)