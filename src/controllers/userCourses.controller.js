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

export const getCoursesRatingByCourseId = async (req, res) =>{
  try {
    const { courseID } = req.body;
    const coursesAdded = await UserCourse.findAll({where:{courseID: courseID}});
    let average=0;
    let ratingSum=0;
    let totalRatingSum=0;
    coursesAdded.forEach((course)=>{
      if(course.rating!=0){
        ratingSum+=course.rating;
        totalRatingSum++;
      }
    })
    if(totalRatingSum!=0){
      average=ratingSum/totalRatingSum
    }
    if(average==0){
      return res.status(404).json({ message:'El curso no tiene puntuación promedio' });
    }

    res.json(average);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}



export const getCoursesAddedByUserId = async (req, res) =>{
  try {
    const { userID } = req.body;
    const coursesAdded = await UserCourse.findAll({where:{userID:userID}});
    

    if(!coursesAdded){
      return res.status(404).json({ message:'El usuario no está matriculado en ningun curso' });
    }

    res.json(coursesAdded);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
export const deletCoursesAddedByUserId = async (req, res) =>{
  try {
    const { userID,courseID } = req.body;
    await UserCourse.destroy({where:{userID:userID, courseID: courseID}});
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}