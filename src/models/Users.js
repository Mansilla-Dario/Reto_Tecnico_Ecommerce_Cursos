import {DataTypes, Sequelize } from 'sequelize';
import {sequelize} from '../database/courses_db.js';
import {Courses} from './Courses.js';

export const Users = sequelize.define('users',{
  id: {
    type:DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: {
    type: DataTypes.STRING,
    field: 'first_name',
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    field: 'last_name',
    // allowNull defaults to true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      //valida si contiene la estructura de un email
      isEmail: true, 
    }
  },
//   createdAt:{
//     allowNull: false,
//     type: DataTypes.DATE,
//     field:'create_at',
//     defaultValue:Sequelize.NOW
//   },
},
{
  timestamps: true
})

Users.belongsToMany(Courses, {as:"User", foreignKey:'user_id',through: 'User_Courses' });
Courses.belongsToMany(Users, {as:"Course", foreignKey:'course_id',through: 'User_Courses' });
sequelize.sync({alter:true}); //force:true