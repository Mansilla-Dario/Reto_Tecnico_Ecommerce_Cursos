import express from 'express';
import coursesRoutes from './routes/courses.routes.js'
import usersRoutes from './routes/users.routes.js'
import authorsRoutes from './routes/authors.routes.js'
import userCourseRoutes from './routes/user_courses.routes.js'


import cors from 'cors';
const app = express();



//Los middlewares irían aquí
app.use(express.json());
app.use(cors());

//routes
app.use(coursesRoutes);
app.use(usersRoutes);
app.use(authorsRoutes);
app.use(userCourseRoutes);


export default app;