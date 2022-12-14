import { Router } from "express";
import {addCourse,getCoursesAddedByUserId} from "../controllers/userCourses.controller.js";



const router = Router();

router.get("/api/users-added",getCoursesAddedByUserId);
router.post("/api/ad-course",addCourse);



export default router;