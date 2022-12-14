import { Users } from "../models/Users.js";

export const getUsers = async (req, res) =>{
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export const createUser = async (req, res) =>{
  try {
    const {firstName, lastName, email,password, adminRole} = req.body;
    const newUser = await Users.create({firstName, lastName, email, password, adminRole});
    res.json(newUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export const getUser = async (req, res) =>{
  try {
    const { id } = req.params;
    const user = await Users.findByPk(id);

    if(!user){
      return res.status(404).json({ message:'El Usuario buscado no existe' });
    }

    res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export const updateUser = async (req, res) =>{
  try {
    const { id } = req.params;
    const user = await Courses.findByPk(id);

    user.set(req.body);
    await user.save();

    res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export const deleteUser = async (req, res) =>{
  try {
    const { id } = req.params;
    await Users.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}