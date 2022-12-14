import { Router } from "express";
import { followCourse, unfollowCourse,getCoursesFollowedByUSerId} from "../controllers/userCourses.controller.js";



const router = Router();

router.get("/api/user_courses/:id",followCourse);
router.get("/api/user_courses/:id",unfollowCourse);
router.get("/api/user_courses/:id",getCoursesFollowedByUSerId);

export default router;