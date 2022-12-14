import {DataTypes } from 'sequelize';
import {sequelize} from '../database/courses_db.js';
import {Courses} from './Courses.js';
import {Users} from './Users.js';



export const UserCourse = sequelize.define('user_course',{
  id:{
    allowNull: false,
    type:DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  
  rating:{
    allowNull: false,
    type:DataTypes.INTEGER,
    defaultValue: 0
  },
  userID:{
    field:'user_id',
    allowNull: false,
    type:DataTypes.INTEGER,
    /*references:{
      model:Users,
      key: 'id'
    },
    onUpdate:'CASCADE',
    onDelete:'SET NULL'*/
  },
  courseID:{
    field:'course_id',
    allowNull: false,
    type:DataTypes.INTEGER,
   /* references:{
      model:Courses,
      key: 'id'
    },
    onUpdate:'CASCADE',
    onDelete:'SET NULL'*/
  }
 
},
{
  timestamps: true
})




