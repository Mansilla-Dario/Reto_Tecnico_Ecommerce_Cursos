import { Courses } from "../models/Courses.js";

export const getCourses = async (req, res) =>{
  try {
    const courses = await Courses.findAll();
    res.json(courses);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export const createCourse = async (req, res) =>{
  try {
    const {name, segmentId} = req.body;
    const newCourse = await Courses.create({name,segmentId});
    res.json(newCourse);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export const getCourse = async (req, res) =>{
  try {
    const { id } = req.params;
    const course = await Courses.findByPk(id);

    if(!course){
      return res.status(404).json({ message:'El Programa buscado no existe' });
    }

    res.json(course);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export const updateCourse = async (req, res) =>{
  try {
    const { id } = req.params;
    const course = await Courses.findByPk(id);

    course.set(req.body);
    await course.save();

    res.json(course);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export const deleteCourse = async (req, res) =>{
  try {
    const { id } = req.params;
    await Courses.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}