import { Router } from "express";
import { getCourses,createCourse, updateCourse, deleteCourse, getCourse } from "../controllers/courses.controller.js";
//import {tokenVerifyHandler} from '../middlewares/auth.handler.js'


const router = Router();
/*

router.get("/courses",tokenVerifyHandler,getCourses);
router.post("/courses",tokenVerifyHandler,createCourse);

router.get("/courses/:id",tokenVerifyHandler,getCourse);

router.put("/courses/:id",tokenVerifyHandler,updateCourse);
router.delete("/courses/:id",tokenVerifyHandler,deleteCourse);
*/
export default router;