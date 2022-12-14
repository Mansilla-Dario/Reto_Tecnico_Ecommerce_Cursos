import { Router } from "express";
import { getCourses,createCourse, updateCourse, deleteCourse, getCourse } from "../controllers/courses.controller.js";
//import {tokenVerifyHandler} from '../middlewares/auth.handler.js'


const router = Router();

router.get("/api/courses",getCourses);
router.post("/api/courses",createCourse);

router.get("/api/courses/:id",getCourse);

router.put("/api/courses/:id",updateCourse);
router.delete("/api/courses/:id",deleteCourse);

export default router;