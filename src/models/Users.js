import {DataTypes, Sequelize } from 'sequelize';
import {sequelize} from '../database/courses_db.js';
import {Courses} from './Courses.js';
import {UserCourse} from './users-courses.js';

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
  password: {
    type: DataTypes.STRING(64),
    allowNull: false,
    validate: {
      //valida si contiene como mínimo: ocho caracteres, al menos una letra mayúscula, una letra minúscula y un número:
      is: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i
      
    }
  },
  adminRole:{
    type:DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false
  },
},
{
  timestamps: true
})

Users.belongsToMany(Courses, {as:"User", foreignKey:'user_id',through: UserCourse });
Courses.belongsToMany(Users, {as:"Course", foreignKey:'course_id',through: UserCourse });
sequelize.sync({alter:true}); //force:true

