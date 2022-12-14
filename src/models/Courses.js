import {DataTypes } from 'sequelize';
import {sequelize} from '../database/courses_db.js';

export const Courses = sequelize.define('courses',{
  id: {
    type:DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  courseName:{
    type:DataTypes.STRING,
    notNull: true, 
    unique: true
  },
  
  summary:{
    type:DataTypes.TEXT,
    notEmpty: true, 
    notNull: true, 
  },
  /*banner:{
    
  },*/
  
 
},
{
  timestamps: true
}
)