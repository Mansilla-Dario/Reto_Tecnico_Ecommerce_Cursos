import { Router } from "express";
import {addCourse,getCoursesAddedByUserId,getCoursesRatingByCourseId,deletCoursesAddedByUserId} from "../controllers/userCourses.controller.js";



const router = Router();

router.post("/api/ad-course",addCourse);
router.get("/api/users-added",getCoursesAddedByUserId);
router.delete("/api/users-added",deletCoursesAddedByUserId);
router.get("/api/courses-rating",getCoursesRatingByCourseId);



export default router;