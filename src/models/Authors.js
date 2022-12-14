import {DataTypes } from 'sequelize';
import {sequelize} from '../database/courses_db.js';
import {Courses} from './Courses.js';

export const Authors = sequelize.define('authors',{
  id: {
    allowNull: false,
    type:DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'first_name',
  },
  lastName: {
    type: DataTypes.STRING,
    field: 'last_name',
    allowNull: false,
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
})

Authors.hasMany(Courses,{
  foreignKey: 'authors_id',
  sourceKey:'id' 
})

Courses.belongsTo(Authors,{
  foreignKey: 'authors_id',
  targetId:'id' 
})