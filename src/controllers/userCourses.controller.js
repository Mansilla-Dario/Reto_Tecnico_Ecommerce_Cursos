import { Users } from "../models/Users.js";
import { Courses } from "../models/Courses.js";
import { UserCourse } from "../models/users-courses.js";


export const addCourse = async (req, res) =>{
  try {
    const {userID, courseID, rating} = req.body;
    const newUserCourse = await UserCourse.create({userID, courseID, rating});
    res.json(newUserCourse);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export const listCoursesAdded = async (req, res) =>{
  try {
    const userCourse = await UserCourse.findAll();
    res.json(userCourse);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}



export const getCoursesAddedByUserId = async (req, res) =>{
  try {
    const { userId } = req.body;
    const coursesAdded = await UserCourse.findAll({where:{userID:userId}});
    console.log("req.body---",req.body)
    console.log("---",coursesAdded)

    if(!coursesAdded){
      return res.status(404).json({ message:'El usuario no está matriculado en ningun curso' });
    }

    res.json(coursesAdded);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}