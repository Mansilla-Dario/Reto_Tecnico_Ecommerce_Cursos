import express from 'express';
import coursesRoutes from './routes/courses.routes.js'


import cors from 'cors';
const app = express();



//middlewares
app.use(express.json());
app.use(cors());


//app.use(coursesRoutes);


export default app;