import express from 'express';
import coursesRoutes from './routes/courses.routes.js'
import usersRoutes from './routes/users.routes.js'
import authorsRoutes from './routes/authors.routes.js'


import cors from 'cors';
const app = express();



//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use(coursesRoutes);
app.use(usersRoutes);
app.use(authorsRoutes);


export default app;