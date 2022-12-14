import {DataTypes } from 'sequelize';
import {sequelize} from '../database/courses_db.js';
import {Courses} from './Courses.js';

export const Users = sequelize.define('users',{
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
},
{
  timestamps: true
})

Users.belongsToMany(Courses, { through: ActorMovies });
Courses.belongsToMany(Users, { through: ActorMovies });